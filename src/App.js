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






import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from 'components/pages/Landing/landing';
import AdminSignup from 'components/pages/signup/Adminsignup';
import Driversignup from 'components/pages/signup/Driversignup';
import Travellersignup from 'components/pages/signup/Travellersignup';
import Login from 'components/pages/login/login';
import AdminDashboard from 'components/pages/Dashboard/AdminDashboard';
import Drivers from "components/pages/Drivers";
import Buses from "components/pages/Buses";
import Users from 'components/pages/Users';
import Addtrip from 'components/pages/Addtrip';
import Alltrips from "components/pages/Trips";
import AddDriver from 'components/pages/AddDriver';
import EditDriver from 'components/pages/editDriver';
import EditTrip from 'components/pages/editTrip';

// for user-type and authentication
import UserAuth from 'components/utilis/UserAuth';


import BookTrip from 'components/pages/BookTrip';
import ProtectedRoutes from 'components/utilis/ProtectedRoutes';
import { ToastContainer } from 'react-toastify';
import TravellerBookings from 'components/Traveller/TravellerBookings';
import UserBookingDetails from 'components/Traveller/UserBookingDetails';




const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/admin-signup" element={<AdminSignup />} />
          <Route path="/driver-signup" element={<Driversignup />} />
          <Route path="/traveller-signup" element={<Travellersignup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<ProtectedRoutes><UserAuth /></ProtectedRoutes>} />
          <Route path="/dashboard" element={<ProtectedRoutes><AdminDashboard /></ProtectedRoutes>} />
          <Route path="/drivers" element={<ProtectedRoutes><Drivers /></ProtectedRoutes>} />
          <Route path="/add-driver" element={<ProtectedRoutes><AddDriver /></ProtectedRoutes>} />
          <Route path="/edit-driver/:id" element={<ProtectedRoutes><EditDriver /></ProtectedRoutes>} />
          <Route path="/buses" element={<ProtectedRoutes><Buses /></ProtectedRoutes>} />
          <Route path="/trips-available" element={<ProtectedRoutes><Alltrips /></ProtectedRoutes>} />
          <Route path="/add-trip/:id" element={<ProtectedRoutes><Addtrip /></ProtectedRoutes>} />
          <Route path="/edit-trip/:id" element={<ProtectedRoutes><EditTrip /></ProtectedRoutes>} />
          <Route path="/users" element={<ProtectedRoutes><Users /></ProtectedRoutes>} />

          {/* Travellers routes */}
          <Route path="/book-trip/:id" element={<ProtectedRoutes><BookTrip /></ProtectedRoutes>} /> 
          <Route path="/my_bookings" element={<ProtectedRoutes><TravellerBookings /></ProtectedRoutes>} /> 
          <Route path="/my_bookings/:id" element={<ProtectedRoutes><UserBookingDetails /></ProtectedRoutes>} /> 
        </Routes>
      </BrowserRouter>
      <ToastContainer/>
    </>
  );
}

export default App;
