import { Heading, HStack } from "@chakra-ui/react"

export const ListHeading = ({children}) => {
  return(
    <Heading
    as="h5"
    md={{base:4,md:6}}
    mt={{base:4,md:6}}
    fontSize={20} 
    >
      {children}
    </Heading>
  )
}
export const ListContent = ({children}) => {
  return(
    <HStack
    display={{base:"flex"}}
    mt={4}
    mb={4}
    >
      {children}
    </HStack>
  )
}


