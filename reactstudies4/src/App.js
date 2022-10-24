import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import NavBar from './Pages/NavBar';
import Company from './Pages/Company';
import Contact from './Pages/Contact';
import Home from './Pages/Home';

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/company' element={<Company/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default App;
