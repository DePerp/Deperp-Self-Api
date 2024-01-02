import 'dotenv/config';


type Config = {
    rpcUrl: string;
    chainId: number;
    address: string;
}

const testnetConfig: Config = {
    rpcUrl: 'https://1rpc.io/base-goerli',
    chainId: 84531,
    address: '0x40c453c3d8164D458869Dbe2cbf430c6B1e6e1b9'
}

const mainnetConfig: Config = {
    rpcUrl: 'https://1rpc.io/base', //Rate limited and not for production systems.
    chainId: 8453,
    address: '0xBd4Ed30B43163c88e766D3FEaaC1D2d73dE0453e'
}

export const getConfig = () => {
    if (process.env.TYPE_NETWORK === 'mainnet') {
        return mainnetConfig;
    }

    return testnetConfig;
}
