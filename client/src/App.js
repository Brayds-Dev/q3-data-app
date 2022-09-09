
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import './App.css';

import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Login from './Components/Login';
import Arts from './Components/Categories/Arts';
import Mathematics from './Components/Categories/Mathematics';
import Technology from './Components/Categories/Technology';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/arts' element={<Arts />} />
          <Route path='/mathematics' element={<Mathematics />} />
          <Route path='/technology' element={<Technology />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
