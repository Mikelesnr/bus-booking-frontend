import './App.css';
import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Booking from './components/pages/Booking';
import Driver from 'components/pages/Driver';
import Trip from 'components/pages/Trip';
import AddDriver from 'components/pages/AddDriver';
import Drivers from 'components/pages/ViewDrivers';
import AddBooking from 'components/pages/AddBooking';
import AddTrip from 'components/pages/AddTrip';
import Login from 'components/pages/login/login';
import Signup from "components/pages/signup/signup";
import EditTrip from 'components/pages/EditTrip';
import EditBooking from 'components/pages/EditBooking';
import EditDriver from 'components/pages/EditDriver';
import Landing from 'components/pages/Landing/landing';
import AllTrips from 'components/pages/AllTrips';

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
          <Route path='/login' element={<Login/>} />
          <Route path='/home' element={<Landing/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/edit_trip' element={<EditTrip/>} />
          <Route path='/edit_booking' element={<EditBooking/>} />
          <Route path='/edit_driver' element={<EditDriver/>} />
          <Route path='/all_trips' element={<AllTrips/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}



export default App;

