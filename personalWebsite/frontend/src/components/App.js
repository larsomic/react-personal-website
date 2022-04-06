import React, { Component } from "react";
import { render } from "react-dom";
import Header from "./Header.js"

export default class App extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
              <Header/>
        )
    }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv)