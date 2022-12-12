# whereClinic - REST API for search local clinics in Australia, based on TypeScript, Express and PostgreSQL.

            CLINICS

// method: GET - https://where-clinic-app.herokuapp.com/clinics?page=(1...n)
Get all clinics from database with pagination. Limit = 20 items on page. Page(from 1 to n) in query params.

// method: GET - https://where-clinic-app.herokuapp.com/clinic/:slug
Get full info about clinic by clinic slug.

// method: GET - https://where-clinic-app.herokuapp.com/code/:code
Search for clinics by area post code.

// method: GET - https://where-clinic-app.herokuapp.com/name/:name
Search for clinics by clinic name.

// method: GET - https://where-clinic-app.herokuapp.com/city/:city
Search for clinics by city.

// method: GET - https://where-clinic-app.herokuapp.com/suburb/:suburb
Search for clinics by suburb.

// method: GET - https://where-clinic-app.herokuapp.com/state/:state
Search for clinics by state.

// method: GET - https://where-clinic-app.herokuapp.com/nearby/:slug
Search for clinics in nearby areas by clinic slug.
