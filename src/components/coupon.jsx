import React from "react";
import Footer from "./footer";
import styled from "styled-components"; //내부에서 컴포넌트 선언하는 모듈을 연결
import styles from "./coupon.module.css";


const MainImg = styled.div`
  width:100%;
  height:250px;
  background:green;
`;

const Contents = styled.div`
  width:100%;
  height:2000px;
  background:skyblue;
`

const ContentIn = styled.div`
  width:1600px;
  height:2000px;
  background:blue;
  margin:0 auto;
`

const Box = styled.div`
  float:left;
  margin:20px;
  width:600px;
  height:200px;
  background:#fff;
  margin-left:120px;
  margin-top:120px;
  cursor:pointer;
  transition: all 0.5s;
  &:hover{
    background-color:#ccc;
  }
`

function BoxMain({ user }) {
  return (
    <section className={styles.section}>
      <div className={styles.lbox}>
        <h4>{user.ttl}</h4>
        <h3>{user.price}</h3>
        <p>{user.des}</p>
      </div>
      <div className={styles.rbox}>
        <button>button</button>
      </div>
    </section>
  )
}


function Coupon() {
  const boxs = [
    {
      id: 1,
      ttl: '제목1',
      price: '5,000원',
      des: '20,000원 이상 결제시'
    },
    {
      id: 2,
      ttl: '제목2',
      price: '5,000원',
      des: '20,000원 이상 결제시'
    },
    {
      id: 3,
      ttl: '제목3',
      price: '5,000원',
      des: '20,000원 이상 결제시'
    },
    {
      id: 4,
      ttl: '제목4',
      price: '5,000원',
      des: '20,000원 이상 결제시'
    },
    {
      id: 5,
      ttl: '제목5',
      price: '5,000원',
      des: '20,000원 이상 결제시'
    },
    {
      id: 6,
      ttl: '제목6',
      price: '5,000원',
      des: '20,000원 이상 결제시'
    },
  ]
  return (
    <div>
      <MainImg />
      <Contents>
        <ContentIn>
          <Box><BoxMain user={boxs[0]} /></Box>
          <Box><BoxMain user={boxs[1]} /></Box>
          <Box><BoxMain user={boxs[2]} /></Box>
          <Box><BoxMain user={boxs[3]} /></Box>
          <Box><BoxMain user={boxs[4]} /></Box>
          <Box><BoxMain user={boxs[5]} /></Box>
        </ContentIn>
      </Contents>
      <Footer />
    </div>
  )
}

export default Coupon;
