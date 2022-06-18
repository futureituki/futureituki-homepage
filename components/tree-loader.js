import { forwardRef } from 'react'
import { Spinner,Box } from "@chakra-ui/react";

export const TreeSpinner = () => {
  return(
    <Spinner
    size="xl"
    position="absolute"
    top="50%"
    color='black'
    left="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
    />
  )
}

export const TreeContainer = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    m="auto"
    mt={['-20px', '-60px', '0px']}
    mb={['-40px', '-140px', '-200px']}
    w={[280, 480, 640]}
    h={[280, 480, 540]}
    position="relative"
  >
    {children}
  </Box>
))

const Loader = () => {
  return (
    <TreeContainer>
      <TreeSpinner />
    </TreeContainer>
  )
}

export default Loader