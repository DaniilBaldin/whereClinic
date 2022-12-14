import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
dotenv.config();

import clinicsRouter from './Routes/clinicRoutes';
import citiesRouter from './Routes/citiesRoutes';
import suburbsRouter from './Routes/suburbsRoutes';

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static(path.join(__dirname, '../', '/public')));
app.enable('trust proxy');

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.use((req, res, next) => {
    res.setTimeout(1000);
    next();
});

app.get('/', (req, res) => {
    res.send('Hello there! General Kenobi!');
});

app.use(
    cors({
        origin: '*',
        methods: ['OPTIONS', 'GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        allowedHeaders: [
            'Content-Type',
            'Authorization',
            'Uppy-Versions',
            'Accept',
            'x-requested-with',
            'Access-Control-Allow-Origin',
        ],
        exposedHeaders: ['Access-Control-Allow-Headers', 'Access-Control-Allow-Origin'],
        preflightContinue: false,
        optionsSuccessStatus: 204,
    })
);

app.use(express.json());

app.use('/', clinicsRouter, citiesRouter, suburbsRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
