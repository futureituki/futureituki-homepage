import { 
  Box, 
  Container } from "@chakra-ui/react";
import React from "react";
import NavBar from "../navbar";
import dynamic from "next/dynamic";
import Loader from '../tree-loader' 
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
      </Container>
    </Box>
  )
}

export default Main;