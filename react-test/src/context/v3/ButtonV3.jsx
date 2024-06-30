
export default function ButtonV3({className, name, onClick}) {
    return <>
        <button type='checkbox' className={className} 
        onClick={onClick}>{name}</button>
    </>
}