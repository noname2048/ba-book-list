import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const URL = "http://localhost:8000/api/v1/books/response/";

export default function BooksResponsesId() {
  const { id } = useParams();
  const [books, setBooks] = useState([]);

  const fetchURL = URL + id;

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
