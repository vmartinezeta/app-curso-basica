import { Router } from "express";
import { createAsignatura, findAll } from "../controllers/asignatura.controller.js";

export const asignaturaRouter = Router()

asignaturaRouter.post("/asignatura", createAsignatura)
asignaturaRouter.get("/asignatura", findAll)