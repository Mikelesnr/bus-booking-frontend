import React,{useState,useEffect} from 'react';
import { useSearchParams } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

function Trip() {

     const user= "driver"

     const [trip,setTrip]=useState([]);
     const [search]=useSearchParams();
     const reg = search.get('bus_reg');
     const time = search.get('trip_time');

    useEffect(() => {
    // POST request using fetch inside useEffect React hook
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 'bus_reg': reg ,'trip_time': time })
    };
    fetch('http://127.0.0.1:8000/booking/trip.json', requestOptions)
        .then(response => response.json())
        .then(data => setTrip(data));
    },[]);
    // trip[0].map((customer)=>
    // console.log(customer.Customer_name))
    console.log(trip[0])
        
    return(
        <div>
        <div className="container-sm themed-container text-center">
          <h2>Trip</h2>
          </div>
        <div>
        <Table className="mb">
            <thead>
                <tr className='bg-secondary'>
                      <th>Bus Reg </th>
                      <th className='border border-left'>customer </th>
                      <th className='border border-left'>ticket </th>
                      <th className='border border-left'>Date </th>
                      <th className='border border-left'>Time </th>
                      <th className='border border-left'>Departure </th>
                      <th className='border border-left'>Destination </th>
                      <th className='border border-left'>seats available</th>
                        </tr>
            </thead>
            <tbody>                
                     {trip.map((trip)=>
                     <>
                     <tr className='bg-info'>
                      <th>{trip.bus_reg}</th>
                      <th className='border border-left'>{trip.Customer_name} {trip.Customer_lastname}</th>
                      <th className='border border-left'>{trip.ticket_id}</th>
                      <th className='border border-left'>{trip.date}</th>
                      <th className='border border-left'>{trip.trip_time}</th>
                      <th className='border border-left'>{trip.depature}</th>
                      <th className='border border-left'>{trip.destination}</th>
                      <th className='border border-left'>{trip.seats}</th>
                        </tr>
                      </>
                     )}
                
            </tbody>
            </Table>
            </div>
            <div className="container-sm themed-container text-center">
              <span className='btn btn-danger flex'><Link to={ user === "driver"?"/driver":"/all_trips"}>Return</Link></span>
            </div>
            </div>

              )}

    export default Trip;