import { Profesor } from "../models/Profesor.js"
import bcrypt from "bcryptjs"

export async function createProfesor(req, res) {
    try {
        const passwordHash = await bcrypt.hash(req.body.password, 10)
        await Profesor.create({ ...req.body, password: passwordHash })
        return res.sendStatus(200)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}


export async function findProfesor(req, res) {
    try {
        const { profesorId } = req.params
        const profesor = await Profesor.findOne({
            where: {
                id: profesorId
            }
        })
        return res.status(200).json(profesor)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}


export async function updateProfesor(req, res) {
    try {
        const params = req.params
        const profesor = await Profesor.findOne({
            where: {
                id: params.profesorId
            }
        })

        const passwordHash = await bcrypt.hash(req.body.password, 10)
        profesor.set({ ...req.body, password: passwordHash })
        await profesor.save()
        return res.sendStatus(200)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}


export async function deleteProfesor(req, res) {
    try {
        const params = req.params
        await Profesor.destroy({
            where: {
                id: params.profesorId
            }
        })
        return res.sendStatus(200)
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}


export async function findAll(req, res) {
    try {
        const profesores = await Profesor.findAll()
        return res.status(200).json(profesores)
    } catch (error) {
        return res.status.json({message:error.message})
    }
}