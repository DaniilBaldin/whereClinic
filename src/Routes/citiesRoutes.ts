import { Router } from 'express';
import bodyParser from 'body-parser';

import getAllCities from '../Controllers/Cities/getAllCities';

const citiesRouter = Router();
citiesRouter.get('/cities', getAllCities);

citiesRouter.use(bodyParser.json());

export default citiesRouter;
