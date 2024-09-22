require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: `${__dirname}/.env` });

/**
 * Hardhat configuration file for the project.
 * Configures the Hardhat development environment, including the Solidity compiler settings,
 * default network, available networks, and Etherscan API key.
 */
module.exports = {
  solidity: "0.8.24",
  settings: {
    optimizer: {
      enabled: true,
      runs: 1000,
    },
  },
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: `https://sepolia.infura.io/v3/${process.env.INFURA_API_KEY}`,
      chainId: 11155111,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
    testnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      chainId: 97,
      accounts: [process.env.PRIVATE_KEY],
    },
    mainnet: {
      url: "https://bsc-dataseed1.ninicoin.io",
      chainId: 56,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: "XUHMGYKI9A8XIBA4ENVPB9QF6KEJI1YCEV"
  }
};
