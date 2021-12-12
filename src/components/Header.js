// import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GoSearch } from "react-icons/go";

const StyledDiv = styled.div`
  display: flex;
`;
const StyledButton = styled.button`
  font-size: 5rem;
`;

const Header = () => {
  // const [serchString, setSearchString] = useState("");

  return (
    <div style={StyledDiv}>
      <h1>서지검색</h1>
      <div style={{ display: "flex" }}>
        <GoSearch />
        <span>검색하기</span>
      </div>
      <div>
        <Link to="/login" style={StyledButton}>
          로그인
        </Link>
        <Link to="/signup" styled={StyledButton}>
          회원가입
        </Link>
      </div>
    </div>
  );
};

export { Header };
