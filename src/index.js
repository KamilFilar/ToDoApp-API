import dotenv from 'dotenv';
import express from 'express';
import { join } from 'path';
import config from './config/config';
import { notFound, catchErrors } from './middlewares/errors';
import bodyParser from 'body-parser';

const app = express();

app.set('view engine', 'pug');
app.set('views', join(__dirname, 'views'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes config

// Errors handling
app.use(notFound);
app.use(catchErrors);

// Server state
app.listen(config.server.port, () => {
    console.log(`Server is listen on: http://localhost:${config.server.port}`);
})