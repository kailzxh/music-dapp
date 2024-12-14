require('@nomiclabs/hardhat-ethers'); // Required for working with ethers.js
require('dotenv').config();

module.exports = {
  solidity: {
    version: "0.8.20", // Solidity version for your contracts
    settings: {
      optimizer: {
        enabled: true, // Enable the optimizer
        runs: 200       // Number of optimizer runs
      }
    }
  },
  networks: {
    hardhat: {
      // Configuration for Hardhat Network (default local Ethereum network)
    },
    amoy: {
      url: 'https://rpc-amoy.polygon.technology/', // Replace with the correct RPC URL for AmoY network
      accounts: [`${process.env.private_key}`], // Your wallet's private key (use .env for security)
    },
    rinkeby: {
      url: 'https://rinkeby.infura.io/v3/YOUR_INFURA_PROJECT_ID', // Rinkeby testnet RPC
      accounts: [`${process.env.private_key}`], // Your wallet's private key
    }
  },
  etherscan: {
    apiKey: "7QQ26B5VD5RECJJRVSQMFSGKJA7HRP4ZNK", // Etherscan API key for verifying contracts on Etherscan
  }
};
