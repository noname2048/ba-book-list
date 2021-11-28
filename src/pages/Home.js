import { Route, Routes } from "react-router-dom";

import IsbnSearch from "../components/IsbnSearch";
// import { Main } from "../components/Converters";
import React from "react";
import RecentUpdateBook from "../components/RecentUpdateBook";

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>WELCOME HOME</h1>
        <Routes>
          <Route path="/" element={<IsbnSearch />} />
        </Routes>
      </div>
    );
  }
}

export default Home;
