import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Link,
  Image,
} from "@chakra-ui/react";

import { GiFruitTree } from "react-icons/gi";
import {
  SiJavascript,
  SiPhp,
  SiReact,
  SiLaravel,
  SiNextdotjs,
  SiTailwindcss,
  SiWordpress,
  SiThreedotjs,
  SiBootstrap,
  SiOpengl,
  SiNodedotjs,
  SiJquery,
} from "react-icons/si";

import Head from "next/head";
// import Image from 'next/image'
import Pricing from "../components/price";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import Footer from "../components/footer";
import Card from "../components/card";
import { ListContent, ListHeading } from "../components/list";
const Home = () => {
  return (
    <>
      <Head>
        <title>Future Itsuki-homepage</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Section>
          <Box
            borderRadius="lg"
            mb={6}
            p={3}
            textAlign="center"
            bg="blackAlpha.100"
            css={{ backdropFilter: "blur(10px)" }}
          >
            Welcome, My Portfolio, come Japan
          </Box>
          <Box position="relative" zIndex={3}>
          <Flex display="flex">
            <Heading as="h2" fontWeight="bold" letterSpacing={2}>
              Sato Itsuki
            </Heading>
            <Box zIndex={3}>
              <GiFruitTree fontSize={36} />
            </Box>
          </Flex>
          <HStack display={{ base: "block", md: "flex" }}>
            <Paragraph>Digital Craftsman ( FrontDeveloper )</Paragraph>
            <Box align="center" zIndex={3}>
              <Image
                src="/images/me.jpg"
                maxWidth="200px"
                maxHeight="200px"
                marginTop={8}
                borderWidth={3}
                borderRadius="full"
                borderStyle="solid"
                borderColor="green.200"
              />
            </Box>
          </HStack>
          </Box>
        </Section>
        <Section delay={0.1}>
          <Heading as="h3" mb={8} fontSize={24}>
            Work
          </Heading>
          <Paragraph>
            Takuya is a freelance and a full-stack developer based in Osaka with
            a passion for building digital services/stuff he wants. He has a
            knack for all things launching products, from planning and designing
            all the way to solving real-life problems with code. When not
            online, he loves hanging out with his camera. Currently, he is
            living off of his own product called Inkdrop. He publishes content
            for marketing his products and his YouTube channel called "Dev as
            Life" has more than 100k subscribers.
          </Paragraph>
          <Box textAlign="center" mt={8} mb={8} p={6}>
            <Button bg="green.200">
              <Link href="/works">My-Portfolio</Link>
            </Button>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Box>
            <Heading as="h3" mb={8} fontSize={32}>
              Skill
            </Heading>
            <ListHeading>Language</ListHeading>
            <ListContent>
              <SiPhp fontSize={32} />
              <SiJavascript fontSize={24} />
            </ListContent>
            <ListHeading>Framework</ListHeading>
            <ListContent>
              <SiLaravel fontSize={24} />
              <SiWordpress fontSize={24} />
              <SiNextdotjs fontSize={24} />
            </ListContent>
            <ListHeading>Library</ListHeading>
            <ListContent>
              <SiJquery fontSize={24} />
              <SiReact fontSize={32} />
              <SiNodedotjs fontSize={24} />
              <SiTailwindcss fontSize={24} />
              <SiBootstrap fontSize={24} />
              <SiThreedotjs fontSize={24} />
              <SiOpengl fontSize={24} />
            </ListContent>
          </Box>
        </Section>
        <Section delay={0.4}>
          <Box textAlign="center">
            <Heading as="h3" mb={8} fontSize={32}>
              Price
            </Heading>
            <Card>
              <Pricing />
              <Pricing />
            </Card>
            <Button bg="green.200" mt={8}>
              <Link href="/works">Request a job</Link>
            </Button>
          </Box>
        </Section>
        <Footer />
      </Container>
    </>
  );
};

export default Home;