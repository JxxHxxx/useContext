import { useContext } from "react";
import ButtonV3 from "./ButtonV3";
import { AuthContext, ThemeContext } from "./PageV3";
import './form.css'


export default function FormV3() {

    const ac = useContext(AuthContext);
    const tc = useContext(ThemeContext);

    const handleOnClickThemeChangeButton = (event) => {
        event.preventDefault()
        tc.setTheme((prev) => (prev === 'white' ? 'black' : 'white'))
    }

    const handleChangeInput = (event, fieldName) => {
        ac.setAuth((prev) => ({
            ...prev,
            [fieldName]: event.target.value

        }))
    }

    return <>
        <div className={tc.theme === 'black' ? "container_nigth" : "container_bsc"}>
            <form>
                <input placeholder="아이디를 입력해주세요" onChange={(event) => handleChangeInput(event, 'id')}></input>
                <p>input id : {ac.auth.id}</p>
                <input placeholder="비밀번호를 입력해주세요" onChange={(event) => handleChangeInput(event, 'pw')}></input>
                <p>input pw: {ac.auth.pw}</p>
                <ButtonV3
        
                    name={'테마 전환 버튼'} onClick={handleOnClickThemeChangeButton} />
            </form>
        </div>
    </>
}