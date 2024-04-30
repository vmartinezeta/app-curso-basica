
import { Admin } from "../models/Admin.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"


export async function login(req, res) {
    try {
        const { username, password } = req.body
        const admin = await Admin.findOne({
            where: {
                username
            }
        })
        if (!admin) {
            return res.status(404).json({ message: "User not found" })
        }

        const isMatch = await bcrypt.compare(password, admin.password)
        if (!isMatch) {
            return res.status(500).json({ message: "incorrect password" })
        }

        const token = jwt.sign({ id: admin.id }, "secret", {
            expiresIn: 86400, // 24 hours
        });

        return res.status(200).json({ username, token, rolname: "admin" })

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

function verifyToken(req, res) {}