import {Router} from "express";
import { countCurso, createCurso, deleteCurso, findAll, findCurso, toggleCurso, updateCurso } from "../controllers/curso.controller.js";



export const cursoRouter = Router()


cursoRouter.get("/curso/:from/:to", findAll)
cursoRouter.get("/curso", countCurso)
cursoRouter.post("/curso", createCurso)
cursoRouter.put("/curso/:cursoId", toggleCurso)
cursoRouter.patch("/curso/:cursoId", updateCurso)
cursoRouter.get("/curso/:cursoId", findCurso)
cursoRouter.delete("/curso/:cursoId", deleteCurso)