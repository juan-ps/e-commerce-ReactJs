import NavBar from './components/NavBar';
import './App.css';
import ItemDetailContainer from './components/shopping/ItemDetailContainer';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartWidget from './components/shopping/CartWidget';
import ErrorPage from './components/ErrorPage';
import ItemList from './components/shopping/ItemList';
import ItemListContainer from './components/shopping/ItemListContainer';

function App() {
  return (
    <>
      <div className="App min-h-screen font-crim">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path={'/'} element={< ItemList />} />
            <Route path={'/itemlist'} element={<ItemListContainer />} />
            <Route path={'/itemlist/product/:id'} element={<ItemDetailContainer />} />
            <Route path={'/cart'} element={<CartWidget />} />
            <Route path={'*'} element={<ErrorPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
