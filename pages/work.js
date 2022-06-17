import {
  Box,
  Container,
  Heading,
  HStack,
  Image,
  Text,
  Link,
} from "@chakra-ui/react";
import NextLink from "next/link";
import Paragraph from "../components/paragraph"
import GridItems from '../components/gird'
import Section from "../components/section";
const Works = () => {
  return (
    <>
      <Section delay={0.1}>
        <Container pb={18} zIndex={1}>
          <Heading as="h1" fontSize={20}>
            Works
          </Heading>
          {/* <GridItems title="React-Movie" ImageUrl="/images/react-movie/react-movie.png" />
          <GridItems title="React-Movie" ImageUrl="/images/site1.png" /> */}
          <HStack>
            <Box mb={6} zIndex={2}>
              <NextLink href="works/reactMovie" passHref>
                <Link>
                  <Image m="auto" w={64} src="/images/react-movie/react-movie.png" />
                  <Heading
                    textAlign="center"
                    mt={4}
                    mb={4}
                    as="h3"
                    fontSize={16}
                  >
                    React-Movie
                  </Heading>
                </Link>
              </NextLink>
            </Box>
            <Box mb={6} zIndex={3}>
              <NextLink href="works/site1" passHref>
                <Link>
                  <Image m="auto" w={64} src="/images/site1.png" />
                  <Heading
                    mt={4}
                    mb={4}
                    textAlign="center"
                    as="h3"
                    fontSize={16}
                  >
                    架空サイト１
                  </Heading>
                </Link>
              </NextLink>
            </Box>
          </HStack>
          <HStack>
            <Box mb={6}>
            <NextLink href="works/site2" passHref>
                <Link>
                  <Image m="auto" w={64} src="/images/site2.png" />
                  <Heading
                    mt={4}
                    mb={4}
                    textAlign="center"
                    as="h3"
                    fontSize={16}
                  >
                    架空サイト2
                  </Heading>
                </Link>
              </NextLink>
            </Box>
            <Box mb={6}>
            <NextLink href="works/snake" passHref>
                <Link>
                  <Image m="auto" w={64} src="/images/snake.png" />
                  <Heading
                    mt={4}
                    mb={4}
                    textAlign="center"
                    as="h3"
                    fontSize={16}
                  >
                    スネークゲーム
                  </Heading>
                </Link>
              </NextLink>
            </Box>
          </HStack>
        </Container>
      </Section>
    </>
  );
};

export default Works;
