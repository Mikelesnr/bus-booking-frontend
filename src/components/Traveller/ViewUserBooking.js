import React, {useState, useEffect} from 'react'
import UserBooking from './UserBooking';



const baseURL = "http://127.0.0.1:8000";

function ViewUserBooking() {
    const [data, setData] = useState([]);
    let user = JSON.parse(localStorage.getItem('user-info')).user;

    const getUserBookings = async () => {
        const response = await fetch(`${baseURL}/booking/`);

        const data = await response.json();

        const user_booking = data.filter((item)=>
            user.first_name === item.client_name && user.last_name === item.client_surname
        )
        // console.log(user_booking)

        if (response.ok) {
            // console.log(user_booking);
            setData(user_booking);
        } else {
            console.log("Failed fetch");
        }
    };

    useEffect(() => {
        getUserBookings();
    }, []);

    return (
        <>
            <section style={{ backgroundColor: "#edeefa", height:"100vh" ,paddingTop: "40px"}}>
                <div style={{ backgroundColor: "#edeefa" }}>
                    <div className='text-center pt-5'>
                        <h2 style={{ fontWeight: 900 }}>My Bookings</h2>
                    </div>
                    {data.length > 0 && (
                        <>
                            {data.map((item) => (
                                <UserBooking bus_reg={item.bus_reg}
                                    id={item.id}
                                    ticket_id={item.ticket_id}
                                    key={item.id} />
                            ))}
                        </>
                    )}
                </div >
            </section>
        </>
    )
}

export default ViewUserBooking