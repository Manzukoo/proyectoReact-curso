import logo from './logo.svg';
import './App.css';
import Reloj from './Componentes/Reloj';
import Navbar from './Componentes/Navegacion'
import Users from './Componentes/Users'
import Footer from './Componentes/Footer'
import botones from './Componentes/Buttons';
import './style.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className='App-main'>
        <Users titulo={"User"} classN={"test"} />
        <botones.BotonAzul />
        <botones.BotonRojo />
        <botones.BotonVerde />
        <Reloj />
      </main>
      <Footer />
    </div>
  );
}

export default App;
