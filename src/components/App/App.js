import React from "react";
import {
    useNavigate,
    useLocation,
    Routes,
    Route,
} from "react-router-dom";

import Main from "../Main/Main";

function App() {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <div className="app">
            <Routes>
                <Route
                    exact path="/"
                    element={
                        <Main />
                    }
                />
            </Routes>
        </div>
    )
}

export default App;