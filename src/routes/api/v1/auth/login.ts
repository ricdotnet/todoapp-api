import { Router, Request, Response } from "express";

const login: Router = Router()
export default login

login.post('/login', (req: Request, res: Response) => {
  res.status(200).send({
    code: 200,
    body: {
      message: 'logged in'
    }
  })
})