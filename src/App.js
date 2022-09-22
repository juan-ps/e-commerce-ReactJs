import NavBar from './components/NavBar';
import './App.css';
import ItemListContainer from './components/shopping/ItemListContainer';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <NavBar />
      <div className="App min-h-screen">
        <header>
        <main>
          <span className='h1Span my-5 mx-auto'>
            <h1>chic store</h1>
          </span>
        </main>
          <br></br>
          <div className="card m-auto w-96 bg-base-200 shadow-xl py-2 mb-10">
            <div className="card-body">
              <ItemListContainer greeting='¡Saludos desde List Container!' />
            </div>
          </div>
        </header>
      </div>
      <Footer />
    </>
  );
}

export default App;
