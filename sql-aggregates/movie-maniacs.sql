SELECT
    "c"."customerId",
    "c"."firstName",
    "c"."lastName",
    SUM("p"."amount") AS "totalPaid"
FROM
    "customers" AS "c"
JOIN
    "payments" AS "p" USING ("customerId")
GROUP BY
    "c"."customerId", "c"."firstName", "c"."lastName"
ORDER BY
    "totalPaid" DESC;
