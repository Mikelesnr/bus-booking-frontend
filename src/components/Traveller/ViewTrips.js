import React, { useState, useEffect } from 'react'
import Trip from './Trip'

const baseURL = "http://127.0.0.1:8000";

function ViewTrips() {
    const [data, setData] = useState([]);

    const getTrips = async () => {
        const response = await fetch(`${baseURL}/booking/tripsavailable`);

        const data = await response.json();

        if (response.ok) {
            // console.log(data);
            setData(data);
        } else {
            console.log("Failed fetch");
        }
    };

    useEffect(() => {
        getTrips();
    }, []);

    function handleSearch(e) {
        const newData = data.filter(item => {
            return item.trip_depature.includes(e.target.value)
        })
        setData(newData)
    }

    return (
        <>
            <div style={{ backgroundColor: "#edeefa" }}>
                <div className='text-center pt-5'>
                    <h2 style={{ fontWeight: 600 }}>BOOK YOUR TRIP</h2>
                </div>
                <div className="text-center pt-3">
                    <input
                        type="text"
                        placeholder="search by Departure"
                        onChange={handleSearch}
                    />
                </div>
                {data.length > 0 && (
                    <>
                        {data.map((item) => (
                            <Trip bus_reg={item.bus_reg}
                                id={item.id}
                                trip_date={item.trip_date}
                                trip_time={item.trip_time}
                                trip_depature={item.trip_depature}
                                trip_destination={item.trip_destination}
                                seats_available={item.seats_available}
                                key={item.id} />
                        ))}
                    </>
                )}
            </div>
        </>
    )
}

export default ViewTrips