import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// Pages
import Home from './Components/Pages/Home';
import Projects from './Components/Pages/Projects';
import Company from './Components/Pages/Company';
import Contact from './Components/Pages/Contact';
import NewProject from './Components/Pages/NewProject';

// Layouts
import Container from './Components/Layouts/Container';
import NavBar from './Components/Layouts/NavBar';
import Footer from './Components/Layouts/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Container customClass="min-height">
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/projects' element={<Projects/>}/>
              <Route path='/company' element={<Company/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/newproject' element={<NewProject/>}/>
          </Routes>
        </Container>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
