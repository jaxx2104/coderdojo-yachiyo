import styled from "styled-components";

import { CMS_NAME, CMS_URL } from "../lib/constants";

const Intro = styled.div`
  font-size: 4rem;
  background-color: rgb(0, 0, 0);
`;

const Heading = styled.h2`
  font-size: 4rem;
  color: rgb(255, 255, 255);
`;

export default function IntroWrap() {
  return (
    <Intro>
      <section>
        <Heading>
          八千代市内のこどもたちがプログラミングと触れ合える場をつくります
        </Heading>
      </section>
    </Intro>
  );
}
