import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Welcome from './pages/Welcome';
import Header from './components/Header';
import Products from './pages/Products';
import Policies from './pages/Policies';
import Highlights from './pages/Highlights';
import Settings from './pages/Settings';
import Staff from './pages/Staff';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/products" element={<Products/>} />
        <Route path="/policies" element={<Policies/>} />
        <Route path="/highlights" element={<Highlights/>} />
        <Route path="/settings" element={<Settings/>} />
        <Route path="/staff" element={<Staff/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
