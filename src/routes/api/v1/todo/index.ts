import {Router} from 'express';

const todo: Router = Router();
export default todo;

import add from "./add";
import get from "./get";
import remove from "./remove";

todo.use(add)
todo.use(get)
todo.use(remove)