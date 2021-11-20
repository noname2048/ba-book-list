import {Route, Routes} from "react-router-dom"

import IsbnSearch from "../components/IsbnSearch"
import React from "react";

class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>WELCOME HOME</h1>
                <Routes>
                    <Route path="#" element={<IsbnSearch />}/>
                </Routes>
            </div>
        );
    }
}

export default Home;
