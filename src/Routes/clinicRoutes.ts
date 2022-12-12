import { Router } from 'express';
import bodyParser from 'body-parser';

import getAllClinics from '../Controllers/Clinics/getAllClinics';
import getClinicsByPostcode from '../Controllers/Clinics/getClinicsByPostcode';
import getClinicByName from '../Controllers/Clinics/getClinicByName';
import getClinicsByName from '../Controllers/Clinics/getClinicsByName';
import getClinicsByCity from '../Controllers/Clinics/getClinicsByCity';
import getClinicsBySuburb from '../Controllers/Clinics/getClinicsBySuburb';
import getClinicsByState from '../Controllers/Clinics/getClinicsByState';
import getNearbyClinics from '../Controllers/Clinics/getNearbyClinics';

const clinicsRouter = Router();
clinicsRouter.get('/clinics', getAllClinics);
clinicsRouter.get('/code/:code', getClinicsByPostcode);
clinicsRouter.get('/name/:name', getClinicsByName);
clinicsRouter.get('/city/:city', getClinicsByCity);
clinicsRouter.get('/suburb/:suburb', getClinicsBySuburb);
clinicsRouter.get('/state/:state', getClinicsByState);
clinicsRouter.get('/clinic/:slug', getClinicByName);
clinicsRouter.get('/nearby/:nearby', getNearbyClinics);

clinicsRouter.use(bodyParser.json());

export default clinicsRouter;
