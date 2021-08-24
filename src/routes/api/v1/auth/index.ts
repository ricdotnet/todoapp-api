import { Router } from "express";
import login from "./login";
import register from "./register";

const auth: Router = Router();
export default auth;

auth.use(register);
auth.use(login)