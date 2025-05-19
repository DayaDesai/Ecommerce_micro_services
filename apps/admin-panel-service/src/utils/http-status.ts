import { Response } from 'express';
import { HTTP_STATUS } from '../constants/http-status.constant';

interface response {
    success: boolean;
    message: string;
    data?: unknown;
    totalData?: number;
}

export class HttpStatus {

    /** Send success response */
    public sendSuccessResponse = (res: Response, message: string, data: unknown = null) => {
        const resObject: response = { success: true, message, data };
        res.status(HTTP_STATUS.OK).json(resObject);
    };

    /** Send error response */
    public sendBadRequestResponse = (res: Response, message: string = 'Something went wrong, please try again later.', data: unknown = null) => {
        const resObject: response = { success: false, message, data };
        res.status(HTTP_STATUS.BAD_REQUEST).json(resObject);
    };

    /** Send unauthorized response */
    public sendUnAuthorizedResponse = (res: Response, message: string = 'User not authenticated.', data: unknown = null) => {
        const resObject: response = { success: false, message, data };
        res.status(HTTP_STATUS.UNAUTHORIZED).json(resObject);
    };

    /** Send not found response */
    public sendNotFoundResponse = (res: Response, message: string, data: unknown = null) => {
        const resObject: response = { success: false, message, data };
        res.status(HTTP_STATUS.NOT_FOUND).json(resObject);
    };

    /** Send conflict error response */
    public sendConflictErrorResponse = (res: Response, message: string, data: unknown = null) => {
        const resObject: response = { success: false, message, data };
        res.status(HTTP_STATUS.CONFLICT).json(resObject);
    };

    /** Send internal server error response */
    public sendInternalServerErrorResponse = (res: Response, message: string = 'Internal server error.', data: unknown = null) => {
        const resObject: response = { success: false, message, data };
        res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json(resObject);
    };
}