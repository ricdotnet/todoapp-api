import {Router, Request, Response} from "express";

const add: Router = Router();
export default add;

add.post('/add', (req: Request, res: Response) => {
  console.log(req.body)

  res.end()
})