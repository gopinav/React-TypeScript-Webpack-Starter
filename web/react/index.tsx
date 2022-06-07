import ReactDOM from "react-dom";
import { App } from "./App";
import { Workbox } from "workbox-window";

const wb = new Workbox("sw.js");

ReactDOM.render(<App wb={wb} />, document.getElementById("root"));

if ("serviceWorker" in navigator) 
    wb.register();
    
