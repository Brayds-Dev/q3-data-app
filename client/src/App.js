
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import './App.css';

import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Login from './Components/Login';
import Create from './Components/Create';
import Arts from './Components/Categories/Arts';
import Mathematics from './Components/Categories/Mathematics';
import Technology from './Components/Categories/Technology';
import Update from './Components/Update.js';
import ArticleDetail from './Components/ArticleDetail';

function App() {

  return (
    <div className="App">
      <Router >
        <NavBar  />
        <Routes>

          {/* These are the basic component routes*/}
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/create' element={<Create />} />
          <Route path='/arts' element={<Arts />} />
          <Route path='/mathematics' element={<Mathematics />} />
          <Route path='/technology' element={<Technology />} />
          
          <Route path='/update/:articleID' element={<Update />} />

          {/* These route to article detail depending on which component you click on them from. */}
          <Route path='/:articleID' element={<ArticleDetail />} />
          <Route path='/arts/:articleID' element={<ArticleDetail />} />
          <Route path='/mathematics/:articleID' element={<ArticleDetail />} />
          <Route path='/technology/:articleID' element={<ArticleDetail />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
