import React,{useState,useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import  axios  from 'axios';
import { Link } from 'react-router-dom';

function AllTrips() {
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
          <div className="container-sm themed-container text-center">
          <h1>Trips</h1>
          </div>
          <div className="container-sm themed-container text-center">
            <Table className="mb row d-flex justify-content-center">
            <thead className='hide'>
              {trips.map((trip)=>
              <>
                <tr className='bg-info'>
                      <th>Bus Reg : {trip.bus_reg}</th>
                      <th className=''>Date : {trip.trip_date}</th>
                      <th className=''>Time : {trip.trip_time}</th>
                      <th className=''>Departure : {trip.trip_depature}</th>
                      <th className=''>Destination : {trip.trip_destination}</th>
                      <th className='border border-left'>seats : {trip.seats_available}</th>
                      <th><span className='btn btn-update flex'><Link to={"/trip/?bus_reg=" + trip.bus_reg + "&trip_time=" + trip.trip_time}>view</Link></span></th>
                  </tr>
            <br></br>
            </>
            )}
            
            </thead>
            </Table>
            </div>
         </div>
    )
}

export default AllTrips;