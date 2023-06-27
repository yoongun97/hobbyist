import React from "react";
import { FaSistrix } from "react-icons/fa";
import { styled } from "styled-components";
import SignIn from "./SignIn";
const Header = styled.header`
  width: 100%;
  margin: 0 auto;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  height: 50px;
  padding: 1rem;
  background-color: white;
  font-weight: bold;
  display: flex;
  /* justify-content: space-between; */
  justify-content: space-between;

  box-shadow: 1px 1px 5px gray;
`;
const A = styled.div`
  display: flex;
  flex-direction: row;
`;

const Title = styled.h1`
  font-size: 35px;
  color: #5e5ee8;
  margin-left: 20px;
  margin-right: 20px;
`;

const Form = styled.form`
  display: flex;
  margin-top: 11%;

  border: none;
  border-radius: 20px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  padding: 5px;
  height: 2%;
`;

const Input = styled.input`
  border: none;
  border-radius: 20px;
  height: 30px;
  padding-left: 10px;

  /* box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); */
`;
const BtnContainer = styled.div`
  margin-left: 50%;
  display: flex;
`;
const TopButton = styled.button`
  font-size: 15px;
  width: 120px;
  border: none;
  background-color: transparent;
  float: left;
  padding-right: 25px;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;

function TopBar() {
  return (
    <Header>
      <A>
        <Title>Hobbyist</Title>
        <Form>
          <FaSistrix size="20" color="gray"></FaSistrix>
          <Input type="text" placeholder="검색 가능합니다."></Input>
        </Form>
      </A>
      <BtnContainer>
        <SignIn />
        <TopButton>EN</TopButton>
        <TopButton>로그인</TopButton>
        <TopButton>회원가입</TopButton>
      </BtnContainer>
    </Header>
  );
}

export default TopBar;
