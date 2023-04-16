import './App.css';
import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Booking from './components/pages/Booking';
import Driver from 'components/pages/Driver';
import Trip from 'components/common/Trip';
import AddDriver from 'components/pages/AddDriver';
import Drivers from 'components/pages/ViewDrivers';
import AddBooking from 'components/pages/AddBooking';
import AddTrip from 'components/pages/AddTrip';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/bookings' element={<Booking />} />
          <Route path='/trip' element={<Trip />} />
          <Route path='/driver' element={<Driver />} />
          <Route path='/drivers' element={<Drivers />} />
          <Route path='/add_driver' element={<AddDriver />} />
          <Route path='/add_booking' element={<AddBooking />} />
          <Route path='/add_trip' element={<AddTrip />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
