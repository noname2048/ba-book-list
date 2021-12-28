import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

export default function BookSearchResult() {
  const [result, setResult] = useState([]);
  const location = useLocation();
  const { title, isbn13 } = queryString.parse(location.search);

  const fetchData = async () => {
    const url = `http://localhost:8000/books${
      title ? `title=${title}` : "" + isbn13 ? `isbn13=${isbn13}` : ""
    }`;

    try {
      const response = await fetch(url);
      const jsonData = await response.json();
      setResult(jsonData.books);
    } catch (err) {
      setResult({ error: "error ocurs" });
    }
  };

  useEffect(() => {
    fetchData();
  }, [title, isbn13]);

  return (
    <>
      {isbn13 || title ? (
        <div>
          {result.map(() => (
            <p>{result}</p>
          ))}
        </div>
      ) : (
        <p>isbn13연결바람</p>
      )}
    </>
  );
}
