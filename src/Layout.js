import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BookSearchResult from "./pages/BookSearchResult";

export default function Layout() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" />
        <Route path="/search/books" element={<BookSearchResult />} />
      </Routes>
    </>
  );
}
