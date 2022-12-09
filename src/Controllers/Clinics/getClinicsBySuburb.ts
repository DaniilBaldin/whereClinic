import { RequestHandler } from 'express';
import { like } from 'drizzle-orm/expressions';
import connector from '../../Utils/databaseConnect';

import { clinics } from '../../Schema/clinics';

const getClinicsBySuburb: RequestHandler = async (req, res) => {
    let suburb = req.params.suburb as string;
    suburb = suburb.charAt(0).toUpperCase() + suburb.slice(1);
    const db = await connector.connect();
    const Clinics = await db.select(clinics).where(like(clinics.suburb, `%${suburb}%`));
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

export default getClinicsBySuburb;
