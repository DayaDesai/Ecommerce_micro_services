import { NextFunction, Request, Response } from 'express';
import { HttpStatus } from '../utils/http-status';
import { UserService } from '../services/user.service';

export class UserController extends HttpStatus {

    public userService: UserService = new UserService();

    /** POST API: Signup for a new user account or Login for existing account */
    public CreateUser = async (req: Request, res: Response, next: NextFunction) => {
    };

    /** POST API: Login with the email and password into the system */
    public login = async (req: Request, res: Response, next: NextFunction) => {

    };

}