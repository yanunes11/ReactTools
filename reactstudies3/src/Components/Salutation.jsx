function Salutation({name}) {

    function generateSalutation(someName) {
        return `Hello, ${someName}`;
    }
    return (
        <>
            {name && (<p>{generateSalutation(name)}</p>)
            }
        </>
    );
}

export default Salutation