import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Link,
  Menu,
  MenuItem,
  MenuList,
  useColorModeValue,
  Box,
  MenuButton,
  IconButton,
  Flex,
  Heading,
  Stack,
  Container,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { IoLogoGithub } from "react-icons/io5";
import { AiOutlineTwitter } from "react-icons/ai";
import Logo from './logo';
const LinkItem = ({ href, path, children, target, ...props }) => {
  const active = href === path;
  const inactiveColor = useColorModeValue("gray200", "whiteAlpha.900");
  return (
    <NextLink href={href} passHref>
      <Link
        p={2}
        color={active ? "#202023" : "undefined"}
        bg={active ? "grassTeal" : "undefined"}
        target={target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  );
};

const NavBar = (props) => {
  const { path } = props;

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#ffffff40", "#20202380")}
      css={{ backdropFilter: "blur(10px)" }}
      zIndex={1}
      {...props}
    >
      <Container 
      display="flex"
      p={2}
      maxW="container.md"
      wrap="wrap"
      alignContent="center"
      justifyContent="space-between"
      >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
          <Logo />
        </Heading>
      </Flex>
      <Stack
        direction={{ base: "column", md: "row" }}
        display={{ base: "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
        mt={{ base: 4, md: 0 }}
      >
        <LinkItem href="/works" path={path}>
          Works
        </LinkItem>
        <LinkItem href="/contact" path={path}>
          Contact
        </LinkItem>
        <LinkItem
          target="_blank"
          href="https://github.com/futureituki"
          path={path}
          display="inline-flex"
          alignItems="center"
          style={{ gap: 4 }}
          pl={2}
        >
          <IoLogoGithub />
          github
        </LinkItem>
        <LinkItem
          target="_blank"
          href="https://twitter.com/8tfGpQ99poWMQFN"
          path={path}
          display="inline-flex"
          alignItems="center"
          style={{ gap: 4 }}
          pl={2}
        >
          <AiOutlineTwitter/>
          twitter
        </LinkItem>
      </Stack>
      <Box display={{ base: "inline-block", md: "none" }}>
        <Menu isLazy id="navbar-menu">
          <MenuButton
            as={IconButton}
            icon={<HamburgerIcon />}
            variant="outline"
            aria-label="Options"
          />
          <MenuList>
            <NextLink href="/" passHref>
              <MenuItem as={Link}>About</MenuItem>
            </NextLink>
            <NextLink href="/works" passHref>
              <MenuItem as={Link}>Works</MenuItem>
            </NextLink>
            <NextLink href="/contact" passHref>
              <MenuItem as={Link}>Contact</MenuItem>
            </NextLink>
            <MenuItem as={Link} href="https://github.com/futureituki">
              github
            </MenuItem>
            <MenuItem as={Link} href="https://twitter.com/8tfGpQ99poWMQFN">
              twitter
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
      </Container>
    </Box>
  );
};

export default NavBar;
