import { Router } from "express";
import { createPeriodo, findAllPeriodo, findPeriodoActivo, togglePeriodo} from "../controllers/periodo.controller.js";


export const periodoRouter = Router()
periodoRouter.post("/periodo", createPeriodo)
periodoRouter.get("/periodo", findAllPeriodo)
periodoRouter.put("/periodo/:periodoId", togglePeriodo)
periodoRouter.get("/periodoActivo", findPeriodoActivo)