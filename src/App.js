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
import Login from 'components/pages/login/login';
import Signup from "components/pages/signup/signup";
import Landing from 'components/pages/Landing/landing';
import HomePage from 'components/pages/Home/home';
import Drivertable from 'components/pages/Drivertable';
import AddDriverForm from 'components/pages/AddDriverform';
import AddTripForm from 'components/pages/AddTripform';
import Bustable from 'components/pages/Bustable';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/buses' element={<Bustable/>} />
          <Route path='/addD' element={<AddDriverForm />} />
          <Route path='/addT' element={<AddTripForm />} />
          <Route path='/dr' element={<Drivertable />} />
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

        </Routes>
      </BrowserRouter>
    </div>
  );
}



export default App;

