import React from "react";
import { Heading, Box, Container, HStack, Text, Link, Image } from "@chakra-ui/react";

import Section from "../../components/section";
import Paragraph from "../../components/paragraph";

const ReactMovie = () => {
  return (
    <Container>
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
          <Link>
            <a href="https://www.themoviedb.org/?language=ja">
              https://www.themoviedb.org/?language=ja
            </a>
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
          <Link>
            <a href="https://github.com/futureituki/Movie-search">
            https://github.com/futureituki/Movie-search
            </a>
          </Link>
        </Box>
        <Box mt={4} mb={4}>
          <Image
          src="/images/react-movie/category.png"/>
          <Paragraph>カテゴリー別</Paragraph>
        </Box>
        <Box mt={4} mb={4}>
          <Image
          src="/images/react-movie/invidual.png"/>
          <Paragraph>個別ページ</Paragraph>
        </Box>
        <Box mt={4} mb={4}>
          <Image
          src="/images/react-movie/search.png"/>
          <Paragraph>サーチ機能</Paragraph>
        </Box>
      </Section>
    </Container>
  );
};

export default ReactMovie;
