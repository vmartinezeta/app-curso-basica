import { Router } from "express";
import { createSeccion, findAll } from "../controllers/seccion.controller.js";


export const seccionRouter = Router()

seccionRouter.get("/seccion", findAll)
seccionRouter.post("/seccion", createSeccion)