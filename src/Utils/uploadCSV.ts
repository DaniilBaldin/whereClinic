/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from 'fs';
import * as csv from 'fast-csv';
import client from './databaseConnect';

const uploadCSV = (file: any) => {
    const stream = fs.createReadStream(file);
    const csvData: any[] = [];
    const fileStream = csv
        .parse()
        .on('data', (data) => {
            csvData.push(data);
        })
        .on('end', () => {
            csvData.shift();
            // const query =
            //     'INSERT INTO public.cities (city_slug, city_name, state, meta_title, meta_description, h1, h2, sub_heading_text, tick_1, tick_2, tick_3, about_bookphysio) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)';
            // const query =
            //     'INSERT INTO public.clinics (long_name_version,typeform_registration_link,pms,meta_title,meta_description,slug,website,clinic_name,display_on_web,link_to_clinic_suburb_page,full_address,city,suburb,state,postcode,email,phone,nearby1_txt,nearby1_link,nearby2_txt,nearby2_link,nearby3_txt,nearby3_link,nearby4_txt,nearby4_link,about_clinic) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26)';
            const query =
                'INSERT INTO public.suburbs (suburb_slug,suburb_name,city,state,postcode,meta_title,meta_description,h1,h2,about_bookphysio,nearby1_link,nearby1_txt,nearby1_state,nearby1_postcode,nearby2_link,nearby2_txt,nearby2_state,nearby2_postcode,nearby3_link,nearby3_txt,nearby3_state,nearby3_postcode,nearby4_link,nearby4_txt,nearby4_state,nearby4_postcode) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26)';
            csvData.forEach((row) => {
                client.query(query, row);
            });
            fs.unlinkSync(file);
        });
    stream.pipe(fileStream);
};

export default uploadCSV;
