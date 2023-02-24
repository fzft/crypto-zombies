import {ethers} from "ethers"
import Web3Modal from 'web3modal'

import { ZombeFactoryAddress, ZombieFactoryAbi } from "@/Context/Constant";

export const CheckIfWalletConnected = async() => {
    try {
        if (!window.ethereum) return console.log("install Matemask");
        const accounts = await window.ethereum.request({
            method: "eth_accounts",
        })

        const firstAccount = accounts[0]
        return firstAccount
    } catch (error) {
        console.log("Install MateMask", error);
    }
}

export const conectWallet = async() => {
    try {
        if (!window.ethereum) return console.log("install Matemask");
        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
        })

        const firstAccount = accounts[0]
        return firstAccount
    } catch (error) {
        console.log("Install MateMask", error);
    }
}

const fetchContract = (signerOrProvider) => new ethers.Contract(ZombeFactoryAddress, ZombieFactoryAbi, signerOrProvider)

export const connectingWithContract = async() => {
    try {
        const web3modal = new Web3Modal();
        const connection = await web3modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        const contract = fetchContract(signer)
        return contract
    } catch (error) {
        console.log("Error connecting with contract", error)
    }
}