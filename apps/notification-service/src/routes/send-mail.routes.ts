import { Router } from 'express';
import { SendMailController } from '../controllers/send-mail.controller';


export class SendMailRoutes {

    public sendMailController: SendMailController = new SendMailController();
    public router: Router = Router();

    constructor() {
        this.config();
    }

    private config(): void {
        // this.router.post('/', this.sendMailController.CreateFeature);
    }
}