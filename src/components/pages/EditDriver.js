import React,{useState} from 'react';

function EditDriver() {

    const [name,setName] = useState("");
    const [surname,setSurname] = useState("");
    const [busreg,setBusreg] = useState("");
    const [seats,setSeats] = useState("");
    const [bustype,setBustype] = useState("");
    const [route,setRoute] = useState("");
    
    async function add(){
        let item = {'name':name,'surname':surname,'bus_reg':busreg,'no_of_seats':seats,
                    'bus_type':bustype,'route':route};
        // eslint-disable-next-line no-unused-vars
        let result = await fetch("http://127.0.0.1:8000/driver/",{
            method:"POST",
            body:JSON.stringify(item),
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"}
        });
    }

    return (
        <>
        <div className="col-sm-6 offset-sm-3 pdng-top">
            <h1>Edit Driver</h1>
            <input type="text" className="form-control" onChange={(e)=>setName(e.target.value)} placeholder="Name"></input><br/>
            <input type="text" className="form-control" onChange={(e)=>setSurname(e.target.value)} placeholder="Surname"></input><br/>
            <input type="text" className="form-control" onChange={(e)=>setBusreg(e.target.value)} placeholder="Bus Reg"></input><br/>
            <input type="text" className="form-control" onChange={(e)=>setSeats(e.target.value)} placeholder="Capasity"></input><br/>
            <input type="text" className="form-control" onChange={(e)=>setBustype(e.target.value)} placeholder="Bus Type"></input><br/>
            <input type="text" className="form-control" onChange={(e)=>setRoute(e.target.value)} placeholder="Route"></input><br/>
            <><button className="btn btn-secondary mb" onClick={add}>Add Bus</button><br/></>
        </div>
        </>
    )
}

export default EditDriver;
