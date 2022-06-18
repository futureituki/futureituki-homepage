import { 
  Box, 
  Container } from "@chakra-ui/react";
import React from "react";
import NavBar from "../navbar";
import dynamic from "next/dynamic";
import Footer from "../footer";
import Loader from '../loader' 
const LaxyTree = dynamic(() => import('../tree'), {
  ssr: false,
  loading: () => <Loader />
})

const Main = ({children,router}) => {
  return(
    <Box>
      <NavBar path={router.asPath}/>
      <Container pt={24} maxW="container.md">
        <LaxyTree />
        {children}
        <Footer />
      </Container>
    </Box>
  )
}

export default Main;