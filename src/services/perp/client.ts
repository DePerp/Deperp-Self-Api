import 'dotenv/config';
import {ethers} from 'ethers';
import {AlertObject} from "../../types";
import {perpBuildOrderParams} from "./buildOrderParams";
import {perpCreateOrder} from "./createOrder";
import {Wallet} from "@ethersproject/wallet/src.ts";
import {getConfig} from "../../config";

class DePerpConnector {
	private static instance: DePerpConnector;
	public account: Wallet;

	private constructor() {
		const { rpcUrl } = getConfig();
		const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
		this.account = new ethers.Wallet('0x' + process.env.WALLET_PRIVATE_KEY, provider);
	};

	static async build() {
		if (this.instance) {
			return DePerpConnector.instance;
		}

		if (!process.env.WALLET_PRIVATE_KEY) {
			console.log('WALLET_PRIVATE_KEY for Perpetual Protocol is not set as environment variable');
			return;
		}

		this.instance = new DePerpConnector();
		return this.instance;
	}

	public async createOrder(alertMessage: AlertObject) {
		if (!DePerpConnector.instance) return;

		const orderParams = await perpBuildOrderParams(alertMessage);
		if (!orderParams) return;
		const orderResult = await perpCreateOrder(DePerpConnector.instance.account, orderParams);
		return orderResult;
	}
}

export default DePerpConnector;
