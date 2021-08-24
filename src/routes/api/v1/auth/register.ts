import { Router, Request, Response } from "express";

const register: Router = Router();
export default register;

register.post('/register', (req: Request, res: Response) => {
  res.status(200).send({
    code: 200,
    body: {
      message: 'registered'
    }
  })
});