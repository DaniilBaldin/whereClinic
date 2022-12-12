import { Router } from 'express';
import bodyParser from 'body-parser';

import getAllSuburbs from '../Controllers/Suburbs/getAllSuburbs';
import getSuburb from '../Controllers/Suburbs/getSuburb';

const suburbsRouter = Router();
suburbsRouter.get('/suburbs', getAllSuburbs);
suburbsRouter.get('/get-suburb/:suburb', getSuburb);

suburbsRouter.use(bodyParser.json());

export default suburbsRouter;
