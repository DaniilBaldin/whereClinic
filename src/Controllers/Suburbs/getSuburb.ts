/* eslint-disable @typescript-eslint/no-explicit-any */
import { RequestHandler } from 'express';
import connector from '../../Utils/databaseConnect';
import { like } from 'drizzle-orm/expressions';

import { suburbs } from '../../Schema/suburbs';

const getSuburb: RequestHandler = async (req, res) => {
    let suburb = req.params.suburb;
    suburb = suburb.charAt(0).toUpperCase() + suburb.slice(1);
    const db = await connector.connect();
    const Suburb = await db.select(suburbs).where(like(suburbs.suburbName, `%${suburb}%`));
    if (!Suburb) {
        res.status(404).json({
            message: 'Nothing found!',
            success: false,
        });
    } else {
        const result = Suburb.map((e: any) => {
            return {
                slug: '/' + e.suburbSlug.split('/').reverse()[0].split('-')[0],
                name: e.suburbName,
                state: e.state,
            };
        });
        console.log(result);
        res.status(200).json({
            data: result,
            success: true,
        });
    }
};

export default getSuburb;
