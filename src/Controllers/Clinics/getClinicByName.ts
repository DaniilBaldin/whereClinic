/* eslint-disable @typescript-eslint/no-explicit-any */
import { RequestHandler } from 'express';
import { like } from 'drizzle-orm/expressions';
import connector from '../../Utils/databaseConnect';

import { clinics } from '../../Schema/clinics';

const getClinicByName: RequestHandler = async (req, res) => {
    const db = await connector.connect();
    const clinicName = req.params?.slug as string;
    const Clinic = await db.select(clinics).where(like(clinics.slug, `%${clinicName}%`));
    if (!Clinic) {
        res.status(404).send('Clinic not found!');
    } else {
        const result = Clinic.map((e: any) => {
            delete e.nearby1Txt, delete e.nearby2Txt, delete e.nearby3Txt, delete e.nearby4Txt;
            delete e.nearby1Link, delete e.nearby2Link, delete e.nearby3Link, delete e.nearby4Link;
            const slug = e.slug.split('/').reverse()[0];
            e.nearby = `/nearby/${slug}`;
            delete e.slug;
            return e;
        });
        res.status(200).json({ data: result, success: true });
    }
};

export default getClinicByName;
