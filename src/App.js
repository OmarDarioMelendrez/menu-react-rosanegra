import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";

import MenuPrincipal from './pages/menu-principal';
import Menu from './pages/menu';
import Tragos from './pages/tragos';
import Vinos from './pages/vinos';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Menu/>} />
        <Route exact path="/menu" element={<Menu/>} />
        <Route exact path="/menu-principal" element={<MenuPrincipal/>} />
        <Route exact path="/tragos" element={<Tragos/>} />
        <Route exact path="/vinos" element={<Vinos/>} />
        <Route path="*" element={<Menu/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
