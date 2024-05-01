
import { Admin } from "../models/Admin.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { Profesor } from "../models/Profesor.js"


export async function login(req, res) {
    try {
        const { username, password } = req.body
        let rolname = "admin"
        let user = await Admin.findOne({
            where: {
                username
            }
        })

        if (!user) {

            const profesor = await Profesor.findOne({
                where: {
                    username
                }
            })

            if (!user && !profesor) {
                return res.status(404).json({ message: "User not found" })
            }
            user = profesor
            rolname = "profesor"
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(500).json({ message: "incorrect password" })
        }

        const token = jwt.sign({ id: user.id }, "secret", {
            expiresIn: 86400, // 24 hours
        });

        return res.status(200).json({ username, token, rolname })

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

function verifyToken(req, res) {}