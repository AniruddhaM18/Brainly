import type { NextFunction, Request, Response } from "express";
import Jwt  from "jsonwebtoken";

import { JWT_PASSWORD } from "./config.js";

export const UserMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const header = req.headers["authorization"];
    const decoded = Jwt.verify(header as string, JWT_PASSWORD)
