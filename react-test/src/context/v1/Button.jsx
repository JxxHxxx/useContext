import { useContext } from "react";
import { PageContext } from "./Page";


export default function Button({name, onClick}) {
    const theme = useContext(PageContext);
    console.log('theme', theme);
    return <>
        <button onClick={onClick}>{name}</button>
    </>
}