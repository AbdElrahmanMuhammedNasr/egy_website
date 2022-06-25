import About from './Components/About';
import Conect from './Components/Conect';
import MoreOffer from './Components/MoreOffer';
import Offer from './Components/Offer';
import Partner from './Components/Partner';
import Project from './Components/Pojects';
import Service from './Components/Services';
import Slider from './Components/Slider';
import Testmon from './Components/Testmon';
import NavBar from './UI/nav';
import { Navigate, Route, Routes } from 'react-router-dom';
import MoreProject from './Components/MoreProject';
import React from 'react';

import lodimg from '../src/assets/loading.gif'

function App() {

  const [loading, setLoading] = React.useState(false)

  setTimeout(function () {
    setLoading(true);
  }, 5000);
  return (
    <div className="App" style={{ height: '100vh', }}>
      {
        loading == false
          ? <div className="text-center">
            <img src={lodimg} />
          </div>

          : <>
            <NavBar />

            <Routes>

              <Route path="/" element={<Navigate to="/main" replace />} />

              <Route path='/main' element={

                <div >
                  <Slider />
                  <About />
                  <Offer style={{ backgroundColor: 'white' }} />
                  <Service />
                  <Project style={{ backgroundColor: 'white' }} />
                  <Testmon />
                  <Partner />
                </div>


              } />


              <Route path='/more-offer' element={<MoreOffer />} />

              <Route path='/more-project' element={<MoreProject />} />

            </Routes>




            <Conect />
          </>
      }



    </div>
  );
}

export default App;
