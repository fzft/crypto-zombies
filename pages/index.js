import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useContext } from 'react'
import { useState } from 'react'
import { CryptoZombieContext } from '@/context/CryptoZombieContext'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [zombieName, setZombieName] = useState("");
  const [zombieDetials, setZombieDetails] = useState([]);

  const {getZombiedetails, createRandomZombie, generateZombie, getZombiesByOwner, feedOnKitty,
    zombies, ids} = useContext(CryptoZombieContext);

  const getZombieDetail = async () => {
    setZombieDetails([])
    ids.map(async(id) => {
        const detail = await getZombiedetails(id.toNumber());
        setZombieDetails((prev) => [...prev, detail]);
    })
  }
  return (
    <>
    <main>
      <div>
      {zombieDetials.map(((zombie, index) => (<div className="zombie" key={index+1}>
              <ul>
                <li>Name: {zombie.name}</li>
                <li>DNA: {zombie.dna.toNumber()}</li>
                <li>Level: {zombie.level}</li>
                <li>Wins: {zombie.winCount}</li>
                <li>Losses: {zombie.lossCount}</li>
                <li>Ready Time: {zombie.readyTime}</li>
              </ul>
            </div>)))}
      </div>
      <hr />
      <form action="">
      <input type="text" placeholder="set zombie name" value={zombieName} onChange={(e)=>setZombieName(e.target.value)} />
        <button onClick={() => createRandomZombie(zombieName)}>Create Random Zombie</button>
      </form>
      <button onClick={() => getZombiesByOwner()}>Get Zombie ids</button>
      <button onClick={() => getZombieDetail()}>Get Zombie details</button>
      <button onClick={() => feedOnKitty()}>Get Zombie details</button>
    </main>
    </>
  )
}
