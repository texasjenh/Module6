function NamePart(props) {
    return (
        <span className="NamePart">{props.value}</span>
    )
}

function FullName(props) {
    return (
        <div className="FullName componentBox">
            Full name: <NamePart value={props.first} /> <NamePart value={props.middle}/> <NamePart value={props.last} /> 
        </div>
    )
}

export default FullName;