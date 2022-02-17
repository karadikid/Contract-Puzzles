const { assert } = require("chai");

describe("Game5", function () {
  it("should be a winner", async function () {
    const Game = await ethers.getContractFactory("Game5");
    const game = await Game.deploy();
    await game.deployed();

    //Get signers and addresses
    let signer = new ethers.Wallet.createRandom();
    while(signer.address >= "0x00FfFFfFFFfFFFFFfFfFfffFFFfffFfFffFfFFFf") {
      signer = ethers.Wallet.createRandom();
    }
    //Traditional 
    const signer1= ethers.provider.getSigner(1);
    
    const sendTx = await signer1.sendTransaction({to: signer.address, value: ethers.utils.parseEther("200")})
    
    //Logging
    //receipt = sendTx;
    //console.log(receipt);

    // good luck
    // to call a contract as a signer you can use contract.connect
    //await game.connect(signer).win();

    await game.connect(signer.connect(ethers.provider)).win();

    // leave this assertion as-is
    assert(await game.isWon(), "You did not win the game");
  });
});
