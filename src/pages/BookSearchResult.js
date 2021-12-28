import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

export default function BookSearchResult() {
  const location = useLocation();
  const { title, isbn13 } = queryString.parse(location.search);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const qs = [
        title ? `title=${title}` : "",
        isbn13 ? `isbn13=${isbn13}` : "",
      ].join("");

      let url = "http://localhost:8000/api/v1/books";
      if (qs !== "") {
        url = url + "?" + qs;
      }

      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        setSearchResult(jsonData.books);
        console.log(jsonData);
      } catch (err) {
        setSearchResult([]);
      }
    }
    fetchData();
  }, [title, isbn13]);

  return (
    <>
      {searchResult
        ? searchResult.map((item, idx) => item)
        : "검색결과가 존재하지 않습니다"}
    </>
  );
}
