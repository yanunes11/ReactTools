import { useState } from 'react';
import './App.css';
import NameStateLift from './Components/NameStateLift';
import Salutation from './Components/Salutation';
import List from './Components/List'; //List

function App() {
  const itemsList = ['React', 'Angular', 'Vue']; //List
  const [name, setName] = useState()
  return (
    <div className="App">
      {/* Lists */}
      <List itemsList={itemsList}/>
      <List itemsList={[]}/>
      {/* State Lift */}
      <NameStateLift setName={setName}/>
      <Salutation name={name}/>
    </div>
  );
}

export default App;
