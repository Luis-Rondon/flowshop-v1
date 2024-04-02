import './app.css';
import Navbar from './componets/Navbar';
import Sidebar from './componets/sidebar'
import Maingrid from './componets/main-grid';
import Proyectos from './componets/creator/Proyectos';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <section className='top'>
        <Navbar />
      </section>

      <section className='main-section'>
        <div className='sidebar'>
          <Sidebar />
        </div>

        <Routes>
        <Route path="/dashboard" element={<Proyectos />} />
        <Route path="/panelc" element={<Proyectos />} />
        <Route path="/projects" element={<Proyectos />} />
        <Route path="/creator-content" element={<Maingrid />} />  {/* Página principal */}
        <Route path="/campaign" element={<Proyectos />} />
        <Route path="/networks" element={<Proyectos />} />
        <Route path="/payments" element={<Proyectos />} />
        </Routes>
      </section>
    </Router>
  );
}


export default App;
