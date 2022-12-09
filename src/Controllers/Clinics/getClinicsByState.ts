import { RequestHandler } from 'express';
import { like } from 'drizzle-orm/expressions';
import connector from '../../Utils/databaseConnect';

import { clinics } from '../../Schema/clinics';

const getClinicsByState: RequestHandler = async (req, res) => {
    let state = req.params.state as string;
    state = state.toUpperCase();
    const db = await connector.connect();
    const Clinics = await db.select(clinics).where(like(clinics.state, `%${state}%`));
    console.log(Clinics.length);
    if (!Clinics.length) {
        res.status(404).json({
            message: 'No clinics found!',
            success: false,
        });
    } else {
        res.status(200).json({
            data: Clinics,
            success: true,
        });
    }
};

export default getClinicsByState;
