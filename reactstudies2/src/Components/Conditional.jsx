import {useState} from 'react';

function Conditional() {
    const [email, setEmail] = useState();
    const [userEmail, setUserEmail] = useState();

    function sendEmail(event) {
        event.preventDefault();
        setUserEmail(email);
        console.log(email);
    }

    function cleanEmail() {
        setUserEmail(null);
    }

    return (
        <div>
            <h2>Email Cadastration: </h2>
            <form>
                <input
                    type="email"
                    placeholder="Digit your e-mail..."
                    onChange={(event) => setEmail(event.target.value)}/>
                <button type='submit' onClick={sendEmail}>
                    Enviar Email
                </button>
                {userEmail && (
                    <div>
                        <p>The user e-mail: {userEmail}</p>
                        <button type='submit' onClick={cleanEmail}>
                            Limpar Email
                        </button>
                    </div>
                )}
            </form>
        </div>
    );

}

export default Conditional