const express = require("express");
const app = express();
app.use(express.json());

const config = require("./config");

const dbConnDataPostgres = {
  host: config.postgresHost || "172.18.0.3",
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
    clientPostgres.query(
      "CREATE TABLE IF NOT EXISTS nwd(numA int, numB int, result int)"
    );
    console.log("Connected to PostgreSQL");
  })
  .catch((err) => console.error("Connection error", err.stack));

const Redis = require("ioredis");

const dbConnDataRedis = {
  port: config.redisPort || 6379,
  host: config.redisHost || "172.18.0.2",
};
const clientRedis = new Redis(dbConnDataRedis);

clientRedis.on("error", (err) => {
  console.error("Error connecting to Redis", err);
});
clientRedis.on("connect", () => {
  console.log(`Connected to Redis.`);
});

function nwd(a, b) {
  let tmp;
  while (b != 0) {
    tmp = a;
    a = b;
    b = tmp % b;
  }
  return a;
}

app.get("/", async (req, res) => {
  const result = await clientPostgres.query("SELECT * FROM nwd");
  res.send({ result: result.rows });
});

app.post("/", async (req, res) => {
  const { numA, numB } = req.body;
  const value = nwd(parseInt(numA), parseInt(numB));

  let tmp;
  await clientRedis.get((numA, numB), (err, result) => {
    if (err) return res.sendStatus(400);
    if (result) {
      tmp = result;
    }
  });

  if (!tmp) {
    tmp = (
      await clientPostgres.query(
        "INSERT INTO nwd (numA, numB, result) VALUES($1, $2, $3) RETURNING result",
        [numA, numB, value]
      )
    ).rows;

    await clientRedis.set((numA, numB), value);
  }

  res.send({ result: tmp });
});

app.listen(5000, () => {
  console.log("App running on port 5000");
});
