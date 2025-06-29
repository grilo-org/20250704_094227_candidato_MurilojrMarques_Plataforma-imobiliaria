import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateImovel from './pages/CreateImovel';
import EditImovel from './pages/EditImovel';
import ImovelDetails from './pages/ImovelDetails';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/imoveis/novo" element={<CreateImovel />} />
        <Route path="/imoveis/:id/editar" element={<EditImovel />} />
        <Route path="/imoveis/:id" element={<ImovelDetails />} />
      </Routes>
    </Router>
  );
}

export default App;