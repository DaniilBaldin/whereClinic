import { RequestHandler } from 'express';
import connector from '../../Utils/databaseConnect';

import { cities } from '../../Schema/cities';

const getAllCities: RequestHandler = async (req, res) => {
    const db = await connector.connect();
    const allCities = await db.select(cities).limit(50);
    console.log(allCities.length);
    res.status(200).send(allCities);
};

export default getAllCities;
