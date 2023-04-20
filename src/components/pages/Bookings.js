import React,{useState,useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import  axios  from 'axios';
import { Link } from 'react-router-dom';

function Bookings() {
    const [bookings,setBookings]=useState([]);

    useEffect(()=>{
        fetchData();
        },[]);


    const fetchData = async ()=>{
        const {data} = await axios.get("http://127.0.0.1:8000/booking/.json");
        setBookings(data);

    }
    
    
  
    return (
        <div>
          <div className="container-sm themed-container text-center">
          <h1>Bookings</h1>
          <h2>My Trips</h2>
          </div>
          <div className="container-sm themed-container text-center">
            <Table className="mb row d-flex justify-content-center">
            <thead className='hide'>
              {bookings.map((booking)=>
              <>
                <tr className='bg-info'>
                      <th>Client : {booking.client_name} {booking.client_surname}</th>
                      <th>Bus Reg : {booking.bus_reg}</th>
                      <th className=''>Date : {booking.trip_date}</th>
                      <th className=''>Time : {booking.trip_time}</th>
                      <th className=''>Departure : {booking.trip_depature}</th>
                      <th className=''>Destination : {booking.trip_destination}</th>
                      <th><span className='btn btn-secondary flex'><Link to={"/edit_booking/?id=" + booking.id + "&bus_reg=" + booking.bus_reg + 
                      "&trip_time=" + booking.trip_time + "&date=" + booking.trip_date + "&departure=" + booking.trip_depature
                      + "&destination=" + booking.trip_destination + "&ticket=" + booking.ticket_id + "&name=" + booking.client_name + "&surname=" 
                      + booking.client_surname}>edit</Link></span></th>
                  </tr>
        
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

export default Bookings;










