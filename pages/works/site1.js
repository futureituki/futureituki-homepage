import React from "react";
import {
  Heading,
  Box,
  Container,
  HStack,
  Text,
  Link,
  Image,
} from "@chakra-ui/react";
import Section from "../../components/section";
import Paragraph from "../../components/paragraph";

import Slider from '../../components/slider.js';


const Site1 = () => {
  return (
    <Container zIndex={3}>
      <Section>
        <Heading as="h3">Clothes</Heading>
        <Paragraph>
          都会のお洋服屋さんをイメージしたWEBサイトを作りました。
        </Paragraph>
        <Box>
          <Heading
            as="h5"
            p={2}
            fontSize={16}
            mt={10}
            mb={2}
            bg="black"
            width={24}
            color="white"
          >
            STACK
          </Heading>
          <HStack>
            <Text>HTML</Text>
            <Text>SCSS</Text>
            <Text>JavaScript</Text>
          </HStack>
        </Box>
        <Box>
          <Heading
            as="h5"
            p={2}
            fontSize={16}
            mt={10}
            mb={2}
            bg="black"
            width={24}
            color="white"
          >
            Framework
          </Heading>
          <Text>jQuery</Text>
        </Box>
        <Box>
          <Heading
            as="h5"
            p={2}
            fontSize={16}
            mt={10}
            mb={2}
            bg="black"
            width={24}
            color="white"
          >
            Library
          </Heading>
          <Text>PACE.js</Text>
          <Link href="https://codebyzach.github.io/pace/">
              https://codebyzach.github.io/pace/
          </Link>
        </Box>
        <Box>
          <Heading
            as="h5"
            p={2}
            fontSize={16}
            mt={10}
            mb={2}
            bg="black"
            width={24}
            color="white"
          >
            SOURCE
          </Heading>
          <Text>Github</Text>
          <Link href="https://github.com/futureituki/Clothes-Shop">
              https://github.com/futureituki/Clothes-Shop
          </Link>
        </Box>
        <Box mt={16}>
          <Text>*一部抜粋</Text>
        <Slider
          image={[
            "/images/site1.png",
            "/images/clothes/access.png",
            "/images/clothes/about.png",
            "/images/clothes/news.png",
            "/images/clothes/service1.png",
            "/images/clothes/service2.png",
          ]}/>
        </Box>
      </Section>
    </Container>
  );
};

export default Site1;
