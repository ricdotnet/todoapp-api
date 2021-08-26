import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import dotenv from 'dotenv';

import router from './routes';

import {DatabaseConnect} from './database';
const db = new DatabaseConnect();

// create express app
const app: express.Express = express();
dotenv.config();

// set all middlewares
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));

// ser the router entry point
app.use(router);

// start the app/server
const PORT: string = process.env.PORT || '4000';
app.listen(PORT, async () => {

  try {
    await db.getConnection().then(() => {
      console.log('\n------------------------------\n'
        + 'DATABASE CONNECTED\n'
        + '------------------------------')
    }).finally(() => {
      console.log(`Server is listening on port ${PORT || 4000}\n`)
    })
  } catch (e) {
    console.log(e)
  }

});