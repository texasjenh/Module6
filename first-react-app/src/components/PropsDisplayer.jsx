function PropsDisplayer(props) {
    // convert object to string
    const stringProps = JSON.stringify(props);

    return (
        <div className="PropsDisplayer componentBox">
            <h2>Check out my props!</h2>
            <h3>{stringProps}</h3>
            <p>Name: {props.name} is {props.age} years old</p>
        </div>
    )
}
// Export this component so we can import it elsewhere
export default PropsDisplayer