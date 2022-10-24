import './App.css';
import Event from './Components/Event'
import Form from './Components/Form';

function App() {
  return (
    <div className="App">
      <h1 className="App-header">Testing Events</h1>
      <Event number={1}/>
      <Form/>
    </div>
  );
}

export default App;
