import { Router } from 'express';
import { FeatureController } from '../controllers/feature.controller';

export class FeatureRoutes {

    public featureController: FeatureController = new FeatureController();
    public router: Router = Router();

    constructor() {
        this.config();
    }

    private config(): void {
        // this.router.post('/', this.featureController.CreateFeature);
    }
}