import { Request, Response, NextFunction } from "express";
import asyncHandler from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import HttpStatus from "../constants/httpStatusCodes.js";

export const getExample = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
        res
          .status(HttpStatus.OK)
          .json(new ApiResponse(HttpStatus.OK, {}, "Example route fetched successfully"));
    }
);
