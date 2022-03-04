
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/9-3Tc64gkfX5kL8VAAPFD8Ld7mouJeXJ",
      accounts: ["c704dfab62848d924c2f05dbea18eeba1ba9a2bcb4800ab74b0abf24b4a907e8"]
    },
  },
};

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});