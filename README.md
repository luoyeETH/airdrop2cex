# airdrop2cex  
[English](./README.md) | [中文](./README_zh.md)  
This is a Node.js script that monitors an ERC20 token balance of a given Ethereum address, and automatically transfers the deposited tokens to a destination address as soon as they arrive.

## Setup
1. Clone this repository and navigate to the project directory.
2. Install dependencies by running `npm install`.
3. Fill in the required values in the script (e.g., `alchemyApiKey`, `monitoredAddress`, `destinationAddress`, `erc20Address`, `privateKey`) as instructed in the comments.
4. Start the script by running `node index.js`.  

## Requirements
* Node.js version 12.0 or higher  
* An Alchemy API key with access to the Arbitrum Mainnet  

## Dependencies
* ethers v5.7.2  
* alchemy-sdk v2.6.1  

## Usage
You can use this script to automatically transfer tokens from one Ethereum address to another whenever a deposit is made to the first address. This can be useful for automatically sending tokens to an exchange or another wallet without having to manually initiate the transfer.  

Please note that this script is provided as-is and is intended for educational purposes only. Use at your own risk.  

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.  
