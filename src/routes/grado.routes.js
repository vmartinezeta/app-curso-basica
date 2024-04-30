import { Router } from "express";
import { createGrado, findAll } from "../controllers/grado.controller.js";


export const gradoRouter = Router()

gradoRouter.post("/grado", createGrado)
gradoRouter.get("/grado", findAll)