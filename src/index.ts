import express from 'express';
import controller from './controllers/index';
import helmet from 'helmet';
import 'dotenv/config';

const app: express.Express = express();
const port = process.env.PORT || 3000;

app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', controller);

app.listen(port, () => {
	console.log(`TV-Connector web server listening on port ${port}`);
});
