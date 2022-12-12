/* eslint-disable @typescript-eslint/no-explicit-any */
import { RequestHandler } from 'express';
import connector from '../../Utils/databaseConnect';
import { like } from 'drizzle-orm/expressions';

import { cities } from '../../Schema/cities';

const getCity: RequestHandler = async (req, res) => {
    let city = req.params.city;
    city = city = city.charAt(0).toUpperCase() + city.slice(1);
    const db = await connector.connect();
    const City = await db.select(cities).where(like(cities.cityName, `%${city}%`));
    console.log(City);
    if (!City) {
        res.status(404).json({
            message: 'Nothing found!',
            success: false,
        });
    } else {
        const result = City.map((e: any) => {
            return { slug: e.citySlug, name: e.cityName, state: e.state };
        });
        res.status(200).json({
            data: result,
            success: true,
        });
    }
};

export default getCity;
