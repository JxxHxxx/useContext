import { createContext, useState } from "react";

import FormV3 from "./FormV3";

export const ThemeContext = createContext(null);
export const AuthContext = createContext(null);


export default function PageV3() {
    const [theme, setTheme] = useState('black')
    const [auth, setAuth] = useState({
        'id': '',
        'pw': '',

    });

    return <>
        <ThemeContext.Provider value={{
            theme,
            setTheme
        }}>
            <AuthContext.Provider value={{
                auth,
                setAuth
            }}>
                <FormV3 />
            </AuthContext.Provider>
        </ThemeContext.Provider>
    </>
}