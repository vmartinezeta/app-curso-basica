import { Router } from "express";
import { createAsignacion, findAll, findAllByProfesor } from "../controllers/asignacion.controller.js";


export const asignacionRouter = Router()
asignacionRouter.post("/asignacion", createAsignacion)
asignacionRouter.get("/asignacion/:aulaId", findAll)
asignacionRouter.get("/asignacion/:username/:cursoId", findAllByProfesor)