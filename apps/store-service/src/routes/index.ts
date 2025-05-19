import { Router } from 'express';
import { CategoryRoutes } from './category.routes';
import { SubCategoryRoutes } from './sub-category.routes';
import { ProductRoutes } from './product.routes';
import { CustomerRoutes } from './customer.routes';

export class Routes {
    // public authMiddleware: AuthMiddleware = new AuthMiddleware();
    public router = Router();

    // Create routes instances
    private categoryRoutes: CategoryRoutes = new CategoryRoutes();
    private subCategoryRoutes: SubCategoryRoutes = new SubCategoryRoutes();
    private productRoutes: ProductRoutes = new ProductRoutes();
    private customerRoutes: CustomerRoutes = new CustomerRoutes();

    constructor() {
        // Initialize routes
        this.router.use('/category', this.categoryRoutes.router);
        this.router.use('/subcategory', this.subCategoryRoutes.router);
        this.router.use('/product', this.productRoutes.router);
        this.router.use('/customer', this.customerRoutes.router);
    }
}