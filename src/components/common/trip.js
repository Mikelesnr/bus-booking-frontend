import React,{useState,useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import  axios  from 'axios'; 
import { Link } from 'react-router-dom';

function Trip() {

    const [trips,setTrips]=useState([]);

    useEffect(()=>{
        fetchData();
        },[]);


    const fetchData = async ()=>{
        const {data} = await axios.get("http://127.0.0.1:8000/booking/tripsavailable.json");
        setTrips(data);
    }
    return(
        <h1>trip</h1>
    )}

    export default Trip;