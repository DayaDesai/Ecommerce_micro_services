import { Router } from 'express';
import { StripeRoutes } from './stripe.routes';

export class Routes {
    // public authMiddleware: AuthMiddleware = new AuthMiddleware();
    public router = Router();

    // Create routes instances
    private stripeRoutes: StripeRoutes = new StripeRoutes();

    constructor() {
        // Initialize routes
        this.router.use('/stripe', this.stripeRoutes.router);
    }
}