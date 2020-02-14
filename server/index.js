require("dotenv").config();

const {CONNECTION_STRING, SERVER_PORT} = process.env;
//const ctrl = require("./controller.js")
const massive = require("massive");
const express = require("express");

const app = express ()

app.use(express.json())


massive({
   connectionString: CONNECTION_STRING,
   ssl: {
      rejectUnauthorized: false
   }
})
.then(dbInstance => {
   app.set("db", dbInstance); /*comeback later and evaluate what this is doing*/
      console.log(`     |--Database Connected!--|`)
   app.listen(SERVER_PORT, () =>
    console.log(`      |-Server is running on ${SERVER_PORT}!-|`)
    );   
});

