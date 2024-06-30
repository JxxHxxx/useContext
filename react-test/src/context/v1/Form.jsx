import { useContext } from "react";
import Button from "./Button";
import { PageContext } from "./Page";


export default function Form({ setPages }) {

    const pageContext = useContext(PageContext);
    const handleOnClickButton = (event, fieldName) => {
        event.preventDefault();
        setPages((prev) => ({
            ...prev,
            [fieldName]: prev[fieldName] + 1
        }))
    }

    const handleChangeInput = (event) => {
        setPages((prev) => ({
            ...prev,
            title: event.target.value

        }))
    }

    return <>
        <form>
            <input placeholder="입력해주세요" onChange={handleChangeInput}></input>
            <Button name={'page : ' + pageContext.page}
                onClick={(event) => handleOnClickButton(event, 'page')} />
            <Button name={'size : ' + pageContext.size}
                onClick={(event) => handleOnClickButton(event, 'size')} />
        </form>
    </>
}