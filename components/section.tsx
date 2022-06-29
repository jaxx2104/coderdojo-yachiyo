import styled from "styled-components";

const Section = styled.section`
  padding: 2rem 0px;
  margin: 0px auto;
`;

const SectionWrap = ({ children }) => {
  return <Section>{children}</Section>;
};

export default SectionWrap;
