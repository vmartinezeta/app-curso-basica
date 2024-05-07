import { Router } from "express";
import { createTipoPeriodo, findAllTipoPeriodo } from "../controllers/tipoPeriodo.controller.js";


export const tipoPeriodoRouter = Router()
tipoPeriodoRouter.post("/tipoPeriodo", createTipoPeriodo)
tipoPeriodoRouter.get("/tipoPeriodo", findAllTipoPeriodo)