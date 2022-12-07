import dotenv from 'dotenv';
import path from 'path';
dotenv.config({
    path: path.join(__dirname, '../', '/.env'),
});

export const DATA_SOURCES = {
    postgres: {
        DB_URL: process.env.DB_URL,
    },
};
