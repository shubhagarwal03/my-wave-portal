
const main = async () => {

    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
    const waveContract = await waveContractFactory.deploy(); // waveContract is an instance of waveContractFactory, which is the js equivalent of wavePortal in this case.
    await waveContract.deployed();
    console.log("Contract addy:", waveContract.address);
    //console.log("Contract deployed by :", owner.address);

    let wavecount;
    wavecount = await waveContract.gettotalwaves(); // think of it like the solidity file has turned into a js executable, and we are able to call all of its functions.
    console.log(wavecount.toNumber());

    let wavetxn = await waveContract.wave("One Message!");
    await wavetxn.wait();

    const  [_, randomperson] = await hre.ethers.getSigners();

     wavetxn = await waveContract.connect(randomperson).wave("New Message!");
    await wavetxn.wait();

    let all_waves = await waveContract.get_all_waves();
    console.log(all_waves);
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0); // exit Node process without error
    } catch (error) {
      console.log(error);
      process.exit(1); // exit Node process while indicating 'Uncaught Fatal Exception' error
    }
  };
  
  runMain();