import express from 'express';
import cors from 'cors';
import { join } from 'path';
import config from './config/config';
import { notFound, catchErrors } from './middlewares/errors';
import bodyParser from 'body-parser';
// Import routes
import taskRoute from './routes/task-route';

const app = express();

app.use(cors()); // for connecting between 2 localhosts

app.set('view engine', 'pug');
app.set('views', join(__dirname, 'views'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes config
app.use('/api/tasks', taskRoute());
// Default route
app.get('*', (req, res) => {
    res.status(200).render('ToDoApp API - works!');
})

// Errors handling
app.use(notFound);
app.use(catchErrors);

// Server state
app.listen(config.server.port, () => {
    console.log(`Server is listen on: http://localhost:${config.server.port}`);
})