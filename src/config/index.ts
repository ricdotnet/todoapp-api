/**
 * NOT A VERY NECESSARY FILE
 */

import dotenv from 'dotenv'
dotenv.config()

interface Config {
  [key: string]: any
}

let config: Config = {
  secret: process.env.JWT_SECRET
};

export default config;