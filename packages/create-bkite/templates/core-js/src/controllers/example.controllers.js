import asyncHandler from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js"
import { ApiError } from "../utils/ApiError.js";
import Http

export const getExample = asyncHandler(
    (req, res) => {
        res.status(200).json(new ApiResponse(200, {}, "Example route fetched successfully"));
    });