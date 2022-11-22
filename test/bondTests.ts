import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

interface _transaction {
  classId: string | number | BN;
  nonceId: string | number | BN;
  amount: string | number | BN;
}

describe("ERC3475", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployOneYearLockFixture() {

    // Contracts are deployed using the first signer/account by default
    const [owner, lender, operator, econdaryMarketBuyer, secondaryMarketBuyer2, spender ] = await ethers.getSigners();

    const BondContract = await ethers.getContractFactory("ERC3475");
    const bondContract = await BondContract.deploy();

    return { bondContract, owner, lender, operator, econdaryMarketBuyer, secondaryMarketBuyer2, spender};
    console.log("ok")
  }

    describe("test", function () {
    it("should", async function () {
      console.log("test");
    });
    it('should issue bonds to a lender', async () => {
      const{bondContract, owner, lender, operator, econdaryMarketBuyer, secondaryMarketBuyer2, spender} = await loadFixture(deployOneYearLockFixture);
      
      const DBITClassId: number = 0;
      const firstNonceId: number = 0;
      
      let _transactionIssuer: _transaction[]
          =
          [{
              classId: DBITClassId,
              nonceId: firstNonceId,
              amount: 7000
          }];

      await bondContract.issue(lender.getAddress(), _transactionIssuer, { from: owner.getAddress() })
      await bondContract.issue(lender.getAddress(), _transactionIssuer, { from: owner.getAddress() })
      const balance = (await bondContract.balanceOf(lender.getAddress(), DBITClassId, firstNonceId)).toNumber()
      //const activeSupply = (await bondContract.activeSupply(DBITClassId, firstNonceId)).toNumber()
      expect(balance).to.equal(14000);
      //assert.equal(activeSupply, 14000);
      console.log("test2")
  });
  })

});