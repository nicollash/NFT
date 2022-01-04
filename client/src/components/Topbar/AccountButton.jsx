import { Button, Label } from "../_shared";

import useWallet from "../../hooks/useWallet";

const AccountButton = () => {
  const { account, connect } = useWallet();

  const handleConnect = () => {
    connect();
  };

  const handleDisConnect = () => { };

  if (!account) {
    return (
      <Button backgroundColor="#000" onClick={handleConnect}>
        <Label>Connect Wallet</Label>
      </Button>
    );
  }

  return (
    <Button backgroundColor="#000" onClick={handleDisConnect}>
      <Label>{`${account.slice(0, 6)}...${account.slice(-4)}`}</Label>
    </Button>
  );
};

export default AccountButton;
