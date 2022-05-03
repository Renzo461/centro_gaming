import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Contador from './components/Contador';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>      
      <ItemListContainer nombre="RENZO"/>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
