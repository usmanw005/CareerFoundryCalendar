import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/styles'
import format from 'date-fns/format';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import SaveOutlined from '@material-ui/icons/SaveOutlined';
import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';
import Container from '../components/Container';
import EventAvailableOutlinedIcon from '@material-ui/icons/EventAvailableOutlined';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    field: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    }
}))

export default function DetailsPage() {
    let location = useLocation();
    let history = useHistory();
    const classes = useStyles()
    const [detail, setDetail] = useState(null);
    const [reason, setReason] = useState('')
    const [reasonError, setReasonError] = useState(false)

    useEffect(() => {
        setDetail(location.state);
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        setReasonError(false)

        if (reason == '') {
            setReasonError(true)
        } else {
            const formattedDate = format(detail.selectedHour, "yyyy-MM-dd HH:mm:ss zz")
            fetch(`http://localhost:3001/bookings`, {
                method: 'POST',
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({ "date_time": formattedDate, "mentorId": 1, reason })
            }).then(() => {
                history.push('/confirmation', {
                    confirmation: {...detail}
                })
            })
        }
    }

    return (

        (detail && (
            <Container mentorName={detail.mentorName} goBack={true}>
                <Box sx={{ px: 3 }}>
                    <Typography sx={{ mb: 1, fontWeight: '500' }} component="h1" variant="body1">
                        Enter Reason for your booking on
                    </Typography>
                    <Chip
                        sx={{ mb: 2 }}
                        avatar={<EventAvailableOutlinedIcon fontSize="medium" />}
                        label={
                            <Typography sx={{ ml: 1 }} component="h1" variant="body1"> {format(detail.selectedDate, "yyyy-MM-dd")} at {format(detail.selectedHour, "h:mma")}</Typography>
                        }
                        variant="outlined">
                    </Chip>
                    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                        <div className={classes.root}>
                            <TextField className={classes.field}
                                onChange={(e) => setReason(e.target.value)}
                                label="Reason"
                                variant="outlined"
                                color="secondary"
                                multiline
                                rows={4}
                                fullWidth
                                required
                                helperText={reasonError == true ? "Reason is required" : ""}
                                error={reasonError}
                                sx={{ mb: 2 }}
                            />
                            <Grid container>
                                <Grid item>
                                    <Button
                                        disableElevation
                                        type="submit"
                                        variant="contained"
                                        endIcon={<SaveOutlined />}>
                                        Submit
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button sx={{ml: 2}} onClick={() => history.goBack()} variant="outlined">
                                        Cancel
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </form>
                </Box>
            </Container >
        ))
    )

}