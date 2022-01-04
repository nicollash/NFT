// Help Truffle find `TruffleTutorial.sol` in the `/contracts` directory
const NFT = artifacts.require("NFT");

module.exports = function(deployer) {
  // Command Truffle to deploy the Smart Contract
  deployer.deploy(NFT);
};