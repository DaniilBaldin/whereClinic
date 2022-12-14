/* eslint-disable @typescript-eslint/no-explicit-any */
import { RequestHandler } from 'express';
import connector from '../../Utils/databaseConnect';

import { cities } from '../../Schema/cities';

const getAllCities: RequestHandler = async (req, res) => {
    const db = await connector.connect();
    const allCities = await db.select(cities);
    if (!allCities) {
        res.status(404).json({
            message: 'Nothing found!',
            success: false,
        });
    } else {
        const result = allCities.map((e: any) => {
            return { slug: e.citySlug, name: e.cityName, state: e.state };
        });
        res.status(200).json({
            data: result,
            success: true,
        });
    }
};

export default getAllCities;
