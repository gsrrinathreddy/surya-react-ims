import logo from './logo.svg';
import './App.css';
import CakeView from './features/cake/CakeView/CakeView';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cakes from './pages/cakes';
import CartComp from './components/cartComp';
import Icecream from './pages/icecreams';
import Homepage from './pages/Homepage';
import CartsPage from './pages/cartspage';
import Chocolates from './pages/chocolates';
function App() {
  let p1=['cakes','icecreams','chocolates','flowers','Gifts']
  let s1=['Profile','settings','password','logout']

  return (
    <div className='App'>
      <BrowserRouter>

      <Navbar pages={p1} settings={s1}/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/cakes' element={<Cakes/>}/>
        <Route path='/icecreams' element={<Icecream/>}/>
        <Route path='/chocolates' element={<Chocolates/>}/>
        <Route path='/cart' element={<CartsPage/>}/>
      
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
