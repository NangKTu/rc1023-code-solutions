SELECT "countryId", COUNT("cityId") AS "numberOfCities"
FROM "cities"
GROUP BY "countryId";
