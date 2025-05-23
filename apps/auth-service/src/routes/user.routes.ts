import { Router } from 'express';
import { UserController } from '../controllers/user.controller';


export class UserRoutes {

    public userController: UserController = new UserController();
    public router: Router = Router();

    constructor() {
        this.config();
    }

    private config(): void {
        // this.router.post('/', this.userController.CreateUser);
        // this.router.post('/login', this.userController.login);
    }
}