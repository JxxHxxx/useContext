import { useContext } from "react";
import ButtonV2 from "./ButtonV2";
import { PageContextV2 } from "./PageV2";


export default function FormV2() {

    const pageContext = useContext(PageContextV2);
    console.log('pageContext', pageContext);
    const handleOnClickButton = (event, fieldName) => {
        event.preventDefault();
        pageContext.setPages((prev) => ({
            ...prev,
            [fieldName]: prev[fieldName] + 1
        }))
    }

    const handleChangeInput = (event) => {
        pageContext.setPages((prev) => ({
            ...prev,
            title: event.target.value

        }))
    }

    return <>
        <form>
            <input placeholder="입력해주세요" onChange={handleChangeInput}></input>
            <p>input value: {pageContext.pages.title}</p>
            <ButtonV2 name={'page : ' + pageContext.pages.page}
                onClick={(event) => handleOnClickButton(event, 'page')} />
            <ButtonV2 name={'size : ' + pageContext.pages.size}
                onClick={(event) => handleOnClickButton(event, 'size')} />
        </form>
    </>
}