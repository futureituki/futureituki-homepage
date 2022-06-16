import { Box, Container, Heading, HStack, Image, Text, Link, LinkOverlay } from "@chakra-ui/react";
import Card from "../components/card";

const Works = () => {
  return (
    <>
      <Container pb={18}>
        <Heading as="h1" fontSize={20}>
          Works
        </Heading>
        <HStack>
          <Box mb={6}>
            <Image m="auto" w={64} src="/images/react-movie.png" />
            <Heading textAlign="center" mt={4} mb={4} as="h3" fontSize={16}>
              React-Movie
            </Heading>
            <Text textAlign="center" fontSize={6} w={64}>
              TMDBのAPIを使用して作った映画、テレビ番組検索アプリ、最新情報も取得できる。
            </Text>
          </Box>
          <Box mb={6}>
            <LinkOverlay href="works/site1">
              <Image m="auto" w={64} src="/images/site1.png" />
              <Heading mt={4} mb={4} textAlign="center" as="h3" fontSize={16}>
                架空サイト１
              </Heading>
              <Text textAlign="center" fontSize={6} w={64}>
                デザインから作った架空サイト
              </Text>
            </LinkOverlay>
          </Box>
        </HStack>
        <HStack>
          <Box mb={6}>
            <Image m="auto" w={64} src="/images/site2.png" />
            <Heading textAlign="center" mt={4} mb={4} as="h3" fontSize={16}>
              架空サイト２
            </Heading>
            <Text textAlign="center" fontSize={6} w={64}>
              自転車のサイトをイメージして作ったもの
            </Text>
          </Box>
          <Box mb={6}>
            <Image m="auto" w={64} src="/images/site1.png" />
            <Heading mt={4} mb={4} textAlign="center" as="h3" fontSize={16}>
              架空サイト１
            </Heading>
            <Text textAlign="center" fontSize={6} w={64}>
              デザインから作った架空サイト
            </Text>
          </Box>
        </HStack>
      </Container>
    </>
  );
};

export default Works;
