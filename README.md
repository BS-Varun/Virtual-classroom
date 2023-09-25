# Virtual-classroom
A backend for virtual classroom edtech.
use npm install express 
Use terminal for POST requests
curl -X POST -H "Content-Type: application/json" -d "{\"className\": \"Eng 101\"}" http://localhost:3000/add_classroom
or use POSTMAN
The JSON data itself is {"className": "Eng 101"} as an example for adding a classroom.
To make a GET request using curl in the command line, use a command like this:
curl http://localhost:3000/list_classrooms
similarly can test other API endpoints.
