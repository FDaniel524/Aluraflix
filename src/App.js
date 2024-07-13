import './App.css';
import Header from './componentes/Header/Header';
import Footer from './componentes/Footer/Footer';
import Banner from './componentes/Banner/Banner';
import CardsContainer from './componentes/CardsContainer/CardsContainer';
import EditarCard from './componentes/EditarCard/EditarCard';
import CrearVideo from './componentes/CrearVideo/CrearVideo';
import ResultadoEditar from './/componentes/ResultadoEditar/ResultadoEditar'
import ResultadoCrear from 'componentes/ResultadoCrear/ResultadoCrear';
import ResultadoBorrar from 'componentes/ResultadoBorrar/ResultadoBorrar';

function App() {

  return (
    <div className="App">
        <Header />
        <Banner />
        <CardsContainer />
        <EditarCard />
        <CrearVideo/>
        <ResultadoEditar />
        <ResultadoCrear />
        <ResultadoBorrar />
        <Footer />
    </div>
  );
}

export default App;
