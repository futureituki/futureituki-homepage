import { Box, Container } from "@chakra-ui/react";
import React from "react";
import NavBar from "../navbar";
import Paragraph from "../paragraph";
const Main = ({children,router}) => {
  return(
    <Box>
      <NavBar path={router.asPath}/>
      <Container pt={32} maxW="container.md">
        {children}
      </Container>
    </Box>
  )
}

export default Main;