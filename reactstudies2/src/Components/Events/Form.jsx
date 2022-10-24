import { useState } from 'react';

function Form () {

    function submitUserRegister (event) {
        event.preventDefault();
        console.log(`User cadastrated: ${name} with the password ${password}`);
    }

    const [name, setName] = useState();
    const [password, setPassword] = useState();

    return (
        <div>
            <h1>My Registration</h1>
            <form onSubmit={submitUserRegister}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder="Input your name: " 
                        onChange={(event) => setName(event.target.value)}>
                    </input>
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        placeholder="Password: "
                        onChange={(event) => setPassword(event.target.value)}>
                    </input>
                </div>
                <div>
                    <input 
                        type="submit" 
                        placeholder="Register">
                    </input>
                </div>
            </form>
        </div>
    );
}

export default Form