import { Request, Response, NextFunction } from "express";
import { ApiError } from "../utils/ApiError";
import HttpStatus from "../constants/httpStatusCodes";

const globalErrorHandler = (
    err: unknown,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (err instanceof ApiError) {
        return res.status(err.statusCode).json({
            success: err.success,
            message: err.message,
            errors: err.errors,
            stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
        });
    }

    // Handle generic errors
    const error = err as Error;
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: error.message || "Internal Server Error",
        errors: [],
        stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
    });
};

export default globalErrorHandler;
