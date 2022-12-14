/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "ERC3475",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC3475__factory>;
    getContractFactory(
      name: "ERC3475",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC3475__factory>;
    getContractFactory(
      name: "IERC3475",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC3475__factory>;
    getContractFactory(
      name: "Lock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Lock__factory>;

    getContractAt(
      name: "ERC3475",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC3475>;
    getContractAt(
      name: "ERC3475",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC3475>;
    getContractAt(
      name: "IERC3475",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC3475>;
    getContractAt(
      name: "Lock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Lock>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
