import { Request, Response, NextFunction } from "express";
import asyncHandler from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";

export const getExample = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
        res
          .status(200)
          .json(new ApiResponse(200, {}, "Example route fetched successfully"));
    }
);
