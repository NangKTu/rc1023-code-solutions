UPDATE "actors"
SET "firstName" = 'Baby',
    "lastName" = 'Yoda'
WHERE "actorId" = 15
returning *;
