import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { useNavigate } from 'react-router-dom';
import { useForm, ValidationError } from "@formspree/react";
import { useCalendlyEventListener, InlineWidget } from "react-calendly";




const Stheme = createTheme();

// function CustomizeDayPicker() {
//     const [value, setValue] = React.useState(dayjs('2023-01-04'));
//     const navigate = useNavigate();

  
//     return (
//       <LocalizationProvider dateAdapter={AdapterDayjs}>
//         <StaticDatePicker
//         components={TextField}
//           displayStaticWrapperAs="desktop"
//           // value={value}
//           onChange={async(newValue) => {
//            await setValue(newValue);
//             console.log(value.$d)
//             navigate('/thankyou')

//           }}
//         id="data"
//                 label="Date"
//                 name="Selected Date for Call"
//                 value={value.$d}
//           renderInput={(params) => <TextField {...params} />}
//           dayOfWeekFormatter={(day) => `${day}.`}
//           toolbarFormat="ddd DD MMMM"
//           showToolbar
//         />
//       </LocalizationProvider>
//     );
//   }
function CustomizeDayPicker() {
  useCalendlyEventListener({
    onProfilePageViewed: () => console.log("onProfilePageViewed"),
    onDateAndTimeSelected: () => console.log("onDateAndTimeSelected"),
    onEventTypeViewed: () => console.log("onEventTypeViewed"),
    onEventScheduled: (e) => console.log(e.data.payload),
  });
  return (
    <div
      // className="calendly-inline-widget"
      style={{ minWidth: '320px', height: '630px' }}
    >
      <InlineWidget url="https://calendly.com/brianallenlevlup/30min?month=2023-06" />
    </div>
  );
}

 function StartSchedule() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const [formstate, handleFormSubmit] = useForm("xdovqqqk");
  if (formstate.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <ThemeProvider theme={Stheme}>
      <Grid container component="main" sx={{ height: '40vh' }}>
        <CssBaseline />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={1} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {/* <Typography component="h1" variant="h5">
            Last step! set an easy schedule call with our LUTS team ahead.
            </Typography> */}
          <Box
          //  component={"form"} noValidate
          //     onSubmit={handleFormSubmit}
              sx={{ mt: 1 }}>
            <CustomizeDayPicker/>
          </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://remotebase.com/_next/image?url=%2Fcalendar-img.png&w=1920&q=75)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'contain',
            backgroundPosition: 'center',
          }}
        />
      
      </Grid>
    </ThemeProvider>
  );
}


export default StartSchedule