import { Router } from 'express';
import bodyParser from 'body-parser';
import path from 'path';

import upload from '../Middlewares/uploaderMiddleware';
import uploadCSV from '../Utils/uploadCSV';

const uploadRouter = Router();

uploadRouter.get('/upload', (req, res) => {
    res.sendFile(path.join(__dirname, '../', '/Views/index.html'));
});

uploadRouter.post('/import-csv', upload.single('import-csv'), (req) => {
    uploadCSV(path.join(__dirname, '../', '/Uploads/' + req.file?.filename));
    console.log('File was imported!');
});

uploadRouter.use(bodyParser.json());

export default uploadRouter;
