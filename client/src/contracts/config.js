import { InjectedConnector } from '@web3-react/injected-connector';

export const supportedChainIds = [1, 3, 4, 420, 42, 80001, 1337];

export const injected = new InjectedConnector({
  supportedChainIds: supportedChainIds,
});

export const connectorsByName = {
  injected: injected,
};

export const config = {
  CONTRACT_ADDRESS: '0xBDf681092C08251d2813716e53006d31277cA09E',
  NETWORK: 'https://eth-kovan.alchemyapi.io/v2/_TbqRphz46WSH8p1JeST_SQBMRHRSoxh',
  RPC_URL: 'http://127.0.0.1:7545',
  NETWORK_ID: 5777,
}
