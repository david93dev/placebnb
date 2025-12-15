import { Router } from "express";
import bcrypt from "bcryptjs"
import { connectDb } from "../../config/db.js";
import User from "./model.js"


const router = Router();
const bcryptSalt = bcrypt.genSaltSync();

router.get("/", async (req, res) => {
    connectDb();

    try {
        const userDoc = await User.find();
        res.json(userDoc)
    } catch (error) {
        res.json(500).json(error)
    }
});

router.post("/", async (req, res) => {
    connectDb();

    const { name, email, password } = req.body;
    const encryptedPassword = bcrypt.hashSync(password, bcryptSalt)

    try {
        const newUserDoc = await User.create({
            name,
            email,
            password: encryptedPassword,
        })
        res.json(newUserDoc)
    } catch (error) {
        res.json(500).json(error)
    }
    
})

export default router;