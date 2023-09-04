const hre = require("hardhat");

const main = async () => {
    const waveContract = await hre.ethers.deployContract("WavePortal");

    await waveContract.waitForDeployment(
      ethers.parseEther("0.1"),
    );
    const address = await waveContract.getAddress();
    console.log("Contract deployed to:", address);


    let contractBalance = await hre.ethers.provider.getBalance(
      address
    );
    console.log(
      "Contract balance:",
      ethers.formatEther(contractBalance)
    );

    let waveTxn = await waveContract.wave("A message!");
    await waveTxn.wait(); // Wait for the transaction to be mined



    // const [_, randomPerson] = await hre.ethers.getSigners();
    // waveTxn = await waveContract.connect(randomPerson).wave("Another message!");
    // await waveTxn.wait(); // Wait for the transaction to be mined

    // let allWaves = await waveContract.getAllWaves();
    // console.log(allWaves);
    contractBalance = await hre.ethers.provider.getBalance(address);
  console.log(
    "Contract balance:",
    ethers.formatEther(contractBalance)
  );

  let allWaves = await waveContract.getAllWaves();
  console.log(allWaves);
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