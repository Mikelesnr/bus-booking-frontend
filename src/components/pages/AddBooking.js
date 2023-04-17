import React,{useState} from 'react';

function AddBooking() {

    const [name,setName] = useState("");
    const [surname,setSurname] = useState("");
    const [busreg,setBusreg] = useState("");
    const [time,setTime] = useState("");
    const [date,setDate] = useState("");
    const [departure,setDeparture] = useState("");
    const [destination,setDestination] = useState("");

    async function add(){
        let item = {
        'client_name': name,
        'client_surname': surname,
        'bus_reg': busreg,
        'trip_time': time,
        'trip_date': date,
        'trip_depature': departure,
        'trip_destination': destination
    };
        // eslint-disable-next-line no-unused-vars
        let result = await fetch("http://127.0.0.1:8000/booking/",{
            method:"POST",
            body:JSON.stringify(item),
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"}
        });
        console.log(result.json());
    }

    return (
        <>
        <div className="col-sm-6 offset-sm-3 pdng-top">
            <h1>Add Booking</h1>
            <input type="text" className="form-control" onChange={(e)=>setName(e.target.value)} placeholder="Name"></input><br/>
            <input type="text" className="form-control" onChange={(e)=>setSurname(e.target.value)} placeholder="Surname"></input><br/>
            <input type="text" className="form-control" onChange={(e)=>setBusreg(e.target.value)} placeholder="Bus Reg"></input><br/>
            <input type="text" className="form-control" onChange={(e)=>setTime(e.target.value)} placeholder="Trip Time"></input><br/>
            <input type="text" className="form-control" onChange={(e)=>setDate(e.target.value)} placeholder="Bus Date"></input><br/>
            <input type="text" className="form-control" onChange={(e)=>setDeparture(e.target.value)} placeholder="Trip Departure"></input><br/>
            <input type="text" className="form-control" onChange={(e)=>setDestination(e.target.value)} placeholder="Trip Destination"></input><br/>
            <><button className="btn btn-primary mb" onClick={add}>Book</button><br/></>
        </div>
        </>
    )
}

export default AddBooking;
