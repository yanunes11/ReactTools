function Event (props) {
    const {number} = props;

    function myEvent() {
        console.log(`Show the number 1 from App.js:  ${number}`);
    }
    return (
        <div>
            <p>Click to dispatch the event</p>
            <button onClick={myEvent}>Active</button>
        </div>
    );
}

export default Event