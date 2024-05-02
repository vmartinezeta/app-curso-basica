import { Router } from "express";
import { createTipoPeriodo } from "../controllers/tipoPeriodo.controller.js";


export const tipoPeriodoRouter = Router()
tipoPeriodoRouter.post("/tipoPeriodo", createTipoPeriodo)