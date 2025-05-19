import { ThemeRoutes } from './theme.routes';
import { FeatureRoutes } from './feature.routes';
import { Router } from 'express';
// import { AuthMiddleware } from '../middleware/auth.middleware';

export class Routes {
    // public authMiddleware: AuthMiddleware = new AuthMiddleware();
    public router = Router();

    // Create routes instances
    private featureRoutes: FeatureRoutes = new FeatureRoutes();
    private themeRoutes: ThemeRoutes = new ThemeRoutes();

    constructor() {
        // Initialize routes
        this.router.use('/theme', this.themeRoutes.router);
        this.router.use('/feature', this.featureRoutes.router);
    }
}