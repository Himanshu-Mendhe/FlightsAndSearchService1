# Wlecome to FlightAndService
# project setup
- clone the project on your local
- `npm install`
- create `.env` and add following -
     - `PORT = 3000;`
-  inside `src/config` foldercreate a new file config.json and add
'''
{
  "development": {
    "username": "root",
    "password": "himanshuT1!",
    "database": "flight_search_database_dev",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

'''    