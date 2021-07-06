import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Snackbar from '@material-ui/core/Snackbar';
import isSameHour from 'date-fns/isSameHour';
import isToday from 'date-fns/isToday';
import eachHourOfInterval from 'date-fns/eachHourOfInterval';
import startOfTomorrow from 'date-fns/startOfTomorrow';
import startOfDay from 'date-fns/startOfDay';
import endOfDay from 'date-fns/endOfDay';
import format from 'date-fns/format';
import isPast from 'date-fns/isPast';
import { Typography } from '@material-ui/core';


export default function TimeSlots({ agenda, enterDetails }) {
    const { times, selectedDate } = agenda;
    const now = new Date();
    const isPastDate = isPast(selectedDate);
    const isTodayDate = isToday(selectedDate);
    const [error, setError] = useState(false);
    let hoursList = [];

    if (isTodayDate) {
        hoursList = eachHourOfInterval({
            start: now,
            end: startOfTomorrow()
        });
    } else {
        hoursList = eachHourOfInterval({
            start: startOfDay(selectedDate),
            end: endOfDay(selectedDate)
        });
    }

    return (
        <>
            <Typography variant="h6" gutterBottom>
                {format(selectedDate, "EEEE',' MMM dd")}
            </Typography>
            <List sx={{ maxHeight: 300, overflow: 'auto', }}>
                {hoursList.map((item, index) => {

                    const btnStyle = { minWidth: 150, mb: 1 };
                    let btnElement;
                    let hourIsBooked = false;
                    times.forEach((hh) => {
                        if (isSameHour(item, new Date(hh.date_time))) {
                            hourIsBooked = true;
                        }
                    })

                    if (hourIsBooked) {
                        btnElement = (<Button disableElevation sx={btnStyle} onClick={() => setError(true)} color="secondary" variant="contained">{format(item, "h:mma")}</Button>)
                    } else if (isPastDate && isTodayDate == false) {
                        btnElement = (<Button sx={btnStyle} variant="outlined" disabled>{format(item, "h:mma")}</Button>)
                    } else {
                        btnElement = (<Button sx={btnStyle} onClick={() => enterDetails(item, selectedDate)} variant="outlined">{format(item, "h:mma")}</Button>)
                    }

                    return (
                        <ListItem key={index} disablePadding>
                            {btnElement}
                        </ListItem>
                    )

                })}
            </List>
            <Snackbar
                open={error}
                onClose={() => setError(false)}
                message="This time slot is already booked"
                key={1}
            />
        </>
    )
}