import {ethers} from "ethers";
import {ABIS} from "../abi";
import {getConfig} from "../config";

const addresses = {}; // cache

export async function getContract(signer, name) {
    const { chainId, address } = getConfig();

    const _provider = signer.provider;

    if (!chainId || !_provider) return;

    const dataRegistry = new ethers.Contract(address, ABIS.DataRegistry, _provider);

    const contractAddress = addresses[name] || await dataRegistry.getAddress(name);

    addresses[name] = contractAddress;

    let contract = new ethers.Contract(contractAddress, ABIS[name], _provider);

    contract = contract.connect(signer);

    return contract;

}