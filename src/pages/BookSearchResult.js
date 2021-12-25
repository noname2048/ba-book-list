import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function BookSearchResult() {
  const { isbn13 } = useParams();
  const { result, setResult } = useState("");

  const fetchData = async (isbn) => {
    try {
      const response = await fetch(
        `http://localhost:8000/search/books?=${isbn}`
      );
      const jsonData = await response.json();
      setResult(jsonData.books);
    } catch (err) {
      setResult({ error: "error ocurs" });
    }
  };

  useEffect(() => {
    fetchData(isbn13);
  }, [isbn13]);

  return (
    <div>
      {result.map(() => (
        <p>{result}</p>
      ))}
    </div>
  );
}
