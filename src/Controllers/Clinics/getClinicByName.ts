import { RequestHandler } from 'express';
import { like } from 'drizzle-orm/expressions';
import connector from '../../Utils/databaseConnect';

import { clinics } from '../../Schema/clinics';

const getClinicByName: RequestHandler = async (req, res) => {
    const db = await connector.connect();
    const clinicName = req.params?.slug as string;
    console.log(clinicName);
    const Clinic = await db.select(clinics).where(like(clinics.slug, `%${clinicName}%`));
    console.log(Clinic);
    if (!Clinic) {
        res.status(404).send('Clinic not found!');
    } else {
        console.log(Clinic[0]);
        res.status(200).json({ data: Clinic[0], success: true });
    }
};

export default getClinicByName;
