import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home'
import Header from './components/Header/Header.jsx';
import Beers from './pages/Beers/Beers.jsx';
import Beer from './pages/Beer/Beer.jsx'
import AddBeer from './pages/AddBeer/AddBeer.jsx'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route element={<Header />} >
          <Route path='/beers' element={<Beers />} />
          <Route path='/beers/:beerId' element={<Beer />} />
          <Route path='/new-beer' element={<AddBeer />} />
        </Route>

      </Routes>
    </div>
  );
}

export default App;
