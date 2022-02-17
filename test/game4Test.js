const { assert } = require("chai");

describe("Game4", function() {
  it("should be a winner", async function() {
    const Game = await ethers.getContractFactory("Game4");
    const game = await Game.deploy();
    await game.deployed();

    //Get signers and addresses
    const signer = ethers.provider.getSigner(0);
    const address1 = await signer.getAddress();

    const signer1 = ethers.provider.getSigner(1);
    const address2 = await signer1.getAddress();

    const signer2 = ethers.provider.getSigner(2);
    const address3 = await signer2.getAddress();

    // nested mappings are rough :}
    await game.write(address1);


    await game.win(address1);

    // leave this assertion as-is
    assert(await game.isWon(), "You did not win the game");
  });
});
