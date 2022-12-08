import { Router } from 'express';
import bodyParser from 'body-parser';

import getAllClinics from '../Controllers/Clinics/getAllClinics';

const clinicsRouter = Router();
clinicsRouter.get('/clinics', getAllClinics);

clinicsRouter.use(bodyParser.json());

export default clinicsRouter;
