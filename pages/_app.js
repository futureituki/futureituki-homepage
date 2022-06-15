import '../styles/globals.css'

import { ChakraProvider } from '@chakra-ui/react'
import Fonts from '../components/fonts'
import Layout from '../components/Layout/main'
function MyApp({ Component, pageProps,router }) {
  return (
    <ChakraProvider>
      <Layout router={router}>
      <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
