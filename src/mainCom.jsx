import React from "react";
import styles from './mainCom.module.css';  //CSS Module화.
import styled from 'styled-components';  //내부에서 컴포넌트 선언하는 모듈을 연결
import Footer from "./components/footer";
import BestItems from "./components/bestItem";
// import Mainimg01 from "../src/images/main.jpg";

//내부에서 컴포넌트 생성
const Contents = styled.div
  `
  width:100%;
  height:3000px;
  background:coral;
  border: 2px solid green;
  `

function MainCom() {
  return (
    <div>
      <div className={styles.mainimg}>
        {/* mainCom.jsx 파일 상단에 {import Mainimg01 from "../src/images/main.jpg"; 한 후에 사용한다.} */}
        {/* <img src={Mainimg01} /> */}
        {/* {public폴더에 이미지폴더를 설정하고 경로 설정} */}
        {/* <img src={require('./images/main.jpg')} /> */}
      </div>
      <div className={styles.contents}>
        <div className={styles.best}>
          <BestItems />
        </div>
        <div className={styles.brand}></div>
        <div className={styles.coupon}></div>
        <div className={styles.event}></div>
      </div>
      <Contents />
      <Footer />
    </div>
  )
}

export default MainCom;
