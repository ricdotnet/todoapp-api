import { Router } from "express";

import auth from "./auth";
import todo from "./todo";

const v1: Router = Router();

v1.use('/auth', auth);
v1.use('/todo', todo);

export default v1;