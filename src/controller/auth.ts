import { Request, Response } from "express"
import { StreamChat } from "stream-chat"
import crypto from "crypto"
import bcrypt from "bcrypt"

import { API_KEY, API_SECRET } from "../constants"
import { UserLoginIncoming, UserSignupIncoming, UserOutgoing } from "../types/user"

const serverClient = StreamChat.getInstance(API_KEY, API_SECRET)

const login = async (req: Request, res: Response) => {
    const { email, password } = req.body as UserLoginIncoming

    try {
        // TODO: make email unique
        const { users } = await serverClient.queryUsers({email: email})

        if (users.length === 0) {
            // TODO: return error
        }
    } catch (error) {
        
    }

    res.json({
        username: "oggy",
        token: serverClient.createToken("oggy")
    })
}

const signup = (req: Request, res: Response) => {
    const { email, username, password } = req.body as UserSignupIncoming

    const id = crypto.randomBytes(16).toString("hex")

    const userOutgoing: UserOutgoing = {
        id,
        username,
        email,
        hashedPassword: bcrypt.hashSync(password, 10),
        token: serverClient.createToken(id)
    }

    res.json(userOutgoing)
}

export {
    login,
    signup
}