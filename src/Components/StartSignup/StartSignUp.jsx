import React, { useState, useEffect } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { SnackbarProvider, useSnackbar } from "notistack";
import { useForm, ValidationError } from "@formspree/react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
// import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { useNavigate } from "react-router-dom";
import { useCalendlyEventListener, InlineWidget } from "react-calendly";

const theme = createTheme();

function Success({ next }) {
  const { enqueueSnackbar } = useSnackbar();

  const handleClick = () => {
    enqueueSnackbar("I love snacks.");
  };

  const handleClickVariant = (variant) => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar("Successfully sumbit your request!", { variant });
    setTimeout(() => {
      next();
    }, 3000);
  };

  return (
    <React.Fragment>
      {/* <Button onClick={handleClick}>Show snackbar</Button> */}
      {/* <Button >Show success snackbar</Button> */}
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onClick={handleClickVariant("success")}
        // disabled={state.submitting}
      >
        Connect me with talent
      </Button>
    </React.Fragment>
  );
}

const Stheme = createTheme();

// function CustomizeDayPicker() {
//   const [value, setValue] = React.useState(dayjs("2023-01-04"));
//   const navigate = useNavigate();

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <StaticDatePicker
//         components={TextField}
//         displayStaticWrapperAs="desktop"
//         onChange={async (newValue) => {
//           await setValue(newValue);
//           console.log(value.$d);
//           navigate("/thankyou");
//         }}
//         id="data"
//         label="Date"
//         name="Selected Date for Call"
//         value={value.$d}
//         renderInput={(params) => <TextField {...params} />}
//         dayOfWeekFormatter={(day) => `${day}.`}
//         toolbarFormat="ddd DD MMMM"
//         showToolbar
//       />
//     </LocalizationProvider>
//   );
// }
function CustomizeDayPicker() {
  // useEffect(() => {
  //   if (window.Calendly) {
  //     window.Calendly.initInlineWidgets();
  //   }
  // }, []);
  useCalendlyEventListener({
    onProfilePageViewed: () => console.log("onProfilePageViewed"),
    onDateAndTimeSelected: () => console.log("onDateAndTimeSelected"),
    onEventTypeViewed: () => console.log("onEventTypeViewed"),
    onEventScheduled: (e) => console.log(e.data.payload),
  });
  return (
    <div
      // className="calendly-inline-widget"
      // style={{ minWidth: '320px', height: '630px' }}
    >
      <InlineWidget url="https://calendly.com/brianallenlevlup/30min?month=2023-06" />
    </div>
  );
}

function StartSchedule() {
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get("email"),
  //     password: data.get("password"),
  //   });
  // };

  // const [formstate, handleFormSubmit] = useForm("mdornobw");
  // if (formstate.succeeded) {
  //   return <p>Thanks for joining!</p>;
  // }
  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = "https://assets.calendly.com/assets/external/widget.js";
  //   script.async = true;
  //   document.body.appendChild(script);

  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  return (
    <ThemeProvider theme={Stheme}>
      {/* <Grid container component="main" sx={{ height: "40vh" }}>
        <CssBaseline />
        <Grid item xs={6} sm={8} md={5} component={Paper} elevation={1} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              sx={{ mt: 1 }}
            >
              <CustomizeDayPicker />
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://remotebase.com/_next/image?url=%2Fcalendar-img.png&w=1920&q=75)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
        />
      </Grid> */}
      <Grid container component="main" sx={{ height: "40vh" }}>
        <CssBaseline />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={1} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
              {/* <Box
              sx={{ mt: 1 }}
            >
              <CustomizeDayPicker />
            </Box> */}
          </Box>
        </Grid>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://remotebase.com/_next/image?url=%2Fcalendar-img.png&w=1920&q=75)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
        />
      </Grid>
    </ThemeProvider>
  );
}

function StartSignUp({ handleNext }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  const [formstate, handleFormSubmit] = useForm("mdornobw");
  if (formstate.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "40vh" }}>
        <CssBaseline />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={1} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              Please sign up so we can connect you with the right developer/s
              from our network.
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleFormSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="Email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                fullWidth
                id="cname"
                label="Company Name"
                name="Company Name"
                autoComplete="cname"
                autoFocus
              />
              <TextField
                margin="normal"
                fullWidth
                id="name"
                label="Contact Name"
                name="Name"
                autoComplete="name"
                autoFocus
              />
              <TextField
                margin="normal"
                fullWidth
                id="num"
                label="Contact Number"
                name="Number"
                autoComplete="number"
                autoFocus
              />

              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
              {/* <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Connect me with talent
              </Button> */}
              <SnackbarProvider maxSnack={3}>
                <Success next={handleNext} />
              </SnackbarProvider>
              {/* <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onClick={handleClickVariant("success")}
      >
        Connect me with talent
      </Button> */}
              {/* <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>         
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} /> */}
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://remotebase.com/_next/image?url=%2Fimages%2Fstart%2Fstart-img.png&w=1920&q=75)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
        />
      </Grid>
    </ThemeProvider>
  );
}

export { StartSignUp };
