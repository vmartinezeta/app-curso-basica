import { Router } from "express";
import { createAula, deleteAula, findAll, updateAula } from "../controllers/aula.controller.js";


export const aulaRouter = Router()
aulaRouter.post("/aula", createAula)
aulaRouter.get("/aula/:cursoId", findAll)
aulaRouter.put("/aula/:aulaId", updateAula)
aulaRouter.delete("/aula/:aulaId", deleteAula)