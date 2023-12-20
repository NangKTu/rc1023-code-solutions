SELECT "line1",
       "cities"."name" AS "cityName",
       "district",
       "countries"."name"
  FROM "addresses"
  JOIN "cities" using ("cityId")
  JOIN "countries" using ("countryId")
