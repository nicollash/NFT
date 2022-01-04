import { ethers } from "ethers";
import { config } from "./config";
import NFTAbi from './abi/NFT.json'

export const getLibrary = (provider) => {
  return provider;
};

export const getSigner = (provider) => {
  return provider.getSigner();
}

export const getNFTContract = (provider) => {
  const signer = getSigner(provider);
  return new ethers.Contract(config.CONTRACT_ADDRESS, NFTAbi.abi, signer)
}
