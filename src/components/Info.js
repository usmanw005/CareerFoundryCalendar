import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Box, IconButton } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import KeyboardBackspaceOutlinedIcon from '@material-ui/icons/KeyboardBackspaceOutlined';
import HourglassEmptyOutlinedIcon from '@material-ui/icons/HourglassEmptyOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import { useHistory } from 'react-router-dom'

export default function Info({ goBack, mentorName, mentorTimeZone }) {
    let history = useHistory();
    return (
        <>
            {
                goBack && (
                    <Grid item xs={12}>
                        <ButtonBase onClick={() => history.goBack()} sx={{ width: 20, height: 20, borderRadius: "50%", mb: 2 }}>
                            <KeyboardBackspaceOutlinedIcon />
                        </ButtonBase>
                    </Grid>
                )
            }
            <Grid container spacing={0}>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography sx={{ mb: 0, mt: 0 }} component="h1" variant="h6">
                                Appointment
                            </Typography>
                            <Grid sx={{ mt: 0 }} container direction="row" alignItems="center">
                                <Grid item>
                                    <AccountCircleOutlinedIcon fontSize="small" />
                                </Grid>
                                <Grid item>
                                    <Typography sx={{ ml: 1 }} component="h1" fontSize="small" variant="body1">{mentorName}</Typography>
                                </Grid>
                            </Grid>
                            <Grid sx={{ mt: 0 }} container direction="row" alignItems="center">
                                <Grid item>
                                    <HourglassEmptyOutlinedIcon fontSize="small" />
                                </Grid>
                                <Grid item>
                                    <Typography sx={{ ml: 1 }} component="h1" fontSize="small" variant="body1"> 1 hour</Typography>
                                </Grid>
                            </Grid>
                            <Typography sx={{ mt: 2 }} gutterBottom variant="subtitle1" component="div">
                                <Box fontSize={12}>
                                    Additional information about this appointment
                                </Box>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}