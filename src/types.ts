import type { BigNumber } from "ethers";

export type Asset = 'USDT' | 'USDC' | 'ETH';
export type Order = 'buy' | 'sell';

export type AlertObject = {
	asset: Asset;
	exchange: string;
	strategy: string;
	market: string;
	size?: number;
	sizeUsd?: number;
	leverage: number;
	order: Order;
	price: number;
	position: string;
	reverse: boolean;
	passphrase?: string;
};


export type dePerpOrderParams = {
	asset: string;
	collateral: BigNumber; // bigNumber
	expiry: number;
	fee: number;
	isLong: boolean;
	isReduceOnly: boolean;
	market: string;
	orderId: number;
	orderSort: number;
	price: string; // bigNumber
	revokeOrderId: number;
	size: BigNumber; // bigNumber
	timestamp: number;
	user: string;
}