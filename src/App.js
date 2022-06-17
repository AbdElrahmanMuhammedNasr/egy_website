import About from './Components/About';
import Conect from './Components/Conect';
import Offer from './Components/Offer';
import Partner from './Components/Partner';
import Project from './Components/Pojects';
import Service from './Components/Services';
import Slider from './Components/Slider';
import Testmon from './Components/Testmon';
import NavBar from './UI/nav';

function App() {
  return (
    <div className="App" style={{ height: '100vh', }}>
      <NavBar />
      <Slider />
      <br />
      <br />
      <br />
      <About />
      <br />
      <br />
      <br />
      <Offer style={{ backgroundColor: 'white' }} />
      <br />
      <br />
      <br />
      <Service />
      <br />
      <br />
      <br />
      <Project style={{ backgroundColor: 'white' }} />
      <br />
      <br />
      <br />
      <Testmon />
      <br />
      <br />
      <br />
      <Partner />
      <br />
      <br />
      <br />
      <Conect />

    </div>
  );
}

export default App;
