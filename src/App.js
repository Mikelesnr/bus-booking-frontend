// import './App.css';
// import React from 'react';
// import {BrowserRouter,Routes,Route} from 'react-router-dom';
// import Booking from './components/pages/Booking';
// import Bookings from 'components/pages/Bookings';
// // import Driver from 'components/pages/Driver';
// // import Trip from 'components/pages/Trip';
// import AddDriver from 'components/pages/AddDriver';
// // import Drivers from 'components/pages/ViewDrivers';
// import AddBooking from 'components/pages/AddBooking';
// // import AddTrip from 'components/pages/AddTrip';
// import Login from 'components/pages/login/login';
// import Signup from "components/pages/signup/signup";
// // import EditTrip from 'components/pages/EditTrip';
// import EditBooking from 'components/pages/EditBooking';
// // import EditDriver from 'components/pages/EditDriver';
// import Landing from 'components/pages/Landing/landing';
// // import AllTrips from 'components/pages/AllTrips';
// import HomePage from 'components/pages/Home/home';
// import Drivertable from 'components/Tables/Drivertable';
// import AddDriverForm from 'components/pages/AddDriverform';
// import AddTripForm from 'components/pages/AddTripform';
// import Bustable from 'components/Tables/Bustable';


// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Routes>
//           <Route path='/book' element={<Booking />} />
//           <Route path='/bookings' element={<Bookings />} />
//           <Route path='/' element={<HomePage />} />
//           <Route path='/buses' element={<Bustable/>} />
//           <Route path='/addD' element={<AddDriverForm />} />
//           <Route path='/addT' element={<AddTripForm />} />
//           <Route path='/dr' element={<Drivertable />} />
//           <Route path='/bookings' element={<Booking />} />
//           {/* <Route path='/trip' element={<Trip />} /> */}
//           {/* <Route path='/driver' element={<Driver />} /> */}
//           {/* <Route path='/drivers' element={<Drivers />} /> */}
//           <Route path='/add_driver' element={<AddDriver />} />
//           <Route path='/add_booking' element={<AddBooking />} />
//           {/* <Route path='/add_trip' element={<AddTrip />} /> */}
//           <Route path='/login' element={<Login/>} />
//           <Route path='/home' element={<Landing/>} />
//           <Route path='/signup' element={<Signup/>} />
//           {/* <Route path='/edit_trip' element={<EditTrip/>} /> */}
//           <Route path='/edit_booking' element={<EditBooking/>} />
//           {/* <Route path='/edit_driver' element={<EditDriver/>} /> */}
//           {/* <Route path='/all_trips' element={<AllTrips/>} /> */}
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }
// export default App;






import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from 'components/pages/Landing/landing';
import AdminSignup from 'components/pages/signup/Adminsignup';
import Driversignup from 'components/pages/signup/Driversignup';
import Travellersignup from 'components/pages/signup/Travellersignup';
import Login from 'components/pages/login/login';
import HomePage from "components/pages/Home/home";
import Drivers from "components/pages/Drivers";
import Buses from "components/pages/Buses";
import Users from 'components/pages/Users';
import Addtrip from 'components/pages/Addtrip';
import Alltrips from "components/pages/Trips";
import AddDriver from 'components/pages/AddDriver';
import EditDriver from 'components/pages/editDriver';
import EditTrip from 'components/pages/editTrip';


import TravellerHome from "components/Traveller/dashboard";
import BookTrip from 'components/pages/BookTrip';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="/home" element={<Landing/>} />
          <Route path="/admin-signup" element={<AdminSignup/>} />
          <Route path="/driver-signup" element={<Driversignup/>} />
          <Route path="/traveller-signup" element={<Travellersignup/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/dashboard" element={<HomePage />} />
          <Route path="/drivers" element={<Drivers />} />
          <Route path="/add-driver" element={<AddDriver />} />
          <Route path="/edit-driver/:id" element={<EditDriver />} />
          <Route path="/buses" element={<Buses />} />
          <Route path="/trips-available" element={<Alltrips />} />
          <Route path="/add-trip/:id" element={<Addtrip />} />
          <Route path="/edit-trip/:id" element={<EditTrip />} />
          <Route path="/users" element={<Users />} />

          {/* Travellers routes */}
          <Route path="/" element={<TravellerHome />} />
          <Route path="/book-trip/:id" element={<BookTrip />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
