import Button from "./Button";

function Event (props) {
    function myEvent() {
        console.log(`First event activated`);
    }
    return (
        <div>
            <p>Click to dispatch the event</p>
            <Button event={myEvent} text="First Event"/>
            <button onClick={myEvent}>Active</button>
        </div>
    );
}

export default Event