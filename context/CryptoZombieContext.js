import React, {useState} from "react";
import {createContext} from "react";
import { useEffect } from "react";
import { CheckIfWalletConnected, conectWallet, connectingWithContract } from "@/utils/apiFeature";

export const CryptoZombieContext = createContext();

export const CryptoZombieProvider = ({children}) => {
    const [zombies, setZombies] = useState([]);
    const [zombieName, setZombieName] = useState("");
    const [zombieDna, setZombieDna] = useState("");
    const [zombieId, setZombieId] = useState("");
    const [loading, setLoading] = useState(false);
    const [account, setAccount] = useState("");
    const [ids, setIds] = useState([]);
    const [error, setError] = useState("");


    const getZombiesByOwner =  async () => {
      try {
        const contract = await connectingWithContract()
        const account = await conectWallet()
        setAccount(account)
        const ids = await contract.getZombiesByOwner(account)
        setIds(ids)
      } catch (error) {
        console.log(error)
        setError(error)
      }
    }

    const getZombiedetails = async (id) => {
      try {
        const contract = await connectingWithContract()
        const zombie = await contract.zombies(id)
        return zombie
      } catch (error) {
        setError(error)
      }
    }

    const feedOnKitty = async (zombieId, kittyId) => {
      try {
        const contract = await connectingWithContract()
        const feedOnKittyTx = await contract.feedOnKitty(zombieId, kittyId)
        setLoading(true);
        await feedOnKittyTx.wait();
        setLoading(false);
      } catch (error) {
        console.log(error)
        setError(error)
      }
    }

    const createRandomZombie = async (name) => {
      try {
        const contract = await connectingWithContract()
        const createZombieTx = await contract.createRandomZombie(name)
        setLoading(true);
        await createZombieTx.wait();
        setLoading(false);
      } catch (error) {
          console.log(error)
          setError(error)
      }
    }

    function generateZombie(id, name, dna) {
        let dnaStr = String(dna)
        // pad DNA with leading zeroes if it's less than 16 characters
        while (dnaStr.length < 16)
          dnaStr = "0" + dnaStr
      
        let zombieDetails = {
          // first 2 digits make up the head. We have 7 possible heads, so % 7
          // to get a number 0 - 6, then add 1 to make it 1 - 7. Then we have 7
          // image files named "head1.png" through "head7.png" we load based on
          // this number:
          headChoice: dnaStr.substring(0, 2) % 7 + 1,
          // 2nd 2 digits make up the eyes, 11 variations:
          eyeChoice: dnaStr.substring(2, 4) % 11 + 1,
          // 6 variations of shirts:
          shirtChoice: dnaStr.substring(4, 6) % 6 + 1,
          // last 6 digits control color. Updated using CSS filter: hue-rotate
          // which has 360 degrees:
          skinColorChoice: parseInt(dnaStr.substring(6, 8) / 100 * 360),
          eyeColorChoice: parseInt(dnaStr.substring(8, 10) / 100 * 360),
          clothesColorChoice: parseInt(dnaStr.substring(10, 12) / 100 * 360),
          zombieName: name,
          zombieDescription: "A Level 1 CryptoZombie",
        }
        return zombieDetails
      }

    useEffect(() => {
      getZombiesByOwner()
    }, []);  
    return (
        <CryptoZombieContext.Provider value={{getZombiedetails, createRandomZombie, generateZombie,getZombiesByOwner,feedOnKitty,
          zombies, ids
        }} >
            {children}
        </CryptoZombieContext.Provider>
    )

}