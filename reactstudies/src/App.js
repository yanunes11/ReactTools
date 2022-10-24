import './App.css';
import ListOfCars from './Components/ListOfCars';
import SayMyName from './Components/SayMyName';

function App() {

  return (
    <div className='container'>
      <div className='carOwner'>
        <SayMyName 
          name="Yan" 
          age="32"
          profission="Programmer"
          photo="https://via.placeholder.com/150"
        />
      </div>
      <div className='carList'>
        <ListOfCars carBrand="Fiat" yearOfCar={2010}/>
      </div>
    </div>
  );
}

export default App;
