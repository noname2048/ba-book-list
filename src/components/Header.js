// import { useState } from "react";
import { Link } from "react-router-dom";
import { GoSearch } from "react-icons/go";
import styled from "styled-components";
import { StyledHeaderSearch } from "./HeaderSearch";

const TitleH1 = styled.h1`
  margin: 1.2rem;
`;

const MainDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const SearchInputDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #888;
  border-radius: 1.2rem;
  padding: 0.3rem;
`;

const StyledInput = styled.input`
  display: flex;
`;

const LoginStatusDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 1.2rem;
`;

const StyledLink = styled(Link)`
  padding: 0.5rem;
  margin: 0.5rem;
`;

const Header = () => {
  return (
    <MainDiv>
      <TitleH1>서지검색</TitleH1>
      <SearchInputDiv>
        <GoSearch style={{ margin: "0.3rem" }} />
        <StyledInput type="text" placeholder="검색하기" />
        <StyledHeaderSearch />
        <span style={{ margin: "0.2rem" }}>ISBN</span>
      </SearchInputDiv>
      <LoginStatusDiv>
        <StyledLink to="/login">로그인</StyledLink>
        <StyledLink to="/signup">회원가입</StyledLink>
      </LoginStatusDiv>
    </MainDiv>
  );
};

export { Header };
