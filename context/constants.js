import { ethers } from "ethers";
import Web3Modal from "web3modal";
import axios from "axios";

import musicICO from "./MusicICO.json";
import musicNFT from "./MusicNFT.json";
import theBlockchainCoders from "./TheBlockchainCoders.json";

//OWNER ADDRESS
export const OWNER_ADDRESS = "0x9AFF308C6Cee7bB186c64004956C2b578C95e0C2";
export const VERIFY_AMOUNT = 0.00005;
export const CREDIT_AMOUNT = 0.00005;


export const thebBlockchainCoders_Add =
  "0x0623d640563d4D73de5D2b57552e448755d7665C";
const theBlockchainCoders_ABI = theBlockchainCoders.abi;


const musicICO_Address = "0x34e502f15B03E06d8c1601f6D8A33ECE83D107aE";
const musicICO_ABI = musicICO.abi;

export const musicNFT_Address = "0xa9d974e34F7dFAAf6fC284ac9999a58398F99c5E";
const musicNFT_ABI = musicNFT.abi;


const networks = {
  polygon_amoy: {
    chainId: `0x${Number(80002).toString(16)}`,
    chainName: "Polygon Amoy",
    nativeCurrency: {
      name: "POL",
      symbol: "POL",
      decimals: 18,
    },
    rpcUrls: ["https://rpc-amoy.polygon.technology/"],
    blockExplorerUrls: ["https://www.oklink.com/amoys"],
  },
  polygon_mumbai: {
    chainId: `0x${Number(80001).toString(16)}`,
    chainName: "Polygon Mumbai",
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18,
    },
    rpcUrls: ["https://rpc.ankr.com/polygon_mumbai"],
    blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
  },
  polygon: {
    chainId: `0x${Number(137).toString(16)}`,
    chainName: "Polygon Mainnet",
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18,
    },
    rpcUrls: ["https://rpc.ankr.com/polygon"],
    blockExplorerUrls: ["https://polygonscan.com/"],
  },
  bsc: {
    chainId: `0x${Number(56).toString(16)}`,
    chainName: "Binance Smart Chain Mainnet",
    nativeCurrency: {
      name: "Binance Chain Native Token",
      symbol: "BNB",
      decimals: 18,
    },
    rpcUrls: ["https://rpc.ankr.com/bsc"],
    blockExplorerUrls: ["https://bscscan.com"],
  },
};

const changeNetwork = async ({ networkName }) => {
  try {
    if (!window.ethereum) throw new Error("No crypto wallet found");
    await window.ethereum.request({
      method: "wallet_addEthereumChain",
      params: [
        {
          ...networks[networkName],
        },
      ],
    });
  } catch (err) {
    console.log(err.message);
  }
};

const handleNetworkSwitch = async () => {
  const networkName = "polygon_amoy";
  await changeNetwork({ networkName });
};

export const connectWallet = async () => {
  try {
    if (!ethereum) return alert("Please install MetaMask.");
    const network = await handleNetworkSwitch();
    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });

    return accounts[0];
  } catch (error) {
    console.log(error);

    throw new Error("No ethereum object");
  }
};

//---FETCHING SMART CONTRACT
const fetchContract = (address, abi, signer) =>
  new ethers.Contract(address, abi, signer);

//---MUSIC NFT
export const MUSIC_NFT_CONTARCT = async () => {
  try {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    const contract = fetchContract(musicNFT_Address, musicNFT_ABI, signer);
    return contract;
  } catch (error) {
    console.log("Something went wrong while connecting with contract", error);
  }
};

//---MUSIC ICO
export const MUSIC_ICO_CONTARCT = async () => {
  try {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    const contract = fetchContract(musicICO_Address, musicICO_ABI, signer);
    return contract;
  } catch (error) {
    console.log("Something went wrong while connecting with contract", error);
  }
};

export const fetchMusicNFT = async (_tokenId) => {
  try {
    connectWallet();
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);

    const signer = provider.getSigner();
    const contract = fetchContract(musicNFT_Address, musicNFT_ABI, signer);

    const musicData = await contract.getMusicNFTDetails(_tokenId);
    const tokenURI = await contract.tokenURI(_tokenId);

    console.log(tokenURI);

    const musicInfo = await axios.get(tokenURI, {});

    const musicNFT = {
      title: musicInfo.data.title,
      fileURL: musicInfo.data.fileURL,
      imageURL: musicInfo.data.imageURL,
      description: musicInfo.data.description,
      owner: musicData.owner,
      seller: musicData.seller,
      tokenId: _tokenId,
    };

    console.log(musicNFT);
    return musicNFT;
  } catch (error) {
    console.log(error);
  }
};
