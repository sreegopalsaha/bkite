import { Request, Response, NextFunction } from "express";
import asyncHandler from "../utils/asyncHandler";
import { ApiResponse } from "../utils/ApiResponse";
import { ApiError } from "../utils/ApiError.js";
import HttpStatus from "../constants/httpStatusCodes";

export const getExample = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
        res
          .status(HttpStatus.OK)
          .json(new ApiResponse(200, {}, "Example route fetched successfully"));
    }
);
