// import { useState } from "react";
import { Link } from "react-router-dom";
import { GoSearch } from "react-icons/go";

const Header = () => {
  return (
    <div>
      <h1>서지검색</h1>
      <div style={{ display: "flex" }}>
        <GoSearch />
        <span>검색하기</span>
      </div>
      <div>
        <Link to="/login">로그인</Link>
        <Link to="/signup">회원가입</Link>
      </div>
    </div>
  );
};

export { Header };
