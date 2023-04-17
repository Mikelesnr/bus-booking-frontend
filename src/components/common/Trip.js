import React,{useState,useEffect} from 'react';
import Table from 'react-bootstrap/Table';

function Trip() {

     const [trip,setTrip]=useState([]);

    useEffect(() => {
    // POST request using fetch inside useEffect React hook
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 'bus_reg': 'ACD 654321','trip_time':'1pm' })
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
        <h1>trip</h1>
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
            </div>

              )}

    export default Trip;