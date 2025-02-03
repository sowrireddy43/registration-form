import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import SignUp from './Components/SignUp';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/SignUp" element={<SignUp />} />
            </Routes>
        </Router>
    );
}

export default App;
