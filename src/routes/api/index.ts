import { Router } from "express";
import v1 from "./v1";

const api: Router = Router();
export default api;

api.use('/v1', v1)