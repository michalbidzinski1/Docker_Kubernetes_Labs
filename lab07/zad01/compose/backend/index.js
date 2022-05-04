const express = require("express");
const app = express();
app.use(express.json());

const config = require("./conf");

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

app.listen(5000, () => {
  console.log(" running on port 5000!");
});
