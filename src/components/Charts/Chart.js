import React, { useEffect, useState } from 'react'
import Chart from "react-apexcharts";


const baseURL = "http://localhost:8000";

function DataChart() {


    const [chartData, setChartData] = useState({
        options: {},
        series: [],
    });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            // Fetch data from API endpoints
            const res1 = await fetch(`${baseURL}/booking/busbookcount`);
            const data1 = await res1.json();

            const res2 = await fetch(`${baseURL}/booking/bustripcount`);
            const data2 = await res2.json();

            // Process the fetched data and update chartData state
            const updatedData = processData(data1, data2);
            setChartData(updatedData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const processData = (data1, data2) => {
        const processedData = {
            options: {
                chart: {
                    id: "basic-bar",
                },
                title: {
                    text: "No of trips Vs No of bookings",
                },
                xaxis: {
                    categories: data2.map((item)=> item.bus_reg)
                }
            },
            series: [
                {
                    name: 'Bookings',
                    data: data1.map((item) => item.total_bookings),
                },
                {
                    name: 'Trips',
                    data: data2.map((item) => item.total_trips),
                },
            ],
        };
        return processedData;
        
    };



    return (
        <div>
            <Chart
                options={chartData.options}
                series={chartData.series}
                type="line"
                width="500"
            />
        </div>
    )
}

export default DataChart