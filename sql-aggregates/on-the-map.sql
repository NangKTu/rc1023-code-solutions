SELECT "c"."countryId", "c"."name" AS "countryName", COUNT("ci"."cityId") AS "numberOfCities"
FROM "countries" AS "c"
JOIN "cities" AS "ci" USING ("countryId")
GROUP BY "c"."countryId", "c"."name";
