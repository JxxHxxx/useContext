import { createContext, useState } from "react";
import Form from "./Form";

export const PageContext = createContext();

export default function Page() {

    const [pages, setPages] = useState({
        'title' : '',
        'page': 1,
        'size' : 5,
        
    });
    return <>
        <PageContext.Provider value={pages}>
            <Form setPages={setPages}/>
        </PageContext.Provider>
    </>
}