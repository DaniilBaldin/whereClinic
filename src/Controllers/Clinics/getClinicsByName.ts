/* eslint-disable @typescript-eslint/no-explicit-any */
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
    if (!Clinics.length) {
        res.status(404).json({
            message: 'No clinics found!',
            success: false,
        });
    } else {
        const result = Clinics.map((e: any) => {
            delete e.nearby1Txt, delete e.nearby2Txt, delete e.nearby3Txt, delete e.nearby4Txt;
            delete e.nearby1Link, delete e.nearby2Link, delete e.nearby3Link, delete e.nearby4Link;
            const slug = e.slug.split('/').reverse()[0];
            e.nearby = `/nearby/${slug}`;
            return e;
        });
        res.status(200).json({
            data: result,
            success: true,
        });
    }
};

export default getClinicsByName;
