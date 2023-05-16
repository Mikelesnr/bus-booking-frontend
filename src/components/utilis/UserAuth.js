import axios from 'axios';
import TravellerHome from 'components/Traveller/dashboard';
import AdminDashboard from 'components/pages/Dashboard/AdminDashboard';
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const baseURL = "http://127.0.0.1:8000";

function UserAuth() {
    const navigate = useNavigate();
    const [usertype, setUsertype] = useState("")
    let user = JSON.parse(localStorage.getItem('user-info'));


    useEffect(() =>{
        axios.get(`${baseURL}/api/profile/`,{
            headers: { Authorization: `Token ${user.token}`}
        })
        .then(res =>{
            if (res) {
                // console.log(res.data.user["user-type"])
                setUsertype(res.data.user["user-type"])
            }
            else {
                navigate('/login')
                // console.log("Failed")
            }
        })
        .catch(err => console.log(err))
    }, [])


  return (
    <>
    {usertype === "Admin" && <AdminDashboard />}
    {usertype === "Driver" && <h2>Welcome Driver</h2>}
    {usertype === "Traveller" && <TravellerHome />}
    </>
  )
}

export default UserAuth