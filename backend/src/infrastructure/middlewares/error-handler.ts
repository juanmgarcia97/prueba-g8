import { NextFunction, Request, Response } from "express"

export function errorHandler (err: Error, req: Request, res: Response, next: NextFunction) {
    res.status(400).json({
        name: err.name,
        message: err.message,
        isSuccess: false
    })
}
