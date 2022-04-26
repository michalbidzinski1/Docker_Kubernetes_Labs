const express = require("express");
const app = express();
app.use(express.json());

const config = require("./conf");

const dbConnDataPostgres = {
  host: config.postgresHost,
  port: config.postgresPort || 5432,
  database: config.postgresDb || "postgres",
  user: config.postgresUser || "postgres",
  password: config.postgresPass,
};

const { Client } = require("pg");
const clientPostgres = new Client(dbConnDataPostgres);

clientPostgres
  .connect()
  .then(() => {
    console.log("Connected to PostgreSQL");
  })
  .catch((err) => {
    throw err;
  });

const Redis = require("ioredis");

const dbConnDataRedis = {
  port: config.redisPort || 6379,
  host: config.redisHost,
};
const clientRedis = new Redis(dbConnDataRedis);

clientRedis.on("error", (err) => {
  throw err;
});
clientRedis.on("connect", () => {
  console.log(`Connected to Redis.`);
});

//ENDPOINTY

app.get("/", async (req, res) => {
  try {
    const result = await clientPostgres.query("SELECT * FROM nwd");
    res.send({ result: result.rows });
  } catch (error) {
    throw error;
  }
});

app.listen(5000, () => {
  console.log(" running on port 5000!");
});
