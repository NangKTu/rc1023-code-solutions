SELECT "firstName",
       "lastName"
  FROM "customers"
  JOIN "payments" using ("customerId")
  ORDER BY "amount" DESC
  LIMIT 10;
