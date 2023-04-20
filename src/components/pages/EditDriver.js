import React,{useState} from 'react';
import { useSearchParams } from 'react-router-dom';

function EditDriver() {

    const [search]=useSearchParams();
    const id = search.get('id');
    const driver_name = search.get('name');
    const driver_surname = search.get('surname');
    const reg = search.get('bus_reg');
    const type_of_bus = search.get('bus_type');
    const no_seats = search.get('seats');
    const bus_route = search.get('route');

    const [name,setName] = useState("");
    const [surname,setSurname] = useState("");
    const [busreg,setBusreg] = useState("");
    const [seats,setSeats] = useState("");
    const [bustype,setBustype] = useState("");
    const [route,setRoute] = useState("");
    
    async function add(){
        let item = {'name':name?name:driver_name,'surname':surname?surname:driver_surname,
                    'bus_reg':busreg?busreg:reg,'no_of_seats':seats?seats:no_seats,
                    'bus_type':bustype?bustype:type_of_bus,'route':route?route:bus_route};
        // eslint-disable-next-line no-unused-vars
        let result = await fetch(`http://127.0.0.1:8000/driver/${id}`,{
            method:"PUT",
            body:JSON.stringify(item),
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"}
        });
    }

    async function delete_entry(){
        let my_result = await fetch(`http://127.0.0.1:8000/driver/${id}`,{
            method:"delete",
            body:null,
        })
        console.log(my_result)
    }

    return (
        <>
        <div className="col-sm-6 offset-sm-3 pdng-top">
            <h1>Edit Driver</h1>
            <input type="text" className="form-control" onChange={(e)=>setName(e.target.value)} defaultValue={driver_name}></input><br/>
            <input type="text" className="form-control" onChange={(e)=>setSurname(e.target.value)} defaultValue={driver_surname}></input><br/>
            <input type="text" className="form-control" onChange={(e)=>setBusreg(e.target.value)} defaultValue={reg}></input><br/>
            <input type="text" className="form-control" onChange={(e)=>setSeats(e.target.value)} defaultValue={no_seats}></input><br/>
            <input type="text" className="form-control" onChange={(e)=>setBustype(e.target.value)} defaultValue={type_of_bus}></input><br/>
            <input type="text" className="form-control" onChange={(e)=>setRoute(e.target.value)} defaultValue={bus_route}></input><br/>
            <thead>
                <tr>
                    <th><button className="btn btn-primary mb" onClick={add}>Edit Driver</button><br/></th>
                    <th><button className="btn btn-danger mb ms-5" onClick={delete_entry}>delete</button><br/></th>
                </tr>
            </thead>
        </div>
        </>
    )
}

export default EditDriver;
