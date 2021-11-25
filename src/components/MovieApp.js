import { BrowserRouter, Route, Routes } from "react-router-dom";

import MovieDetail from "../routes/MovieDetail";
import MovieHome from "../routes/MovieHome";

export default function MovieApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieHome />} />
        <Route path="/movie" element={<MovieDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
