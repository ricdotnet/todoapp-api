import { Router, Request, Response } from 'express';

import { Query } from '../../../../database/query';
const _q = new Query();

const todo: Router = Router();
export default todo;

todo.get('/all', async (req: Request, res: Response) => {
  // _q.connection(<_Query>{query: 'select * from todo', values: ['hey', 'yo']});

  let ress = await _q.select('*')
    .from('todo')
    .where({complete: 'yes'}) // object as: {username: 'username'} or {id: id}
    // .andWhere({id: 48})
    .orWhere({id: 48})
    .execute()

  res.send(ress);
});