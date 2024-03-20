import './App.css';
import Navbar from './componets/Navbar';
import Sidebar from './componets/sidebar'
import Maingrid from './componets/main-grid';

function App() {
  return (
    <>
      <section className='header'>
        <Navbar/>
      </section>
      
      <section className='main-section'>
      <div className='app'>
        <Sidebar/>
      </div>

      <div className='container-gridd'>
        <Maingrid/>
      </div>
      </section>

      
    </>
  );
}

export default App;
