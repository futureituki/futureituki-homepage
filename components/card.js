import { Box } from "@chakra-ui/react"

const Card = ({children}) => {
  return(
    <Box
    display={{base:"block",md:"flex"}}
    flexWrap="wrap"
    justifyContent="space-evenly"
    >
      {children}
    </Box>
  )
}

export default Card