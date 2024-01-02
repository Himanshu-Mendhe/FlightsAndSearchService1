# Wlecome to FlightAndService
## project setup
- clone the project on your local
- `npm install`
- create `.env` and add following -
     - `PORT = 3000;`
-  inside `src/config` foldercreate a new file config.json and add
```json
{
  "development": {
    "username": "<your db names>",
    "password": "<your db password>",
    "database": "flight_search_database_dev",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```
once you added db config, go to src folder from your terminal and execute npm sequelize db:create

## DB design
 - airplane table
 - flight
 - airport
 - city
