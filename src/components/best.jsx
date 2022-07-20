import React from "react";
import styled from "styled-components"; //내부에서 컴포넌트 선언하는 모듈을 연결
import Footer from "./footer";
import BestItems from "./bestItem";

const Contents = styled.div`
  width: 100%;
`;
const Bestblock = styled.div`
  margin: 0 auto;
  width: 1600px;
  height: 1600px;
  padding: 50px 0;
  background-color: gray;
`;

function Best() {
  return (
    <>
      <Contents>
        <Bestblock>
          <BestItems />
        </Bestblock>
      </Contents>
      <Footer />
    </>
  );
}

export default Best;
