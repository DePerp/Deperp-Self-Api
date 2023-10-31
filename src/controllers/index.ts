import express, { Router } from 'express';
import DePerpConnector from "../services/perp/client";

const router: Router = express.Router();

router.get('/', async (req, res) => {
	console.log('Recieved GET request.');
});

router.post('/', async (req, res) => {
	console.log('Recieved Tradingview strategy alert:', req.body);

	const account = await DePerpConnector.build();
	await account.createOrder(req.body);
	
	res.send('OK');
});

export default router;
