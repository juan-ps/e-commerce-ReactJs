import NavBar from './components/NavBar';
import './App.css';
import ItemListContainer from './components/shopping/ItemListContainer';
import Footer from './components/Footer';

const h1Style = {fontSize: '50px', padding: '20px'}

function App() {
  return (
    <>
    <NavBar/>
      <div className="App">
        <header>
          <h1 style={h1Style}><strong>
            Welcome!
          </strong></h1>
          <br></br>
          <ItemListContainer greeting='¡Saludos desde List Container!'/>
        </header>
      </div>
    <footer>
      <Footer/>
    </footer>
    </>
  );
}

export default App;
