/* eslint-disable @typescript-eslint/no-explicit-any */
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
        const result = Clinics.map((e: any) => {
            delete e.nearby1Txt, delete e.nearby2Txt, delete e.nearby3Txt, delete e.nearby4Txt;
            delete e.nearby1Link, delete e.nearby2Link, delete e.nearby3Link, delete e.nearby4Link;
            const slug = e.slug.split('/').reverse()[0];
            e.nearby = `/nearby/${slug}`;
            delete e.slug;
            return e;
        });
        res.status(200).json({
            data: result,
            success: true,
        });
    }
};

export default getClinicsBySuburb;
