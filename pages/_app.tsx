import '../styles/globals.css'
import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Fonts from '../components/fonts'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Fonts/>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
