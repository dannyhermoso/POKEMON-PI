import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage.jsx'
import Home from './components/Home.jsx'
import PokemonCreate from './components/PokemonCreate.jsx'
import Detail from './components/Detail.jsx'
import Update from './components/Update.jsx'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/home' element={<Home />} />
      <Route path='/pokemons' element={<PokemonCreate />} />
      <Route path='/detail/:id' element={<Detail />} /> 
      <Route path='/update/:id' element={<Update />}/>
    </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
