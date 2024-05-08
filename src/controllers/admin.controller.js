import { Admin } from "../models/Admin.js"
import bcrypt from "bcryptjs"
import { Profesor } from "../models/Profesor.js"

export const createAdmin = async (req, res) => {
    try {
        const { username, password } = req.body

        const user = await Profesor.findOne({
            where: {
                username
            }
        })

        if (user) {
            return res.status(500).json({ message: "Usuario ya está en uso" })
        }

        const passwordHashed = await bcrypt.hash(password, 10)

        await Admin.create({
            username,
            password: passwordHashed
        })
        return res.sendStatus(200)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const findAll = async (req, res) => {
    try {
        const admins = await Admin.findAll({
            attributes: ["id", "username"]
        })
        return res.status(200).json(admins)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export async function deleteAdmin(req, res) {
    try {
        const params = req.params
        await Admin.destroy({
            where: {
                id: params.adminId
            }
        })
        return res.sendStatus(200)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}