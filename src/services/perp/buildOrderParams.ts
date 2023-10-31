import { AlertObject } from '../../types';
import 'dotenv/config';
import {BigNumber, ethers} from "ethers";
import {ASSETS, CURRENCY_DECIMALS} from "../constants";

export const perpBuildOrderParams = async (alertMessage: AlertObject) => {
	const isLong = alertMessage.order == 'buy';
	const orderSize = alertMessage.reverse
		? BigNumber.from(alertMessage.size * 2)
		: BigNumber.from(alertMessage.size);

	const leverage = BigNumber.from(alertMessage.leverage)
	const collateral = orderSize.div(leverage);

	const decimals = CURRENCY_DECIMALS[alertMessage.asset]

	const _collateral = ethers.utils.parseUnits(collateral.toString(), decimals);
	const _size = ethers.utils.parseUnits(alertMessage.size.toString(), decimals);
	const _asset = ASSETS[alertMessage.asset];

	return {
		asset: _asset,
		collateral: _collateral,
		expiry: 0,
		fee: 0,
		isLong: isLong,
		isReduceOnly: false,
		market: alertMessage.market,
		orderId: 0,
		orderSort: 0,
		price: "0x00",
		revokeOrderId: 0,
		size: _size,
		timestamp: 0,
		user: "0x0000000000000000000000000000000000000000"
	}
};
