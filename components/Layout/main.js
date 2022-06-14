import { Box } from "@chakra-ui/react";
import React from "react";
import NavBar from "../navbar";
import Paragraph from "../paragraph";
const Main = ({children,router}) => {
  return(
    <Box>
      <NavBar path={router.asPath}/>
      {children}
    </Box>
  )
}

export default Main;