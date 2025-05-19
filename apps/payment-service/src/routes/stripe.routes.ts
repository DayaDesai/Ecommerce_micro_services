import { Router } from 'express';
import { StripeController } from '../controllers/stripe.controller';


export class StripeRoutes {

    public stripeController: StripeController = new StripeController();
    public router: Router = Router();

    constructor() {
        this.config();
    }

    private config(): void {
        // this.router.post('/', this.stripeController.CreateFeature);
    }
}