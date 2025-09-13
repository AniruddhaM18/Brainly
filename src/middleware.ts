import type { NextFunction, Request, Response } from "express";
import Jwt  from "jsonwebtoken";

import { JWT_PASSWORD } from "./config.js";

export const UserMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const header = req.headers["authorization"];
    const decoded = Jwt.verify(header as string, JWT_PASSWORD)

    if(decoded) {
        //@ts-ignore
        req.userId = decoded.id;
        next()
    } else {
        res.status(403).json({
            message: "You aren't LOGGED IN BR0"
        })
    }
}