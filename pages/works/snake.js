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
        <Heading as="h3">スネークゲーム</Heading>
        <Paragraph>
          Techpitというサイトで受講して作ったスネークゲーム！GithubPageにデプロイしました。ぜひ遊んでみてください。
        </Paragraph>
        <Link href="https://futureituki.github.io/hooks-snake-game/">
        https://futureituki.github.io/hooks-snake-game/
        </Link>
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
            <Text>CSS</Text>
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
          <Text>React</Text>
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
          <Link href="https://github.com/futureituki/hooks-snake-game">
          https://github.com/futureituki/hooks-snake-game
          </Link>
        </Box>
        <Box mt={16}>
          <Text>*一部抜粋</Text>
        <Slider
          image={[
            "/images/snake.png",
            "/images/snake2.png",
          ]}/>
        </Box>
      </Section>
    </Container>
  );
};

export default Site1;
