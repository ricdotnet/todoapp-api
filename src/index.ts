import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import dotenv from 'dotenv';

import router from './routes';

// import { connection } from './database/connect';
import { DbConnect } from './database/connect';
const db = new DbConnect();

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

  try{
    await db.getConnection().then(() => {
      console.log('\n------------------------------\n'
      + 'DATABASE CONNECTED\n'
      + '------------------------------')
    }).finally(() => {
      console.log(`Server is listening on port ${PORT || 4000}`)
    })
    
    // console.log(`Server is on and listening on port ${PORT || 4000}`)
  } catch (e) {
    console.log(e)
  }

  // try {
  //   await db.doConnect().connect((error) => {
  //     if (error)
  //       return console.log(error);

  //     console.log('Database connected!');
  //     console.log(`Server is online and listening on port: ${PORT || 4000}`);
  //     console.log(`\n==========\nhttp://localhost:${PORT || 4000}\n==========\n`);
  //   });
  // } catch (e) {
  //   console.log(e);
  // }
});