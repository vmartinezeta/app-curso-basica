import { Router } from "express";
import { createAdmin, deleteAdmin, findAll } from "../controllers/admin.controller.js";


export const adminRouter = Router()

adminRouter.post("/admin", createAdmin)
adminRouter.get("/admin", findAll)
adminRouter.delete("/admin/:adminId", deleteAdmin)