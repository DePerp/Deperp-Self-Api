import {Asset} from "../types";

export const CURRENCY_DECIMALS: Record<Asset, number> = {
    USDT: 18,
    USDC: 6,
    ETH: 18
}

export const ASSETS: Record<Asset, string> = {
    USDT: '0x32a6a9D7d964Ba9CCb50279724F7F311EDB59b96',
    USDC: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
    ETH: '0x0000000000000000000000000000000000000000'
}