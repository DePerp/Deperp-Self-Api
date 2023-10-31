import 'dotenv/config';


type Config = {
    rpcUrl: string;
    chainId: number;
    address: string;
}

const testnetConfig: Config = {
    rpcUrl: 'https://1rpc.io/base-goerli',
    chainId: 84531,
    address: '0xB9a02142b36eA3e1b612522535F36957525C62Ee'
}

const mainnetConfig: Config = {
    // todo
    rpcUrl: '',
    chainId: 8453,
    address: ''
}

export const getConfig = () => {
    if (process.env.TYPE_NETWORK === 'mainnet') {
        return mainnetConfig;
    }

    return testnetConfig;
}