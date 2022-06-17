import React from "react";
import {
  Heading,
  Box,
  Container,
  HStack,
  Text,
  Link,
} from "@chakra-ui/react";
import Section from "../../components/section";
import Paragraph from "../../components/paragraph";

import Slider from '../../components/slider.js';

const Site2 = () => {
  return(
    <Container zIndex={3}>
    <Section>
      <Heading as="h3">Clothes</Heading>
      <Paragraph>
        老舗の自転車屋さんをイメージして作りました。スムーススクロールや、慣性スクロール、メインビジュアルのスライドアニメーション実装しました。そして初めてのハンバーガーメニューとメインコンテンツの2カラムレイアウトを取り入れました。
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
          Plugin
        </Heading>
        <Text mt={4}>Luxy.js</Text>
        <Link href="https://min30327.github.io/luxy.js/">
        https://min30327.github.io/luxy.js/
        </Link>
        <Text mt={4}>jQuery.BgSwitcher</Text>
        <Link href="https://rewish.jp/blog/releases/jquery_bg_switcher">
        https://rewish.jp/blog/releases/jquery_bg_switcher
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
        <Link href="https://github.com/futureituki/Bicycle">
        https://github.com/futureituki/Bicycle
        </Link>
      </Box>
      <Box mt={16}>
      <Slider
        image={[
          "/images/site2.png",
          "/images/bicycle/about.png",
          "/images/bicycle/nav.png",
          "/images/bicycle/concept.png",
          "/images/bicycle/service.png",
          "/images/bicycle/member.png",
          "/images/bicycle/member2.png",
          "/images/bicycle/contact1.png",
          "/images/bicycle/contact2.png",
        ]}/>
      </Box>
    </Section>
  </Container>
  )
}

export default Site2