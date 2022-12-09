import { RequestHandler } from 'express';
import { like } from 'drizzle-orm/expressions';
import connector from '../../Utils/databaseConnect';

import { clinics } from '../../Schema/clinics';

const getClinicsByCity: RequestHandler = async (req, res) => {
    let city = req.params.city as string;
    city = city.charAt(0).toUpperCase() + city.slice(1);
    const db = await connector.connect();
    const Clinics = await db.select(clinics).where(like(clinics.city, `%${city}%`));
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

export default getClinicsByCity;
