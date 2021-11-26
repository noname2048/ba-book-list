import { BrowserRouter, Route, Routes } from "react-router-dom";

import MovieDetail from "../routes/MovieDetail";
import MovieHome from "../routes/MovieHome";

export default function MovieApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          basename={process.env.PUBLIC_URL}
          path="/"
          element={<MovieHome />}
        />
        <Route
          basename={process.env.PUBLIC_URL}
          path="/movie/:id"
          element={<MovieDetail />}
        />
      </Routes>
    </BrowserRouter>
  );
}
