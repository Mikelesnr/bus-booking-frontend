import React,{useState,useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import  axios  from 'axios'; 
import { Link } from 'react-router-dom';

function Drivers() {

    const [drivers,setDrivers]=useState([]);

    useEffect(()=>{
        fetchData();
        },[]);


    const fetchData = async ()=>{
        const {data} = await axios.get("http://127.0.0.1:8000/driver");
        setDrivers(data);

  }
  console.log(drivers)
    return (
        <div>
          <h2>All Drivers</h2>
          <div className="container-sm themed-container text-center">
            <Table className="mb">
                <thead>
                    <tr className='bg-info'>
                      <th>Name</th>
                      <th className='border border-left'>Surname</th>
                      <th className='border border-left'>Bus Reg</th>
                      <th className='border border-left'>Seats</th>
                      <th className='border border-left'>Bus Type</th>
                      <th className='border border-left'>Route</th>
                      <th className='border border-left'>Edit</th>
                      <th className='border border-left'>Create Trip</th>
                </tr>
                </thead>
            <tbody className='hide'>
              {drivers.map((driver)=>
              <>
                <tr className='bg-info'>
                      <th>{driver.name}</th>
                      <th className='border border-left'>{driver.surname}</th>
                      <th className='border border-left'>{driver.bus_reg}</th>
                      <th className='border border-left'>{driver.no_of_seats}</th>
                      <th className='border border-left'>{driver.bus_type}</th>
                      <th className='border border-left'>{driver.route}</th>
                      <th className='border border-left'><span className='btn btn-update flex'><Link to={"/edit_driver/?bus_reg=" + driver.bus_reg + 
                      "&name=" + driver.name + "&surname=" + driver.surname + "&seats=" + driver.no_of_seats + "&id=" + driver.id
                      + "&bus_type=" + driver.bus_type + "&route=" + driver.route }>Edit</Link></span></th>
                      <th className='border border-left'><span className='btn btn-update flex'><Link to={"/add_trip/?bus_reg=" + driver.bus_reg + 
                      "&route=" + driver.route }>Add Trip</Link></span></th>
                </tr>
            </>
            )
            }
            </tbody>
            </Table>
            </div>
         </div>
    )
}

export default Drivers;