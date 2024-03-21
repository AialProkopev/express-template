import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mainRouter from './routes';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 4000;

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.use('/', mainRouter);

app.listen(port, () => console.log(`[server] Server started on ${port} port!`));
