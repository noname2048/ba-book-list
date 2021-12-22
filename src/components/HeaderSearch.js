import { useState } from "react";
import styled from "styled-components";
const HeaderSearch = () => {
  const [searchText, setSearchText] = useState("");
  let value = "";

  return (
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
        }
      }}
    />
  );
};

const StyledHeaderSearch = styled(HeaderSearch)`
  background-color: black;
  text: white;
`;

export { StyledHeaderSearch };
