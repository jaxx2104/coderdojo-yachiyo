import styled from "styled-components";

const Container = styled.div`
  margin: 0px auto;
  max-width: 680px;
`;

const ContainerWrap = ({ children }) => {
  return <Container>{children}</Container>;
};

export default ContainerWrap;
