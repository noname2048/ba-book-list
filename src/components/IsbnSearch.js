import { useState } from "react";

export default function IsbnSearch() {
  const [books, setBooks] = useState(null);
  const [isbn13, setIsbn13] = useState([]);
  const onChange = (event) => {
    setIsbn13(event.target.value);
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:8000/search?isbn=${isbn13}`
      );
      console.log(response);
      const json = await response.json();
      console.log(json);
      setBooks(json.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form action="" onSubmit={onSubmit}>
        <label htmlFor="isbn13_search">
          <strong>isbn</strong> (13자리) 를 입력하세요
        </label>
        <input
          type="text"
          id="isbn13_search"
          name="isbn13"
          value={isbn13}
          onChange={onChange}
        />
        <button type="submit">검색하기</button>
        <ul>
          {books
            ? books.map((book, idx) => <li key={idx}>book.title</li>)
            : null}
        </ul>
      </form>
    </div>
  );
}
