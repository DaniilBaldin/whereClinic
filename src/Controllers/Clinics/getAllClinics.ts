import { RequestHandler } from 'express';
import connector from '../../Utils/databaseConnect';

import { clinics } from '../../Schema/clinics';

const getAllClinics: RequestHandler = async (req, res) => {
    const db = await connector.connect();
    const allClinics = await db.select(clinics).limit(50);
    console.log(allClinics.length);
    res.status(200).send(allClinics);
};

export default getAllClinics;
