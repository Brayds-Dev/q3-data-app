/**
 * Date: September 2022
 * Team: Wise Wellingtonians - Whitecliffe IT6037 Group Project
 * 
 * This file is responsible for all the routing and navigation within the 
 * application. It imports all the other used components and defines their
 * paths.
 */

//Libraries needed from react to deal with navigation
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

//Import styling
import './App.css';

//Import all pathed components.
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Login from './Components/Login';
import Create from './Components/Create';
import Arts from './Components/Categories/Arts';
import Mathematics from './Components/Categories/Mathematics';
import Technology from './Components/Categories/Technology';
import Update from './Components/Update.js';
import ArticleDetail from './Components/ArticleDetail';
import Register from './Components/Register';

//Functional component

function App() {
  return (
    <div className="App">
      <Router >
        <NavBar  /> {/**Just renders the navbar component. */}
        <Routes>

          {/* These are the basic component routes*/}
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/create' element={<Create />} />
          <Route path='/arts' element={<Arts />} />
          <Route path='/mathematics' element={<Mathematics />} />
          <Route path='/technology' element={<Technology />} />
          <Route path='/register' element={<Register />} />

          {/* These route to article detail depending on which component you click on them from. */}
          <Route path='/:articleID' element={<ArticleDetail />} />
          <Route path='/arts/:articleID' element={<ArticleDetail />} />
          <Route path='/mathematics/:articleID' element={<ArticleDetail />} />
          <Route path='/technology/:articleID' element={<ArticleDetail />} />

          {/** Route specifically to updating an article*/}
          <Route path='/update/:articleID' element={<Update />} />


        </Routes>
      </Router>
    </div>
  );
}
export default App;