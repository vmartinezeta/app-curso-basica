import { Router } from "express";
import { createAsignatura, deleteAsignatura, findAll, updateAsignatura } from "../controllers/asignatura.controller.js";

export const asignaturaRouter = Router()

asignaturaRouter.post("/asignatura", createAsignatura)
asignaturaRouter.get("/asignatura", findAll)
asignaturaRouter.put("/asignatura/:asignaturaId", updateAsignatura)
asignaturaRouter.delete("/asignatura/:asignaturaId", deleteAsignatura)