import '../styles/globals.css'
import { AppProps } from 'next/app'
import { Box, ChakraProvider } from '@chakra-ui/react'
import Fonts from '../components/fonts'
import Layout from '../components/Layout/main'
function MyApp({ Component, pageProps,router }: AppProps) {
  return (
    <ChakraProvider>
      <Fonts/>
      <Layout router={router}>
      <Box padding={100}>
      <Component {...pageProps} key={router.route} />
      </Box>
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
