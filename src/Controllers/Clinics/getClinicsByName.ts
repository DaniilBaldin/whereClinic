import { RequestHandler } from 'express';
import { like, or } from 'drizzle-orm/expressions';
import connector from '../../Utils/databaseConnect';

import { clinics } from '../../Schema/clinics';

const getClinicsByName: RequestHandler = async (req, res) => {
    let name = req.params.name as string;
    name = name.charAt(0).toUpperCase() + name.slice(1);
    const db = await connector.connect();
    const Clinics = await db
        .select(clinics)
        .where(or(like(clinics.clinicName, `%${name}%`), like(clinics.longNameVersion, `%${name}%`)));
    console.log(Clinics.length);
    if (!Clinics.length) {
        res.status(404).json({
            message: 'No clinics found!',
            success: false,
        });
    } else {
        res.status(200).json({
            data: Clinics,
            success: true,
        });
    }
};

export default getClinicsByName;
