import { createContext, useState } from "react";
import FormV2 from "./FormV2";


// set 까지 함께보냄
export const PageContextV2 = createContext();

export default function PageV2() {

    const [pages, setPages] = useState({
        'title': '',
        'page': 1,
        'size': 5,

    });
    return <>
        <PageContextV2.Provider value={{
            pages,
            setPages
        }}>
            <FormV2 />
        </PageContextV2.Provider>
    </>
}