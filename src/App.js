import './App.css';
import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Booking from './components/pages/Booking';
import Driver from 'components/pages/Driver';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/book' element={<Booking />} />
          <Route path='/driver' element={<Driver />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
