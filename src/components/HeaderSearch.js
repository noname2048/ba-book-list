import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const TITLE = "title";

const HeaderSearch = () => {
  const [searchOption, setSearchOption] = useState(TITLE);
  const [typeValidationResult, setTypeValidationResult] = useState(true);
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  const isbnRegx = /[0-9-]*/gi;

  return (
    <>
      <select
        name="search_option"
        id="search-option"
        onChange={(event) => {
          setSearchOption(event.target.value);
        }}
      >
        <option value={TITLE} defaultValue>
          제목
        </option>
        <option value="isbn13">ISBN13</option>
      </select>
      <div style={{ position: "relative" }}>
        <input
          type="text"
          placeholder={`${searchOption} 으로 검색하기`}
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            console.log(searchText, isbnRegx.test(searchText));
            setTypeValidationResult(isbnRegx.test(searchText));
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              navigate(`/books/search?${searchOption}=${searchText}`);
              setSearchText("");
            }
          }}
        />
        <span
          hidden={typeValidationResult && searchOption === "title"}
          style={{
            color: "red",
            position: "absolute",
            left: "0px",
            top: "20px",
            fontSize: "0.3rem",
            alignContent: "center",
          }}
        >
          isbn13 형식이 맞지 않습니다.
        </span>
      </div>
    </>
  );
};

const StyledHeaderSearch = styled(HeaderSearch)`
  background-color: black;
  text: white;
`;

export { StyledHeaderSearch };
