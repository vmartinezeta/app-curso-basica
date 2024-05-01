import { Periodo } from "../models/Periodo.js"

export async function createPeriodo(req, res){
    try {
        const {cursoId} = req.body
        const periodos = await Periodo.findAll({
            where: {
                cursoId
            }
        })

        if (periodos.length !== 0) {
            return res.status(500).json({message:"No se puede verifique que todos esten solventes del ingreso de notas"})
        }
        //verificar el periodo reciente si todos obedecieron el ingreso de notas
        //si esto es cierto puede crear el siguiente periodo de lo contrario responder con un 500
        await Periodo.create(req.body)
        return res.sendStatus(200)
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}