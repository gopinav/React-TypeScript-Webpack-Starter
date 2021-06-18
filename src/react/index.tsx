import ReactDOM from "react-dom";
import { App } from "./App";
import { Workbox } from "workbox-window";

const root = document.getElementById("root");

if(root)
    ReactDOM.render(<App />, root);

const wb = new Workbox("sw.js");

if ("serviceWorker" in navigator) 
    wb.register();

// wb.addEventListener("waiting", showSkipWaitingPrompt);
// wb.addEventListener("controlling", (event) => 
// { // Took controls over
//     window.location.reload();
// });

