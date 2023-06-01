import React from 'react'
import { Grid, Card, Box, CardContent, CardActions, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const UserBooking = ({ id, ticket_id }) => {
    const navigate = useNavigate();
    return (
        <>
            <Grid container
                alignItems="center"
                justifyContent="center" spacing={1} p={1}>
                <Grid item xs={12} lg={6}>
                    <Card sx={{ maxWidth: "100%" }}>
                        <CardContent>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: "space-between",
                            }}>
                                <Box>
                                    <Typography gutterBottom>
                                        Booking: {ticket_id}
                                    </Typography>
                                </Box>
                                <CardActions>
                                    <Button color='secondary' variant='outlined' size="small" onClick={() => {
                                        navigate("/my_bookings/" + id);
                                    }}>DETAILS</Button>
                                </CardActions>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}

export default UserBooking