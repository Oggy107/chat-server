import { Request, Response } from "express"

import { StreamChat } from "stream-chat"
import { API_KEY, API_SECRET } from "../constants"

const serverClient = StreamChat.getInstance(API_KEY, API_SECRET)

const login = (req: Request, res: Response) => {
    res.json({
        username: "oggy",
        token: serverClient.createToken("oggy")
    })
}

const signup = (req: Request, res: Response) => {
    res.send('signup')
}

export {
    login,
    signup
}