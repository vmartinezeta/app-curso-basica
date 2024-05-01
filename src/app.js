import express from "express";
import morgan from "morgan";
import cors from "cors"
import { cursoRouter } from "./routes/curso.routes.js";
import {adminRouter} from "./routes/admin.routes.js"
import { seccionRouter } from "./routes/seccion.routes.js";
import { gradoRouter } from "./routes/grado.routes.js";
import { aulaRouter } from "./routes/aula.routes.js";
import { authRouter } from "./routes/auth.routes.js";
import { alumnoAulaRouter } from "./routes/alumnoAula.routes.js";
import { profesorRouter } from "./routes/profesor.routes.js";
import { asignaturaRouter } from "./routes/asignatura.routes.js";
import { asignacionRouter } from "./routes/asignacion.routes.js";
import { periodoRouter } from "./routes/periodo.routes.js";


export const app = express()


app.use(morgan("dev"))
app.use(express.json())

app.use(cors({
    credentials: true,
    origin: "http://localhost:5173"
}))



app.use(authRouter)
app.use(cursoRouter)
app.use(adminRouter)
app.use(seccionRouter)
app.use(gradoRouter)
app.use(aulaRouter)
app.use(alumnoAulaRouter)
app.use(profesorRouter)
app.use(asignaturaRouter)
app.use(asignacionRouter)
app.use(periodoRouter)
