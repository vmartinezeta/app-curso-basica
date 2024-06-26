import { Router } from "express";
import { createEvaluacion,  findEvaluacionAsignadaByProfesor } from "../controllers/evaluacion.controller.js";

export const evaluacionRouter = Router()
evaluacionRouter.get("/evaluacion/:aulaId/:asignacionId/:periodoId", findEvaluacionAsignadaByProfesor)
evaluacionRouter.post("/evaluacion", createEvaluacion)
