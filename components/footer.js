import { Box } from "@chakra-ui/react"
const Footer = () => {
  return(
    <Box align="center" opacity={0.4} fontSize="sm" height={10}>
      &copy; {new Date().getFullYear()} Sato Itsuki. All Rights Reserved.
    </Box>
  )
}
export default Footer