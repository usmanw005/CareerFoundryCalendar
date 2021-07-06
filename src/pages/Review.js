import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom'
import format from 'date-fns/format';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Container from '../components/Container';
import EventAvailableOutlinedIcon from '@material-ui/icons/EventAvailableOutlined';
import AccessTimeOutlinedIcon from '@material-ui/icons/AccessTimeOutlined';
import { Button } from '@material-ui/core';

export default function ConfirmationPage() {
    let location = useLocation();
    let history = useHistory();
    const [detail, setDetail] = useState(null);

    useEffect(() => {
        setDetail(location.state.confirmation);
    }, [])

    return (detail &&
        (
            <>
                <Container mentorName={detail.mentorName}>
                    <Box sx={{ px: 3 }}>
                        <Typography
                            sx={{ mb: 1 }}
                            variant="h6">
                            Your booking has been confirmed!
                        </Typography>
                        <Grid container>
                            <Grid item>
                                <EventAvailableOutlinedIcon fontSize="medium" />
                            </Grid>
                            <Grid item>
                                <Typography sx={{ ml: 2 }}>{format(detail.selectedDate, "dd/MMM/yyyy")}</Typography>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item>
                                <AccessTimeOutlinedIcon fontSize="medium" />
                            </Grid>
                            <Grid item>
                                <Typography sx={{ ml: 2 }}>{format(detail.selectedHour, "h:mma")} </Typography>
                            </Grid>
                        </Grid>
                        <Button sx={{ mt: 2 }} onClick={() => history.push('/')} variant="outlined">
                            Go to Home
                        </Button>
                    </Box>
                </Container>
            </>
        )
    )

}