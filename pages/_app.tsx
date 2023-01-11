import { createContext, useState } from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

export const AppContext = createContext({})

const  App = ({Component, pageProps}: AppProps) => {

  const [isAuth, setIsAuth] = useState<boolean>(false)

  return (
    <AppContext.Provider value={{isAuth, setIsAuth}}>
       <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default App;