import { Routes, Route } from 'react-router-dom';
import './App.css';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Home from './pages/Home/Home';
import Coins from './pages/Coins/Coins';
import Favoritos from './pages/Favoritos/Favoritos';
import Detail from './pages/Detail/Detail';

function App() {
  return (
    <>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/coins' element={<Coins/>}/>
        <Route path='*' element={<ErrorPage/>}/>
        <Route path='/favoritos' element={<Favoritos/>}/>
        <Route path='/coins-detail' element={<Detail/>}/>
     </Routes>
    </>
  );
}

export default App;
