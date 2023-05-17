import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Trip from './Trip'
import TextField from '@mui/material/TextField';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import SearchIcon from '@mui/icons-material/Search';
import { MenuItem } from '@mui/material';
import Button from '@mui/material/Button';

const baseURL = "http://127.0.0.1:8000";

function ViewTrips() {
    const [data, setData] = useState([]);
    const [departure, setDeparture] = useState("");
    const [destination, setDestination] = useState("");

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

    // Getting unique departure values
    let uniquedest = data.map(item => (
        item.trip_depature
    ))
    let uniques = [...new Set(uniquedest)]
    const keyValueArrdes = uniques.map((value, index) => ({ key: index, value }));


    // Getting unique departure values
    let uniquedepa = data.map(item => (
        item.trip_destination
    ))
    let uniquep = [...new Set(uniquedepa)]
    const keyValueArrdep = uniquep.map((value, index) => ({ key: index, value }));

    async function Search() {
        try {
            const response = await fetch(`${baseURL}/booking/tripsavailable`);
            const data = await response.json();
            const filteredTrips = data.filter(item => item.trip_depature === departure
                && item.trip_destination === destination);
            setData(filteredTrips)
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <section style={{ backgroundColor: "#edeefa", height:"100vh" ,paddingTop: "40px"}}>
                <div style={{ backgroundColor: "#edeefa" }}>
                    <div className='text-center pt-5'>
                        <h2 style={{ fontWeight: 600 }}>BOOK YOUR TRIP</h2>
                    </div>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "row",
                            flexWrap: "wrap",
                        }}>

                        <Box px={2}>
                            <TextField
                                label="Departure"
                                size='small'
                                value={departure}
                                onChange={e => setDeparture(e.target.value)}
                                select
                            sx={{width: "120px"}}
                            >
                                {keyValueArrdes.map(item => (
                                    <MenuItem value={item.value} key={item.key}>
                                        {item.value}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Box>
                        <Box pt={1}>
                            <CompareArrowsIcon />
                        </Box>

                        <Box px={2}>
                            <TextField
                                label="Destination"
                                size='small'
                                value={destination}
                                onChange={e => setDestination(e.target.value)}
                                select
                            sx={{width: "120px"}}
                            >
                                {keyValueArrdep.map(item => (
                                    <MenuItem value={item.value} key={item.key}>
                                        {item.value}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Box>

                        <Box pt={0.5}>
                            <Button
                                size='small'
                                variant='contained'
                                startIcon={<SearchIcon />}
                                onClick={Search}>
                                search
                            </Button>
                        </Box>

                    </Box>


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
                </div >
            </section>
        </>
    )
}

export default ViewTrips