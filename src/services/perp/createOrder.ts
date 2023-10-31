import {dePerpOrderParams} from '../../types';
import {getContract} from "../getContract";
import {Wallet} from "@ethersproject/wallet/src.ts";

export const perpCreateOrder = async (account: Wallet, orderParams: dePerpOrderParams) => {
    const contract = await getContract(account, 'Orders');
    const tx = await contract.placeOrder(orderParams, 0x00, 0x00, '5', { value: ''});
    const receipt = await tx.wait();
    console.log(receipt);

    return true;
};
