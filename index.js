import { ethers } from 'ethers';
import { Alchemy, Network } from 'alchemy-sdk';

const alchemyApiKey = '';  // Alchemy ARB API Key
const alchemy = new Alchemy({ apiKey: alchemyApiKey, network: Network.ARB_MAINNET });
const network = "arbitrum";
const provider = new ethers.providers.AlchemyProvider(network, alchemyApiKey);

const erc20Abi = [
  'function balanceOf(address owner) view returns (uint256)',
  'function transfer(address to, uint256 value) returns (bool)',
  'event Transfer(address indexed from, address indexed to, uint256 value)',
];

const monitoredAddress = ''; // 监控地址
const destinationAddress = ''; // 交易所充值地址
const erc20Address = ''; // ERC20代币合约

const privateKey = ''; // 私钥
const wallet = new ethers.Wallet(privateKey, provider);

const erc20Contract = new ethers.Contract(erc20Address, erc20Abi, provider);
const erc20ContractWithSigner = erc20Contract.connect(wallet);

async function monitorAndTransfer() {
  const transferEventSignature = ethers.utils.id('Transfer(address,address,uint256)');
  const filter = {
    address: erc20Address,
    topics: [transferEventSignature, null, [ethers.utils.hexZeroPad(monitoredAddress, 32)]],
  };
  alchemy.ws.on(filter, async (log) => {
    console.log(`New token deposit detected at ${new Date().toLocaleString()}`);
    const balance = await erc20Contract.balanceOf(monitoredAddress);
    console.log(`Current balance: ${balance.toString()}`);
    const gasPrice = await provider.getGasPrice();
    console.log(`Current gas price: ${gasPrice.toString()}`);
    const tx = await erc20ContractWithSigner.transfer(destinationAddress, balance, { gasPrice });
    console.log(`Transfer transaction sent: ${tx.hash}`);
    await tx.wait();
    console.log(`Transfer completed to ${destinationAddress}`);
  });
}

monitorAndTransfer();
