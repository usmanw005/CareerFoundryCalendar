import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import isSameDay from 'date-fns/isSameDay';
import { useHistory } from 'react-router-dom'
import Calendar from '../components/Calendar';
import TimeSlots from '../components/TimeSlots';
import Container from '../components/Container';

export default function ReservationPage() {
  const [mentorName, setMentorName] = useState("");
  const [mentorTimeZone, setMentorTimeZone] = useState(null);
  const [agenda, setAgenda] = useState({
    times: [],
    selectedDate: new Date()
  });
  const [calendarDates, setCalendarDates] = useState([]);
  let history = useHistory();

  useEffect(() => {
    fetch('http://localhost:3001/mentors/1')
      .then(res => res.json())
      .then(data => {
        if (data) {
          setMentorName(data.name);
          setMentorTimeZone(data.time_zone);
        }

        return fetch('http://localhost:3001/mentors/1/bookings')
      })
      .then(res => res.json())
      .then(data => {
        setAgenda({
          times: data,
          selectedDate: new Date()
        });
        setCalendarDates(data)
      })
  }, [])

  const enterDetails = (selectedHour, selectedDate) => {
    history.push('/details', { selectedHour, selectedDate, mentorName, mentorTimeZone });
  }

  const updateAppointment = (sDate) => {
    let singleDayAgenda = [];
    calendarDates.forEach((d) => {
      if (isSameDay(sDate, new Date(d.date_time))) {
        singleDayAgenda.push(d);
      }
    })

    setAgenda({
      times: singleDayAgenda,
      selectedDate: sDate
    });
  }

  return (
    <Container {...{ mentorName }}>
      <Grid container>
        <Grid item xs={8}>
          <Typography
            sx={{ px: 3 }}
            variant="h6">
            Select your desired date and time
          </Typography>
          <Calendar {...{ updateAppointment, agenda }}></Calendar>
        </Grid>
        <Grid item xs>
          <TimeSlots {...{ agenda, enterDetails }}></TimeSlots>
        </Grid>
      </Grid>
    </Container>
  );
}