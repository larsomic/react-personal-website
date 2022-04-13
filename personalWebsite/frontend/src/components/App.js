import React, { Component } from "react";
import { render } from "react-dom";
import Header from "./Header.js"
import Resume from "./Resume.js"
import Home from "./Home.js"

import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";

export default class App extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/myresume" element={<Resume/>} />
                    <Route path="/mywork" element={<Header/>} />
                    <Route path="/aboutme" element={<Header/>} />
                    <Route path="/contactme" element={<Header/>} />
                </Routes>
            </Router>
        )
    }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv)