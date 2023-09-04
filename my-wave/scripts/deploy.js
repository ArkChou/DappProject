const hre = require("hardhat");

const main = async () => {
    const [deployer] = await ethers.getSigners();
    const accountBalance = await deployer.provider.getBalance(deployer.address);
    
    console.log("Deploying contracts with account: ", deployer.address);
    console.log("Account balance: ", accountBalance.toString());
  
    const waveContract = await hre.ethers.deployContract("WavePortal");
    await waveContract.waitForDeployment();
    const address = await waveContract.getAddress();
  
    console.log("WavePortal address: ", address);
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();