import { Router } from "express";
import { createProfesor, deleteProfesor, findAll, findProfesor, updateProfesor } from "../controllers/profesor.controller.js";


export const profesorRouter = Router()
profesorRouter.post("/profesor", createProfesor)
profesorRouter.get("/profesor", findAll)
profesorRouter.get("/profesor/:profesorId", findProfesor)
profesorRouter.put("/profesor/:profesorId", updateProfesor)
profesorRouter.delete("/profesor/:profesorId", deleteProfesor)