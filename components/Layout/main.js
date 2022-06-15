import { 
  Box, 
  Container } from "@chakra-ui/react";
import React from "react";
import NavBar from "../navbar";
import dynamic from "next/dynamic";
import Loader from '../avocado-loader' 
const LaxyAvocado = dynamic(() => import('../avocado'), {
  ssr: false,
  loading: () => <Loader />
})

const Main = ({children,router}) => {
  return(
    <Box>
      <NavBar path={router.asPath}/>
      <Container pt={24} maxW="container.md">
        <LaxyAvocado />
        {children}
      </Container>
    </Box>
  )
}

export default Main;