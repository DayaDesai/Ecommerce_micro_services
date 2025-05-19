import { Router } from 'express';
import { CategoryController } from '../controllers/category.controller';
import { CustomerController } from '../controllers/customer.controller';


export class CustomerRoutes {

    public customerController: CustomerController = new CustomerController();
    public router: Router = Router();

    constructor() {
        this.config();
    }

    private config(): void {
        // this.router.post('/', this.customerController.CreateCustomer);
    }
}