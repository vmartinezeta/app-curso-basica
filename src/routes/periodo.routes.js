import { Router } from "express";
import { createPeriodo } from "../controllers/periodo.controller.js";


export const periodoRouter = Router()

periodoRouter.post("/periodo", createPeriodo)