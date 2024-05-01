import { Router } from "express";
import { createGrado, deleteGrado, findAll, updateGrado } from "../controllers/grado.controller.js";


export const gradoRouter = Router()

gradoRouter.post("/grado", createGrado)
gradoRouter.get("/grado", findAll)
gradoRouter.put("/grado/:gradoId", updateGrado)
gradoRouter.delete("/grado/:gradoId", deleteGrado)