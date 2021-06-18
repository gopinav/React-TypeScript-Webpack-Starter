import { HandleAppState } from "./HandleAppState";
import { Counter } from "./Counter";
import logo from "../assets/icons/logo512.png";
import { Workbox } from "workbox-window";

export const App = ({wb}: { wb: Workbox; }) => 
{
    return (
        <>
            <HandleAppState wb={wb} /> 
            <h1>React TypeScript Webpack Starter Template</h1>
            <Counter />
            <img src={logo} alt="React logo"/>
        </>
    );
};
