import {Router, Request, Response} from 'express';

import {QueryBuilder} from "../../../../database";

const _q = new QueryBuilder();

const todo: Router = Router();
export default todo;

todo.get('/all', async (req: Request, res: Response) => {

  let ress: any = ''

  // let ress = await _q.select('*')
  //   .from('todo')
  //   .where({ complete: 'yes' }) // object as: {username: 'username'} or {id: id}
  //   // .andWhere({id: 48})
  //   .orWhere({ id: 48 })
  //   .execute();

  // ress = await _q.insert('todo')
  //   // .values(['title', 'content', 'user_id'],
  //   //   ['hello...', 'this is the content', 'user_id'])
  //   .values({
  //     title: 'another',
  //     content: 'more content',
  //     user_id: 'new_user'
  //   })
  //   .execute()

  res.send(ress);
});