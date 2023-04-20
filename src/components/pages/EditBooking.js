import React,{useState} from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from 'components/common/header/header';
import Footer from 'components/common/footer/footer';

function EditBooking() {

    const [search]=useSearchParams();
    const id = search.get('id');
    const client_name = search.get('name');
    const client_surname = search.get('surname');
    const reg = search.get('bus_reg');
    const my_ticket = search.get('ticket');
    const bus_time = search.get('trip_time');
    const bus_date = search.get('date');
    const bus_departure = search.get('departure');
    const bus_destination = search.get('destination')

    const [name,setName] = useState("");
    const [surname,setSurname] = useState("");
    const [busreg,setBusreg] = useState("");
    const [ticket,setTicket] = useState("");
    const [time,setTime] = useState("");
    const [date,setDate] = useState("");
    const [departure,setDeparture] = useState("");
    const [destination,setDestination] = useState("");

    async function add(){

        const formData = new FormData();
        formData.append("client_name",[name?name:client_name])
        formData.append("client_surname",[surname?surname:client_surname])
        formData.append("bus_reg",[reg])
        formData.append("ticket_id",[my_ticket])
        formData.append("trip_time",[bus_time])
        formData.append("trip_date",[bus_date])
        formData.append("trip_depature",[bus_departure])
        formData.append("trip_destination",[bus_destination])
        
        var object = {};
        formData.forEach(function(value, key){
            object[key] = value;
        });
        let json = JSON.stringify(object);

        // eslint-disable-next-line no-unused-vars
        let result = await fetch("http://127.0.0.1:8000/booking/booking/"+id,{
            method:"PUT",
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',},
            body:json,
        }).then(response => response.json())
        .then(data => {
            console.log(data);
        })

    }

    async function delete_entry(){
        let my_result = await fetch(`http://127.0.0.1:8000/booking/booking/${id}`,{
            method:"delete",
            body:null,
        })
        console.log(my_result)
    }

    return (
        <>
        <Header/>
        <div className="col-sm-6 offset-sm-3 pdng-top">
            <h1>Edit Booking</h1>
            <input type="text" className="form-control" onChange={(e)=>setName(e.target.value)} defaultValue={client_name}></input><br/>
            <input type="text" className="form-control" onChange={(e)=>setSurname(e.target.value)} defaultValue={client_surname}></input><br/>
            <input type="text" className="form-control" onChange={(e)=>setBusreg(e.target.value)} defaultValue={reg}></input><br/>
            <input type="text" className="form-control" onChange={(e)=>setTime(e.target.value)} defaultValue={bus_time}></input><br/>
            <input type="text" className="form-control" onChange={(e)=>setDate(e.target.value)} defaultValue={bus_date}></input><br/>
            <input type="text" className="form-control" onChange={(e)=>setTicket(e.target.value)} defaultValue={my_ticket}></input><br/>
            <input type="text" className="form-control" onChange={(e)=>setDeparture(e.target.value)} defaultValue={bus_departure}></input><br/>
            <input type="text" className="form-control" onChange={(e)=>setDestination(e.target.value)} defaultValue={bus_destination}></input><br/>
            <thead>
                <tr>
                    <th><button className="btn btn-primary mb" onClick={add}>Edit Booking</button><br/></th>
                    <th><button className="btn btn-danger mb ms-5" onClick={delete_entry}>delete</button><br/></th>
                </tr>
            </thead>
        </div>
        <Footer/>
        </>
    )
}

export default EditBooking;
