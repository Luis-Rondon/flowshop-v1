import React, { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TextField } from '@mui/material';
import dayjs from 'dayjs';

const DateTimePicker = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [selectedTime, setSelectedTime] = useState(dayjs().hour(0).minute(0));

  const handleDateChange = (newValue) => {
    setSelectedDate(newValue);
  };

  const handleTimeChange = (newValue) => {
    setSelectedTime(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div>
            <DesktopDatePicker
                label="Fecha"
                value={selectedDate}
                onChange={handleDateChange}
                renderInput={(params) => (
                    <TextField
                    {...params}
                    helperText={null}
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: null, 
                    }}
                    />
                )}
                format="DD/MM/YYYY"
            />
        </div>
        <div>
        <TimePicker
          label="Hora"
          value={selectedTime}
          onChange={handleTimeChange}
          renderInput={(params) => (
            <TextField
              {...params}
              helperText={null}
              InputProps={{
                ...params.InputProps,
                endAdornment: dayjs(selectedTime).format('HH:mm'),
              }}
            />
          )}
        />
        </div>
    </LocalizationProvider>
  );
};

export default DateTimePicker;
