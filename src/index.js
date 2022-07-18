
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom"
import "./style.css";
import App from './App';


ReactDOM.render(
    <>
    <div className="Container">
        <BrowserRouter>
        <App/>
        
        </BrowserRouter>
        </div>
    </>,
    document.getElementById('root')
)