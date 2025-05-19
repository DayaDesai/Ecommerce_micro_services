import { UserRoutes } from './user.routes';
import { Router } from 'express';
// import { AuthMiddleware } from '../middleware/auth.middleware';

export class Routes {
    // public authMiddleware: AuthMiddleware = new AuthMiddleware();
    public router = Router();

    // Create routes instances
    private userRoutes: UserRoutes = new UserRoutes();

    constructor() {
        // Initialize routes
        this.router.use('/user', this.userRoutes.router);
    }
}