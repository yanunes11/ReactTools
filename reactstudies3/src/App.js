import './App.css';
import List from './Components/List';

function App() {

  const itemsList = ['React', 'Angular', 'Vue'];
  return (
    <div className="App">
      <List itemsList={itemsList}/>
      <List itemsList={[]}/>
    </div>
  );
}

export default App;
