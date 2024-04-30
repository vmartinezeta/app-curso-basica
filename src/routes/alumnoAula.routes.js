import { Router } from "express";
import { createAlumno, findAll } from "../controllers/alumnoAula.controller.js";

export const alumnoAulaRouter = Router()

alumnoAulaRouter.post("/alumnoAula", createAlumno)
alumnoAulaRouter.get("/alumnoAula/:aulaId", findAll)