import { Curso } from "../models/Curso.js"
import { Op } from "sequelize"


export async function findAll (req, res) {
    try {
        const {from, to} = req.params        
        const cursos = await Curso.findAll({
            offset:+from,
            limit:+to
        })
        return res.json(cursos)
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}

export async function countCurso(req, res) {
    try {
        const total = await Curso.count()        
        return res.status(200).json(total)
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}

export async function createCurso(req, res) {
    try {        
        const {anyo} = req.body
        await Curso.create({
            anyo
        })
        return res.sendStatus(200)
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}

export async function updateCurso(req, res) {
    try {
        const {cursoId} = req.params
        const curso = await Curso.findOne({
            where: {
                id:cursoId
            }
        })        
        curso.set(req.body)
        await curso.save()
        return res.sendStatus(200)
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}

export async function toggleCurso(req, res) {
    try {
        const {cursoId} = req.params
        const cursos = await Curso.findAll({
            where: {
                [Op.or]: {
                    id:cursoId,
                    activo:true
                }
            }
        })

        await Promise.all(cursos.map(toggleCursoAndSave))

        return res.sendStatus(200)
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}

async function toggleCursoAndSave(curso) {
    curso.activo = !curso.activo
    return curso.save()
}

export async function findCurso(req, res) {
    try {
        const {cursoId} = req.params
        const cursoSelected = await Curso.findOne({
            where: {
                id:cursoId
            }
        })                    
        return res.status(200).json(cursoSelected)
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}

export async function deleteCurso(req, res) {
    try {
        const params = req.params
        await Curso.destroy({
            where:{
                id: params.cursoId
            }
        })    
        return res.sendStatus(200)    
    } catch (error) {
        return res.status(200).json({message:error.message})
    }   
}