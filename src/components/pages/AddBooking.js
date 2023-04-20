import React,{useState} from 'react';
import { useSearchParams } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import axios from 'axios';

function AddBooking() {

    const [search]=useSearchParams();
    const reg = search.get('bus_reg');
    const bus_time = search.get('trip_time');
    const bus_date = search.get('date');
    const bus_departure = search.get('departure');
    const bus_destination = search.get('destination');

    const [name,setName] = useState("");
    const [surname,setSurname] = useState("");
    const [busreg,setBusreg] = useState("");
    const [time,setTime] = useState("");
    const [date,setDate] = useState("");
    const [departure,setDeparture] = useState("");
    const [destination,setDestination] = useState("");


    async function add(){

        const formData = new FormData();
        formData.append("client_name",[name])
        formData.append("client_surname",[surname])
        formData.append("bus_reg",[busreg])
        formData.append("trip_time",[time])
        formData.append("trip_date",[date])
        formData.append("trip_depature",[departure])
        formData.append("trip_destination",[destination])
        
        var object = {};
        formData.forEach(function(value, key){
            object[key] = value;
        });
        let json = JSON.stringify(object);

        // eslint-disable-next-line no-unused-vars
        let result = await fetch("http://127.0.0.1:8000/booking",{
            method:"POST",
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',},
            body:json,
        }).then(response => response.json())
        .then(data => {
            console.log(data);
        })
    }
    

    return (
        <>
        <div className="col-sm-6 offset-sm-3 pdng-top">
            <h1>Add Booking</h1>
            <input type="text" className="form-control" onChange={(e)=>setName(e.target.value)} placeholder="Name"></input><br/>
            <input type="text" className="form-control" onChange={(e)=>setSurname(e.target.value)} placeholder="Surname"></input><br/>
            <input type="text" className="form-control" onChange={(e)=>setBusreg(e.target.value)} defaultValue={reg}></input><br/>
            <input type="text" className="form-control" onChange={(e)=>setTime(e.target.value)} defaultValue={bus_time}></input><br/>
            <input type="text" className="form-control" onChange={(e)=>setDate(e.target.value)} defaultValue={bus_date}></input><br/>
            <input type="text" className="form-control" onChange={(e)=>setDeparture(e.target.value)} defaultValue={bus_departure}></input><br/>
            <input type="text" className="form-control" onChange={(e)=>setDestination(e.target.value)} defaultValue={bus_destination}></input><br/>
            <><button className="btn btn-primary mb" onClick={add}>Book</button><br/></>
        </div>
        </>
    )
}

export default AddBooking;
