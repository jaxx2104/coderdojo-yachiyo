import styled from "styled-components";
import Link from "next/link";

import Container from "../components/container";

const Header = styled.header`
  background-color: rgb(60, 60, 60);
  position: sticky;
  top: 0px;
  height: 100px;
  margin: 0 auto;
`;

const Heading = styled.h1`
  margin: 0 auto;
  color: rgb(255, 255, 255);
`;

const HeaderWrap = () => {
  return (
    <Header>
      <Container>
        <Heading>
          <Link href="/">CoderDojo八千代</Link>
        </Heading>
      </Container>
    </Header>
  );
};
export default HeaderWrap;
