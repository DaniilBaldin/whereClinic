import { Router } from 'express';
import bodyParser from 'body-parser';

import getAllCities from '../Controllers/Cities/getAllCities';
import getCity from '../Controllers/Cities/getCity';

const citiesRouter = Router();
citiesRouter.get('/cities', getAllCities);
citiesRouter.get('/get-city/:city', getCity);

citiesRouter.use(bodyParser.json());

export default citiesRouter;
