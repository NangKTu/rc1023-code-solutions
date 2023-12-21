import express from 'express';
import pg from 'pg';
import { ClientError } from './client-error.js';
import { errorMiddleware } from './error-middleware.js';

const app = express();

// only create ONE pool for your whole server
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

app.get('/api/grades', async (req, res, next) => {
  try {
    // throw new Error();
    const sql = `
      select * from "grades";
    `;
    const result = await db.query(sql);
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});

app.get('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const gradeId = Number(req.params.gradeId);
    if (!Number.isInteger(gradeId) || gradeId <= 0) {
      throw new ClientError(400, 'gradeId must be a positive integer');
    }
    const sql = `
        select *
          from "grades"
          where "gradeId" = $1
      `;

    const params = [gradeId];

    const result = await db.query(sql, params);
    const grade = result.rows[0];
    if (!grade) {
      res.status(404).json({ error: 'id could not be found' });
      throw new ClientError(404, 'id could not be found');
    }
    res.json(grade);
  } catch (err) {
    next(err);
  }
});

app.use(express.json());

app.post('/api/grades', async (req, res, next) => {
  try {
    const { name, course, score } = req.body;
    if (!name) {
      throw new ClientError(400, 'No name provided');
    }
    if (!course) {
      throw new ClientError(400, 'No course provided');
    }
    if (typeof score !== 'number') {
      throw new ClientError(400, `score is not a number: ${score}`);
    }
    if (score < 0 || score > 100) {
      throw new ClientError(400, `score ${score} not between 0 and 100`);
    }

    const sql = `
      insert into "grades" ("name", "course", "score")
        values ($1, $2, $3)
        returning *;
    `;
    const params = [name, course, score];

    const result = await db.query(sql, params);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    next(err);
  }
});

app.delete('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const gradeId = Number(req.params.gradeId);
    if (!Number.isInteger(gradeId) || gradeId <= 0) {
      throw new ClientError(400, 'gradeId must be a positive integer');
    }

    const checkGradeExistsSql = `
      SELECT *
      FROM "grades"
      WHERE "gradeId" = $1
    `;
    const checkGradeExistsParams = [gradeId];

    const checkResult = await db.query(
      checkGradeExistsSql,
      checkGradeExistsParams
    );
    const existingGrade = checkResult.rows[0];

    if (!existingGrade) {
      res.status(404).json({ error: 'Grade not found' });
      throw new ClientError(404, 'Grade not found');
    }

    const deleteGradeSql = `
      DELETE FROM "grades"
      WHERE "gradeId" = $1
      RETURNING *;
    `;
    const deleteGradeParams = [gradeId];

    const deleteResult = await db.query(deleteGradeSql, deleteGradeParams);
    const deletedGrade = deleteResult.rows[0];

    res.status(204).json(deletedGrade);
  } catch (err) {
    next(err);
  }
});

app.put('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const gradeId = Number(req.params.gradeId);
    if (!Number.isInteger(gradeId) || gradeId <= 0) {
      throw new ClientError(400, 'gradeId must be a positive integer');
    }

    const { name, course, score } = req.body;
    if (!name || !course || typeof score !== 'number') {
      throw new ClientError(400, 'Invalid or missing data in the request body');
    }
    if (score < 0 || score > 100) {
      throw new ClientError(400, `score ${score} not between 0 and 100`);
    }

    const checkGradeExistsSql = `
      SELECT *
      FROM "grades"
      WHERE "gradeId" = $1
    `;
    const checkGradeExistsParams = [gradeId];

    const checkResult = await db.query(
      checkGradeExistsSql,
      checkGradeExistsParams
    );
    const existingGrade = checkResult.rows[0];

    if (!existingGrade) {
      res.status(404).json({ error: 'Grade not found' });
      throw new ClientError(404, 'Grade not found');
    }

    const updateGradeSql = `
      UPDATE "grades"
      SET "name" = $1, "course" = $2, "score" = $3
      WHERE "gradeId" = $4
      RETURNING *;
    `;
    const updateGradeParams = [name, course, score, gradeId];

    const updateResult = await db.query(updateGradeSql, updateGradeParams);
    const updatedGrade = updateResult.rows[0];

    res.status(200).json(updatedGrade);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
