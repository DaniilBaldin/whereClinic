/* eslint-disable @typescript-eslint/no-explicit-any */
import { RequestHandler } from 'express';
import connector from '../../Utils/databaseConnect';

import { clinics } from '../../Schema/clinics';
import { sql } from 'drizzle-orm';
import { asc } from 'drizzle-orm/expressions';

const getAllClinics: RequestHandler = async (req, res) => {
    const db = await connector.connect();
    const page = req.query.page as string;
    const limit = 20;
    const offset = (parseInt(page) - 1) * limit;
    const command = sql`SELECT COUNT(1) as total from public.clinics`;
    const dataLength = await (await db.execute(command)).rows[0];
    const totalPages = Math.ceil(dataLength[0] / limit);
    const allClinics = await db.select(clinics).limit(limit).offset(offset).orderBy(asc(clinics.id));
    if (!allClinics) {
        res.status(404).json({
            message: 'Nothing found!',
            success: false,
        });
    } else {
        const result = allClinics.map((e: any) => {
            delete e.nearby1Txt, delete e.nearby2Txt, delete e.nearby3Txt, delete e.nearby4Txt;
            delete e.nearby1Link, delete e.nearby2Link, delete e.nearby3Link, delete e.nearby4Link;
            const slug = e.slug.split('/').reverse()[0];
            e.nearby = `/nearby/${slug}`;
            return e;
        });
        res.status(200).json({
            page: parseInt(page),
            pages: totalPages,
            hasNextPage: limit * parseInt(page) < dataLength[0],
            data: result,
            success: true,
        });
    }
};

export default getAllClinics;
