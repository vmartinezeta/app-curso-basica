import { Router } from "express";
import { createAula, findAll } from "../controllers/aula.controller.js";


export const aulaRouter = Router()
aulaRouter.post("/aula", createAula)
aulaRouter.get("/aula/:cursoId", findAll)