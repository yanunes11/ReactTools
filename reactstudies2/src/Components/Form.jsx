function Form () {

    function submitUserRegister (event) {
        event.preventDefault();
        console.log(`User: Cadastrated`);
    }

    return (
        <div>
            <h1>My Registration</h1>
            <form onSubmit={submitUserRegister}>
                <div>
                    <input input="text" placeholder="Input your name: "></input>
                </div>
                <div>
                    <input type="submit" placeholder="Register"></input>
                </div>
            </form>
        </div>
    );
}

export default Form