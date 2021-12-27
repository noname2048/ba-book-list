import { useState, useEffect } from "react";
import styled from "styled-components";

const HeaderSearch = () => {
  const [searchText, setSearchText] = useState("");
  const [value, setValue] = useState("");

  useEffect(() => {
    async function fetchData() {
      if (value === "") return;
      try {
        const response = await fetch(
          `http://localhost:8000/api/v1/request?value=${value}`
        );
        const data = await response.json();
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [value]);

  const isbnRegx = /[0-9-]/gi;

  return (
    <div>
      <select name="search_option" id="search-option">
        <option value="title">제목</option>
        <option value="isbn13">ISBN13</option>
      </select>
      <input
        type="text"
        placeholder="ISBN 검색하기"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setValue(e.target.value);
            console.log(`search ${value}`);
            setSearchText("");
          } else if (!e.key.match(isbnRegx)) {
            console.log("wrong input");
          }
        }}
      />
      {[...searchText].map((c, idx) => (
        <span key={idx} style={{ color: c.match(isbnRegx) ? "black" : "red" }}>
          {c}
        </span>
      ))}
    </div>
  );
};

const StyledHeaderSearch = styled(HeaderSearch)`
  background-color: black;
  text: white;
`;

export { StyledHeaderSearch };
