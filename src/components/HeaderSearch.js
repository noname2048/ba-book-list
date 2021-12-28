import { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const TITLE = "title";

const HeaderSearch = () => {
  const [searchOption, setSearchOption] = useState(TITLE);
  const [typeValidationResult, setTypeValidationResult] = useState(true);
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  const roughRegx = /^[\d-]*$/gm;
  const isbnRegx = /^(\d([\d-])*)?\d$/gm;

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
            let localResult = roughRegx.test(e.target.value);
            setTypeValidationResult(localResult);
            // console.log(localResult);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              if (searchOption === "title") {
                navigate(`/books/search?${searchOption}=${searchText}`);
              } else {
                let localResult = isbnRegx.test(searchText);
                let cond2 = searchText.match(/\d/g);
                if (localResult && cond2.length === 13) {
                  navigate(`/books/search?${searchOption}=${searchText}`);
                } else {
                  console.log(localResult, cond2);
                  console.log("isbn 형식에 맞지 않습니다.");
                }
              }
            }
          }}
        />
        <span
          hidden={
            searchOption === "title" ||
            searchText === "" ||
            typeValidationResult
          }
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
