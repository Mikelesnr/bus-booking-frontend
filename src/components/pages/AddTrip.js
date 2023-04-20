import React,{useState} from 'react';
import Header from 'components/common/header/header';
import Footer from 'components/common/footer/footer';
import { useSearchParams } from 'react-router-dom';

function AddTrip() {

    const [search]=useSearchParams();
    const reg = search.get('bus_reg');
    const route = search.get('route')

    const [busreg,setBusreg] = useState("");
    const [date,setDate] = useState("");
    const [departure,setDeparture] = useState("");
    const [destination,setDestination] = useState("");
    const [time,setTime] = useState("");
    
    async function add(){
        let item = {'bus_reg':reg,'trip_time':time,'trip_date':date,
                    'trip_depature':departure,'trip_destination':destination};
        // eslint-disable-next-line no-unused-vars
        let result = await fetch("http://127.0.0.1:8000/booking/tripsavailable",{
            method:"POST",
            body:JSON.stringify(item),
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"}
        });
    }

    return (
        <>
        <Header/>
        <div className="col-sm-6 offset-sm-3 pdng-top">
            <h1>Add Trip</h1>
            <h2>Bus route: {route}</h2>
            <input type="text" className="form-control" onChange={(e)=>setBusreg(e.target.value)} defaultValue={reg}></input><br/>
            <input type="text" className="form-control" onChange={(e)=>setTime(e.target.value)} placeholder="Time"></input><br/>
            <input type="text" className="form-control" onChange={(e)=>setDate(e.target.value)} placeholder="Date"></input><br/>
            <input type="text" className="form-control" onChange={(e)=>setDeparture(e.target.value)} placeholder="Departure"></input><br/>
            <input type="text" className="form-control" onChange={(e)=>setDestination(e.target.value)} placeholder="Destination"></input><br/>
            <><button className="btn btn-secondary mb" onClick={add}>Add Trip</button><br/></>
        </div>
        <Footer/>
        </>
    )
}

export default AddTrip;
