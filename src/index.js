import React from "react";
import ReactDOM from "react-dom";
import { HelloWorld } from "./components/hello-world/index"
import "./normalize.pcss";

ReactDOM.render(
    <HelloWorld welcomeMessage="hihi" />,
    document.getElementById('wrap')
);
