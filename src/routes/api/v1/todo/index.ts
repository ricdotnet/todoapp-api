import { Router, Request, Response } from 'express';

import { DbConnect } from '../../../../database/connect';
const db = new DbConnect();

const todo: Router = Router();
export default todo;

todo.get('/all', (req: Request, res: Response) => {
  db.createPool().getConnection((error, connection) => {
    if(error) return console.log(error)

    connection.query('select * from todo', (error, result) => {
      res.send(result)
    });
  })
})