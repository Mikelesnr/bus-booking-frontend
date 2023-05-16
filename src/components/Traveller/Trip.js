import React from 'react'
import { Grid, Card, Box, CardContent, CardActions, Typography, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Trip = ({id, bus_reg, trip_depature, trip_destination, trip_date, trip_time, seats_available }) => {
    const navigate = useNavigate()
    return (
        <>
            <Grid container
                alignItems="center"
                justifyContent="center" spacing={1} p={3}>
                <Grid item xs={12} lg={6}>
                    <Card sx={{ maxWidth: "100%" }}>
                        <CardContent>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: "space-between",
                                    p: 1,
                                }}
                            >
                                <Typography gutterBottom variant="h6">
                                    {trip_depature} - {trip_destination}
                                </Typography>
                                <Typography gutterBottom>
                                    {bus_reg}
                                </Typography>
                            </Box>
                            <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: "space-between",
                                }}>
                                <Box>
                                    <Typography gutterBottom>
                                        Date: {trip_date}
                                    </Typography>
                                    <Typography gutterBottom>
                                        Time: {trip_time}
                                    </Typography>
                                    <Typography gutterBottom>
                                        Available Seats: {seats_available}
                                    </Typography>
                                </Box>
                                <CardActions>
                                    <Button variant='outlined' size="small" onClick={() => {
                                        navigate("/book-trip/" + id);
                                    }}>BOOK TRIP</Button>
                                </CardActions>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}

export default Trip