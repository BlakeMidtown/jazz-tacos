import '../styles/globals.css'
import '../pages/index.css'
import { useState } from 'react';

import  AppContext   from '../context/state';

function MyApp({ Component, pageProps }) {
  const [session, setSession] = useState(false)
  
//   return <Component {...pageProps} />
// }

return (<AppContext.Provider value={{ session, setSession }}><Component {...pageProps} /></AppContext.Provider>)
}

export default MyApp
