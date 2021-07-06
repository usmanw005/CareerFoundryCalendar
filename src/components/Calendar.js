import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import StaticDatePicker from '@material-ui/lab/StaticDatePicker';
import PickersDay from '@material-ui/lab/PickersDay';
import isBefore from 'date-fns/isBefore';

export default function CustomDay({ agenda, updateAppointment }) {
  const [value, setValue] = useState(new Date());

  const renderWeekPickerDay = (date, selectedDates, pickersDayProps) => {
    const now = new Date();
    if (isBefore(date, now)) {
      return <PickersDay {...pickersDayProps} />
    } else {
      return <PickersDay sx={{ backgroundColor: '#f3f3f3' }} {...pickersDayProps} />;
    }
  };

  const dateChanged = (newValue) => {
    setValue(newValue);
    updateAppointment(newValue);
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StaticDatePicker
        displayStaticWrapperAs="desktop"
        label="Week picker"
        value={value}
        onChange={dateChanged}
        renderDay={renderWeekPickerDay}
        renderInput={(params) => <TextField {...params} />}
        inputFormat="'Week of' MMM d"
      />
    </LocalizationProvider>
  );
}