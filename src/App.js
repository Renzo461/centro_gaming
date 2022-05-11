import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import CartContextProvider from './components/context/CartContext';
import AppContextProvider from './components/context/AppContext';

function App() {
  return (
    <AppContextProvider>
      <CartContextProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' index element={<ItemListContainer />} />
            <Route path='/category/:category' element={<ItemListContainer />} />
            <Route path='/juego/:gameId' element={<ItemDetailContainer />} />
            <Route path='/cart' />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </AppContextProvider>
  );
}

export default App;
