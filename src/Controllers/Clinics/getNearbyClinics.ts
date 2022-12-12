import { RequestHandler } from 'express';
import { like } from 'drizzle-orm/expressions';
import connector from '../../Utils/databaseConnect';

import { clinics } from '../../Schema/clinics';

const getNearbyClinics: RequestHandler = async (req, res) => {
    const originalClinic = req.params.nearby;
    console.log(originalClinic);
    const db = await connector.connect();
    const clinic = await db.select(clinics).where(like(clinics.slug, `%${originalClinic}%`));
    console.log(clinic);
    const nearby1 = clinic[0].nearby1Txt;
    const nearby2 = clinic[0].nearby2Txt;
    const nearby3 = clinic[0].nearby3Txt;
    const nearby4 = clinic[0].nearby4Txt;
    if (!clinic.length) {
        res.status(404).json({
            message: 'No clinics found!',
            success: false,
        });
    } else {
        const clinicsNearby1 = await db.select(clinics).where(like(clinics.suburb, `%${nearby1}%`));
        const clinicsNearby2 = await db.select(clinics).where(like(clinics.suburb, `%${nearby2}%`));
        const clinicsNearby3 = await db.select(clinics).where(like(clinics.suburb, `%${nearby3}%`));
        const clinicsNearby4 = await db.select(clinics).where(like(clinics.suburb, `%${nearby4}%`));
        res.status(200).json({
            [`${nearby1}`]: clinicsNearby1,
            [`${nearby2}`]: clinicsNearby2,
            [`${nearby3}`]: clinicsNearby3,
            [`${nearby4}`]: clinicsNearby4,
            success: true,
        });
    }
};

export default getNearbyClinics;
