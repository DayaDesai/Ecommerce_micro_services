import { Router } from 'express';
import { SendMailRoutes } from './send-mail.routes';

export class Routes {
    // public authMiddleware: AuthMiddleware = new AuthMiddleware();
    public router = Router();

    // Create routes instances
    private sendMailRoutes: SendMailRoutes = new SendMailRoutes();

    constructor() {
        // Initialize routes
        this.router.use('/send-mail', this.sendMailRoutes.router);
    }
}