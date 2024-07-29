require('dotenv').config();
const { PORT = 5001 } = process.env;
const cors = require("cors");  

const app = require("./app");
const knex = require("./db/connection");

app.use(cors()); 

const listener = () => console.log(`Listening on Port ${PORT}!`);

knex.migrate
  .latest()
  .then((migrations) => {
    console.log("migrations", migrations);
    app.listen(PORT, listener);
  })
  .catch(console.error);
