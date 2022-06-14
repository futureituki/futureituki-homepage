import { Image } from "@chakra-ui/react";
import styled from "@emotion/styled";
import Link from "next/link";
const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  margin:20px 10px 10px 10px;
  line-height: 20px;
  img {
    transition: 200ms ease;
    border-radius:2.5em;
  }
  &:hover img {
    transform: rotate(20deg);
  }
`;
const Logo = () => {
  return (
    <Link href="/">
      <LogoBox>
        <Image src="/images/logo.png" width={20} height={20} />
      </LogoBox>
    </Link>
  );
};

export default Logo;
