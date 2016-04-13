import * as React from "react";
import * as ReactDOM from "react-dom";
import Hello from "./Hello/Hello";

function UI(){
    ReactDOM.render(
    <Hello name="loupe says yes" />,
    document.getElementById("app")
);
}

export default UI;