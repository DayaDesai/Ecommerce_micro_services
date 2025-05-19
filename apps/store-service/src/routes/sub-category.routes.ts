import { Router } from 'express';
import { SubCategoryController } from '../controllers/sub-category.controller';


export class SubCategoryRoutes {

    public subCategoryController: SubCategoryController = new SubCategoryController();
    public router: Router = Router();

    constructor() {
        this.config();
    }

    private config(): void {
        // this.router.post('/', this.subCategoryRoutes.CreateSubCategory);
    }
}