import { executeReducerBuilderCallback } from "@reduxjs/toolkit/dist/mapBuilders";
import { useState } from "react";
import styled from "styled-components";
const HeaderSearch = () => {
  const [searchText, setSearchText] = useState("");
  let value = "";

  const isbnRegx = /[0-9-]/gi;

  return (
    <div>
      <input
        type="text"
        placeholder="ISBN 검색하기"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            value = e.target.value;
            console.log(`search ${value}`);
            setSearchText("");
          } else if (!e.key.match(isbnRegx)) {
            console.log("wrong input");
          }
        }}
      />
      {searchText.split().map((t, idx) => (
        <span
          key={idx}
          style={{ color: t.match(isbnRegx) ? "black" : "red" }}
        ></span>
      ))}
    </div>
  );
};

const StyledHeaderSearch = styled(HeaderSearch)`
  background-color: black;
  text: white;
`;

export { StyledHeaderSearch };
