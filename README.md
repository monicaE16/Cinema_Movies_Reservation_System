# Cinema_Reservation_System

A web application for cinema reservation, with an interface for both guests and cimena managers to track booked and available tickets, rooms and other features.

## Tech Stack:
- Node.js
- MySQL
- React

## To use this code

### Dependencies
To install packages:
```
npm i
```
### Backend:

- Edit config.json file to the name and password of your database and the secret used in tokens

- To start the server and build the database:
```
cd backend
nodemon server.js
```

- To populate the database:
```
 npx sequelize-cli db:seed:all
 ```

- To rollback insertions:
```
 npx sequelize-cli db:seed:undo:all
 ```
 
 ### Frontend:
 - To start the App use:
 ```
 cd..
 cd Front-End
 npm run start
 ```
