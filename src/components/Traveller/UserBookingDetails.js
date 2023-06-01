import React, { useEffect, useState } from 'react'
import { Grid, Card, Box, CardContent, Typography, Button } from '@mui/material'
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import DeleteIcon from '@mui/icons-material/Delete';
import { useParams, useNavigate } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';
import { PDFDownloadLink, Font, Page, View, Document, StyleSheet, Text } from '@react-pdf/renderer';
import { toast } from "react-toastify";
import TopNav from 'components/common/Appbar/appbar';

const baseURL = "http://127.0.0.1:8000";

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#d5dbe3',
    },
    body: {
        fontFamily: 'Ubuntu',
        fontSize: 12,
        padding: 10,
    },
    ticket: {
        flexDirection: 'row', 
        flexWrap:'wrap', 
        justifyContent: 'space-between',
        paddingTop:40
    },

    content: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginLeft: 15,
        marginRight: 25,
    },

    text: {
        margin: 5,
        fontFamily: 'Ubuntu',
    },
});

Font.register({
    family: 'Ubuntu',
    fonts: [
        {
            src: 'https://fonts.gstatic.com/s/questrial/v13/QdVUSTchPBm7nuUeVf7EuStkm20oJA.ttf',
        },
        {
            src: 'https://fonts.gstatic.com/s/questrial/v13/QdVUSTchPBm7nuUeVf7EuStkm20oJA.ttf',
            fontWeight: 'bold',
        },
        {
            src: 'https://fonts.gstatic.com/s/questrial/v13/QdVUSTchPBm7nuUeVf7EuStkm20oJA.ttf',
            fontWeight: 'normal',
            fontStyle: 'italic',
        },
    ],
});

const Ticket = ({ data }) => (
    <Document>
        <Page size="A6" style={styles.page}>
            <View style={styles.body}>
            <View style={styles.ticket}>
                    <Text style={{}}>Ticket ID:</Text>
                    <Text style={{color: 'red'}}>{data.ticket_id}</Text>
                </View>

                <Text style={{ textAlign: 'center', color:"purple", paddingTop:5 }}>
                    =======================================================
                </Text>

                <View style={styles.content}>
                    <Text style={styles.text}>First Name:</Text>
                    <Text style={styles.text}>{data.client_name}</Text>
                </View>

                <Text style={{ textAlign: 'center' }}>
                    --------------------------------------------------------
                </Text>

                <View style={styles.content}>
                    <Text style={styles.text}>Last Name:</Text>
                    <Text style={styles.text}>{data.client_surname}</Text>
                </View>

                <Text style={{ textAlign: 'center' }}>
                    --------------------------------------------------------
                </Text>

                <View style={styles.content}>
                    <Text style={styles.text}>Departure:</Text>
                    <Text style={styles.text}>{data.trip_depature}</Text>
                </View>

                <Text style={{ textAlign: 'center' }}>
                    --------------------------------------------------------
                </Text>

                <View style={styles.content}>
                    <Text style={styles.text}>Destination:</Text>
                    <Text style={styles.text}>{data.trip_destination}</Text>
                </View>

                <Text style={{ textAlign: 'center' }}>
                    --------------------------------------------------------
                </Text>

                <View style={styles.content}>
                    <Text style={styles.text}>Vehicle Reg:</Text>
                    <Text style={styles.text}>{data.bus_reg}</Text>
                </View>

                <Text style={{ textAlign: 'center' }}>
                    --------------------------------------------------------
                </Text>

                <View style={styles.content}>
                    <Text style={styles.text}>Trip Date:</Text>
                    <Text style={styles.text}>{data.trip_date}</Text>
                </View>

                <Text style={{ textAlign: 'center' }}>
                    --------------------------------------------------------
                </Text>

                <View style={styles.content}>
                    <Text style={styles.text}>Trip Time:</Text>
                    <Text style={styles.text}>{data.trip_time}</Text>
                </View>

                <Text style={{ textAlign: 'center', color:"purple", paddingTop:10 }}>
                    =======================================================
                </Text>

                <View style={{padding:20}}>
                <Text style={{ textAlign: 'center' }}>
                    Thank you for booking with Us
                </Text>
                </View>
            </View>
        </Page>

    </Document>
);



