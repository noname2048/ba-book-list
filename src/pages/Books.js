import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

const URL = "http://localhost:8000/api/v1/books";

export default function Books() {
  const location = useLocation();
  const { title, isbn13 } = queryString.parse(location.search);
  const [books, setBooks] = useState([]);
  const qs = [
    title ? `title=${title}` : "",
    isbn13 ? `isbn13=${isbn13}` : "",
  ].join("");

  const fetchURL = qs !== "" ? URL + "?" + qs : URL;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(fetchURL);
        const jsonData = await response.json();
        setBooks(jsonData.books);
      } catch (err) {
        console.log(constructor.name, err);
      }
    }
    fetchData();
  }, [fetchURL]);

  return (
    <div>
      {books.map((item, idx) => (
        <div key={idx}>{item}</div>
      ))}
    </div>
  );
}
