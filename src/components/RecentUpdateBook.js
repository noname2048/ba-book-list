import { useState } from "react";

export default function RecentUpdateBook() {
  const [books, setBooks] = useState(null);
  const [isbn13, setIsbn13] = useState([]);
  const onChange = (event) => {
    setIsbn13(event.target.value);
  };
  const onSubmit = async () => {
    const json = await (
      await fetch(`localhost:8000/isbn/search/${isbn13}`)
    ).json();
    setBooks(json.data.books);
  };
  return (
    <div>
      <form action="" onSubmit={onSubmit}></form>
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
      <ul>{books ? books.map((book) => <li>book.title</li>) : null}</ul>
    </div>
  );
}
