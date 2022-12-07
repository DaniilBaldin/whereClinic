import { Router } from 'express';
import bodyParser from 'body-parser';

import client from '../Utils/databaseConnect';

const clinicsRouter = Router();

clinicsRouter.get('/clinic', async (req, res) => {
    const data = await client.query('SELECT * FROM public.clinics LIMIT 100');
    console.log(data.rows);
    res.send({
        data: data.rows,
    });
});

clinicsRouter.use(bodyParser.json());

export default clinicsRouter;
