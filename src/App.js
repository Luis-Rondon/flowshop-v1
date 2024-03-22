import './app.css';
import Navbar from './componets/Navbar';
import Sidebar from './componets/sidebar'
import Maingrid from './componets/main-grid';

function App() {
  return (

    <>

      <section className='top'>
        <Navbar/>
      </section>

      <section className='main-section'>
        <div className='sidebar'>
          <Sidebar/>
        </div>

        <div className='container-module'>
          <Maingrid/>
        </div>
      </section>

    </>
  );
}

export default App;
