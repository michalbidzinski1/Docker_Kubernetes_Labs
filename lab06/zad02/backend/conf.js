require('dotenv').config();

module.exports = {
    redisHost: process.env.REDIS_HOST,
    redisPort: process.env.REDIS_PORT,
    postgresHost: process.env.POSTGRES_HOST,
    postgresPort: process.env.POSTGRES_PORT,
    postgresUser: process.env.POSTGRES_USER,
    postgresPass: process.env.POSTGRES_PASSWORD,
    postgresDb: process.env.POSTGRES_DB
}