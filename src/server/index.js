import 'dotenv/config';
import express from 'express';
import { port } from '~/config/config';
import sequelize from '~/config/database';
import routes from '~/routes/routes';

const app = express();

sequelize.authenticate().catch((err) => console.log('err database', err));

app.use(express.json());

// app.use(express.urlencoded({ extended: false }));

app.use('/api', routes);

app.listen(port);
