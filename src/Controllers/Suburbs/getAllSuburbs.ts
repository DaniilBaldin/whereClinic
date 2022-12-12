/* eslint-disable @typescript-eslint/no-explicit-any */
import { RequestHandler } from 'express';
import connector from '../../Utils/databaseConnect';

import { suburbs } from '../../Schema/suburbs';

const getAllSuburbs: RequestHandler = async (req, res) => {
    const db = await connector.connect();
    const allSuburbs = await db.select(suburbs);
    if (!allSuburbs) {
        res.status(404).json({
            message: 'Nothing found!',
            success: false,
        });
    } else {
        const result = allSuburbs.map((e: any) => {
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

export default getAllSuburbs;
