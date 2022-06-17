import React from "react";
import { Grid, GridItem, Image, Text } from "@chakra-ui/react";

const GridItems = ({title,ImageUrl}) => {
  return(
    <>
    <Grid templateColumns='repeat(2,1fr)' gap={3}>
      <GridItem w='100%' h='10'>
        <Image src={ImageUrl}/>
        <Text>{title}</Text>
      </GridItem>
    </Grid>
    </>
  )
}


export default GridItems