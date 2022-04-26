import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Contador from './components/Contador';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer nombre="RENZO"/>
      <Contador stock={10} initial={1}/>
    </div>
  );
}

export default App;
