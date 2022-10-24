function NameStateLift({setName}) {
    return (
        <>
            <p>Digite o seu nome: </p>
            <input 
                type="text"
                placeholder="Whats your name: "
                onChange={(event) => setName(event.target.value)}/>
        </>
    );
}
 
export default NameStateLift