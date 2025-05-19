import { Router } from 'express';
import { ThemeController } from '../controllers/theme.controller';


export class ThemeRoutes {

    public themeController: ThemeController = new ThemeController();
    public router: Router = Router();

    constructor() {
        this.config();
    }

    private config(): void {
        // this.router.post('/', this.themeController.CreateFeature);
    }
}