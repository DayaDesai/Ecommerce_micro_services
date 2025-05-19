import { Router } from 'express';
import { ProductController } from '../controllers/product.controller';


export class ProductRoutes {

    public productController: ProductController = new ProductController();
    public router: Router = Router();

    constructor() {
        this.config();
    }

    private config(): void {
        // this.router.post('/', this.productController.CreateProduct);
    }
}