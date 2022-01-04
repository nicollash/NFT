import { useCallback, useMemo } from 'react';
import { Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';

import { connectorsByName } from '../contracts/config';

const useWallet = () => {
  const context = useWeb3React();
  const { chainId, account, active, library, activate, deactivate } = context;

  const originProvider = useMemo(() => {
    if (library) {
      const p = new Web3Provider(
        library,
        typeof library.chainId === 'number'
          ? library.chainId
          : typeof library.chainId === 'string'
            ? parseInt(library.chainId)
            : 'any',
      );
      library.pollingInterval = 15_000;
      return p;
    }
    return undefined;
  }, [library]);

  const connect = useCallback(() => {
    activate(connectorsByName.injected, undefined, true).catch(error => {
      if (error) {
        activate(connectorsByName.injected);
      }
    });
  }, [activate]);

  const disconnect = useCallback(() => {
    deactivate();
  }, [deactivate]);

  return {
    account,
    active,
    ethereum: originProvider,
    library,
    chainId,
    connect,
    disconnect,
  };
};

export default useWallet;
