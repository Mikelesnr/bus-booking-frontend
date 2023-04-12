import './App.css';
import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Booking from './components/pages/Booking';

// import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/book' element={<Booking />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
