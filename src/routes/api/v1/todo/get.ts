import {Router, Request, Response} from "express";

const get: Router = Router();
export default get;

get.get('/all', (req: Request, res: Response) => {

  res.end()
})

get.get('/t', (req: Request, res: Response) => {
  console.log(req.query.test)

  res.end()
})