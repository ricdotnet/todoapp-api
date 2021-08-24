import dotenv from 'dotenv'
dotenv.config()

interface Config {
  [key: string]: any
}

let config: Config = {
  secret: process.env.JWT_SECRET,
  database: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    db: process.env.DB_DATABASE
  }
};

export default config;