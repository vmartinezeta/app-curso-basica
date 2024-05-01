import { Router } from "express";
import { createAlumno, findAll, updateAlumno } from "../controllers/alumnoAula.controller.js";

export const alumnoAulaRouter = Router()

alumnoAulaRouter.post("/alumnoAula", createAlumno)
alumnoAulaRouter.get("/alumnoAula/:aulaId", findAll)
alumnoAulaRouter.put("/alumnoAula/:alumnoId", updateAlumno)