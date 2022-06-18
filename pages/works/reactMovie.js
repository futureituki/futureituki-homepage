import React from "react";
import { Heading, Box, Container, HStack, Text, Link } from "@chakra-ui/react";

import Section from "../../components/section";
import Paragraph from "../../components/paragraph";
import Slider from "../../components/slider";
const ReactMovie = () => {
  return (
    <Container zIndex={3}>
      <Section>
        <Heading as="h3">RaectMovie-Search</Heading>
        <Paragraph>
          TMDBのAPIを使用して作った映画、テレビ番組検索アプリ、最新情報も取得できる。
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
            <Text>React</Text>
            <Text>TypeScript</Text>
            <Text>Tailwind CSS</Text>
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
            API
          </Heading>
          <Text>TMDB</Text>
          <Link href="https://www.themoviedb.org/?language=ja">
              https://www.themoviedb.org/?language=ja
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
          <Link href="https://github.com/futureituki/Movie-search">
            https://github.com/futureituki/Movie-search
          </Link>
        </Box>
        <Box mt={16} mb={4}>
          <Slider image={[
            "/images/react-movie/category.png",
            "/images/react-movie/invidual.png",
            "/images/react-movie/search.png"
          ]} />
        </Box>
          {/* <Paragraph>カテゴリー別</Paragraph>
          <Paragraph>個別ページ</Paragraph>
          <Paragraph>サーチ機能</Paragraph> */}
      </Section>
    </Container>
  );
};

export default ReactMovie;
