import '@/styles/globals.css'

import { CryptoZombieProvider } from '@/context/CryptoZombieContext'

export default function App({ Component, pageProps }) {

  return (
    <div>
      <CryptoZombieProvider>
          <Component {...pageProps} />
    </CryptoZombieProvider>
    </div>
  )
}
