import { Router } from 'express';
import { FileUploadController } from '../controllers/file-upload.controller';


export class FileUploadRoutes {

    public fileUploadController: FileUploadController = new FileUploadController();
    public router: Router = Router();

    constructor() {
        this.config();
    }

    private config(): void {
        // this.router.post('/', this.fileUploadController.CreateFeature);
    }
}