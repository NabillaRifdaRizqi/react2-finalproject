import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";


import Login from "./pages/Auth/Login";

const App = () => {
    return (
        <div>
        <BrowserRouter>
        <Routes>
        <Route index element={<Login />} />
            <Route path="login" element={<Login />} />
        
        </Routes>
        </BrowserRouter>
        </div>
         );
        };
        
        export default App;
        