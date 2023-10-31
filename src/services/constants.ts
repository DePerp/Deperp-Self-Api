import {Asset} from "../types";

export const CURRENCY_DECIMALS: Record<Asset, number> = {
    USDT: 18,
    USDC: 6,
    ETH: 18
}

export const ASSETS: Record<Asset, string> = {
    USDT: '0x32a6a9D7d964Ba9CCb50279724F7F311EDB59b96',
    USDC: '0x9b566A564D220C592AFD100C372a891d86c8B1A1',
    ETH: '0x0000000000000000000000000000000000000000'
}