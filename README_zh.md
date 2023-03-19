# airdrop2cex  
[English](./README.md) | [中文](./README_zh.md)  
这是一个 Node.js 脚本，用于监控指定以太坊地址的 ERC20 代币余额，自动在代币到达时将其转账到目标地址。因此可用于在claim空投后快速充值到交易所地址。  

# 安装
1. 克隆此仓库并进入项目目录。
2. 运行 `npm install` 安装依赖项。
3. 根据注释填写脚本中的必填项（例如 `alchemyApiKey`、`monitoredAddress`、`destinationAddress`、`erc20Address`、`privateKey`）。
4. 运行 `node index.js` 启动脚本。  

# 要求
* Node.js 版本 12.0 或更高版本
* 拥有可访问 Arbitrum Mainnet 的 Alchemy API 密钥  

# 依赖项
* ethers v5.7.2  
* alchemy-sdk v2.6.1  

# 使用方法  
您可以使用此脚本在代币到达指定以太坊地址时自动将其转账到另一个地址。这对于自动将代币发送到交易所或其他钱包而不必手动发起转账非常有用。

请注意，此脚本仅供教育用途，按照自己的风险使用。

# 许可证  
本项目基于 MIT 许可证进行许可 - 详见 [LICENSE](LICENSE) 文件。