function UserBookingDetails() {
    const navigate = useNavigate()
    const { id } = useParams()
    const [data, setData] = useState([])
    const UserBookings = async () => {
        const response = await fetch(`${baseURL}/booking/booking/${id}`);

        const data = await response.json();

        if (response.ok) {
            // console.log(data);
            setData(data)
        } else {
            console.log("Failed fetch");
        }
    };

    useEffect(() => {
        UserBookings();
    }, []);

    const Deletebooking = async (id) => {
        const resp = await fetch(`${baseURL}/booking/booking/${id}`, {
            method: "DELETE",
        });

        if (resp.ok) {
            // console.log(resp.status, "Deleted");
            toast.success("Booking deleted", {
                position: toast.POSITION.TOP_CENTER,
            })
            navigate('/my_bookings')
        } else {
            // console.log("Failed delete driver");
            toast.error("Delete booking failed", {
                position: toast.POSITION.TOP_CENTER,
            })
        }

        UserBookings();
    };

    return (
        <>
            <TopNav />
            <section style={{ backgroundColor: "#edeefa", height: "100vh", paddingTop: "40px" }}>
                <div style={{ backgroundColor: "#edeefa" }}>
                    <div className='text-center pt-5'>
                        <h2 style={{ fontWeight: 800 }}>Ticket</h2>
                    </div>
                    <Grid container
                        alignItems="center"
                        justifyContent="center" spacing={1} p={2}>
                        <Grid item xs={12} lg={6}>
                            <Card sx={{ maxWidth: "100%" }}>
                                <CardContent>
                                    <Box sx={{
                                        display: {
                                            lg: "flex", justifyContent: "space-evenly",
                                            md: "flex", justifyContent: "space-evenly",
                                            xs: "unset"
                                        },
                                        padding: "15px"
                                    }}>
                                        <Typography gutterBottom>
                                            Ticket ID
                                        </Typography>

                                        <Typography sx={{ color: "red" }} gutterBottom>{data.ticket_id}</Typography>
                                    </Box>
                                    <Grid container>

                                        <Grid container sx={{
                                            display: "flex",
                                            justifyContent: 'space-between'
                                        }}>
                                            <Typography gutterBottom>
                                                First Name:
                                            </Typography>
                                            <Typography gutterBottom>
                                                {data.client_name}
                                            </Typography>

                                        </Grid>


                                        <Grid container sx={{
                                            display: "flex",
                                            justifyContent: 'space-between'
                                        }}>
                                            <Typography gutterBottom>
                                                Last Name:
                                            </Typography>
                                            <Typography gutterBottom>
                                                {data.client_surname}
                                            </Typography>

                                        </Grid>


                                        <Grid container sx={{
                                            display: "flex",
                                            justifyContent: 'space-between'
                                        }}>
                                            <Typography gutterBottom>
                                                Vehicle Reg:
                                            </Typography>
                                            <Typography gutterBottom>
                                                {data.bus_reg}
                                            </Typography>

                                        </Grid>

                                        <Grid container sx={{
                                            display: "flex",
                                            justifyContent: 'space-between'
                                        }}>
                                            <Typography gutterBottom>
                                                Date:
                                            </Typography>
                                            <Typography gutterBottom>
                                                {data.trip_date}
                                            </Typography>

                                        </Grid>

                                        <Grid container sx={{
                                            display: "flex",
                                            justifyContent: 'space-between'
                                        }}>
                                            <Typography gutterBottom>
                                                Time:
                                            </Typography>
                                            <Typography gutterBottom>
                                                {data.trip_time}
                                            </Typography>

                                        </Grid>

                                        <Grid container sx={{
                                            display: "flex",
                                            justifyContent: 'space-between'
                                        }}>
                                            <Typography gutterBottom>
                                                From (Departure):
                                            </Typography>
                                            <Typography gutterBottom>
                                                {data.trip_depature}
                                            </Typography>

                                        </Grid>

                                        <Grid container sx={{
                                            display: "flex",
                                            justifyContent: 'space-between'
                                        }}>
                                            <Typography gutterBottom>
                                                To (Destination):
                                            </Typography>
                                            <Typography gutterBottom>
                                                {data.trip_destination}
                                            </Typography>

                                        </Grid>

                                        <Grid container sx={{
                                            display: "flex",
                                            justifyContent: 'space-evenly',
                                            paddingTop: "20px"
                                        }}>
                                            <PDFDownloadLink document={<Ticket data={data} />} fileName={`${data.client_surname}_ticket.pdf`}>
                                                {({ loading }) =>
                                                    loading ? 'Loading ticket' : <Tooltip title='Download Ticket'>
                                                        <Button sx={{ borderRadius: 28 }} variant="contained" size='small' startIcon={<FileDownloadIcon />}>
                                                            Download
                                                        </Button>
                                                    </Tooltip>
                                                }
                                            </PDFDownloadLink>

                                            <Tooltip title='Delete Ticket'>
                                                <Button sx={{ borderRadius: 28 }} variant="contained" size='small' startIcon={<DeleteIcon />}
                                                    onClick={() => Deletebooking(data.id)}>
                                                    Delete
                                                </Button>
                                            </Tooltip>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </div>
            </section>
        </>
    )
}

export default UserBookingDetails