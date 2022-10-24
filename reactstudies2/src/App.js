import './App.css';
import Conditional from './Components/Conditional';
import Event from './Components/Events/Event'
import Form from './Components/Events/Form';

function App() {
  return (
    <div className="App">
      <h1 className="App-header">Testing Events</h1>
      <Event/>
      <Form/>
      <Conditional/>
    </div>
  );
}

export default App;
