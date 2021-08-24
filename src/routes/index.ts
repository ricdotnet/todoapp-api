import { Router } from "express";
import api from "./api";

const router: Router = Router();
export default router;

router.use('/api', api);