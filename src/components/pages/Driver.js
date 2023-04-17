import React,{useState,useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import  axios  from 'axios';
import Trip from 'components/common/Trip';
//import { Link } from 'react-router-dom';

function Driver() {
    const bus_reg = "ACD 654321"
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
          <h1>Admin</h1>
          <h2>My Trips</h2>
          <div className="container-sm themed-container text-center">
            <Table className="mb row d-flex justify-content-center">
            <thead className='hide'>
              {trips.map((trip)=>
              <>{bus_reg === trip.bus_reg?<>
            
              <div className="dropdown">
                <button className="btn btn-info dropdown-toggle bg-secondary" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <tr className='bg-info'>
                      <th>Bus Reg : {trip.bus_reg}</th>
                      <th className=''>Date : {trip.trip_date}</th>
                      <th className=''>Time : {trip.trip_time}</th>
                      <th className=''>Departure : {trip.trip_depature}</th>
                      <th className=''>Destination : {trip.trip_destination}</th>
                      <th className='border border-left'>seats : {trip.seats_available}</th>
                  </tr>
                </button>
                <ul className="dropdown-menu bg-info">
                  <li><Trip/></li>
                  
                </ul>
              </div>
            </>
            
            :<></>}
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

export default Driver;