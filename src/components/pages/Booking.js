import React,{useState,useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import  axios  from 'axios'; 
import { Link } from 'react-router-dom';

function Booking() {

    const [trips,setTrips]=useState([]);

    useEffect(()=>{
        fetchData();
        },[]);


    const fetchData = async ()=>{
        const {data} = await axios.get("http://127.0.0.1:8000/booking/tripsavailable.json");
        setTrips(data);

  }
    return (
        <div>
          <h1>booking page</h1>
          <h2>Trips Available</h2>
          <div className="container-sm themed-container text-center">
            <Table className="mb">
            <thead className='hide'>
              {trips.map((trip)=>
              <>
             <div class="dropdown">
                <button className="btn btn-info dropdown-toggle bg-dark" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <tr className='bg-info'>
                      <th>Bus Reg : {trip.bus_reg}</th>
                      <th className=''>Date : {trip.trip_date}</th>
                      <th className=''>Time : {trip.trip_time}</th>
                      <th className=''>Departure : {trip.trip_depature}</th>
                      <th className=''>Destination : {trip.trip_destination}</th>
                      <th className='border border-left'>seats : {trip.seats_available}</th>
                  </tr>
                </button>
                <ul class="dropdown-menu bg-info">
                  <li>Action</li>
                  <li>Another action</li>
                  <li>Something else here</li>
                </ul>
              </div>
              <br></br>
            </>
            )
            }
            </thead>
            </Table>
            </div>
         </div>
    )
}

export default Booking;