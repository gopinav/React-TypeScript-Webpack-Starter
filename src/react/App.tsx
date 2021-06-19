import { HandleAppState } from "./HandleAppState";
import { Counter } from "./Counter";
import { Workbox } from "workbox-window";

import logo from "../assets/icons/logo512.png";
import gif from "../assets/images/giphy.gif";

export const App = ({wb}: { wb: Workbox; }) => 
{
    return (
        <>
            <HandleAppState wb={wb} /> 
            <h1>React TypeScript Webpack Starter Template</h1>
            <Counter />
            <img src={logo.src} srcSet={logo.srcSet} width={logo.width} height={logo.height} loading="lazy" alt="React logo" />
            <img src={gif} loading="lazy" alt="Silicon valley gif" />
        </>
    );
};
