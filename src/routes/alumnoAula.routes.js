import { Router } from "express";
import { createAlumno } from "../controllers/alumnoAula.controller.js";

export const alumnoAulaRouter = Router()

alumnoAulaRouter.post("/alumnoAula", createAlumno)