import { Router } from 'express';
import { FileUploadRoutes } from './file-upload.routes';

export class Routes {
    // public authMiddleware: AuthMiddleware = new AuthMiddleware();
    public router = Router();

    // Create routes instances
    private fileUploadRoutes: FileUploadRoutes = new FileUploadRoutes();

    constructor() {
        // Initialize routes
        this.router.use('/file-upload', this.fileUploadRoutes.router);
    }
}