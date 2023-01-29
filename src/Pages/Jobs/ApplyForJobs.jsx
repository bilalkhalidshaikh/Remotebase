  import * as React from "react";
  import AppBar from "@mui/material/AppBar";
  import Box from "@mui/material/Box";
  import Toolbar from "@mui/material/Toolbar";
  import IconButton from "@mui/material/IconButton";
  import Typography from "@mui/material/Typography";
  import Menu from "@mui/material/Menu";
  import MenuIcon from "@mui/icons-material/Menu";
  import Container from "@mui/material/Container";
  import Avatar from "@mui/material/Avatar";
  import Button from "@mui/material/Button";
  import Tooltip from "@mui/material/Tooltip";
  import MenuItem from "@mui/material/MenuItem";
  import AdbIcon from "@mui/icons-material/Adb";
  import LocationOnIcon from "@mui/icons-material/LocationOn";
  import { InboxOutlined } from "@ant-design/icons";
  import { message, Upload } from "antd";
  import Divider from "@mui/material/Divider";
  import Paper from "@mui/material/Paper";
  import Stack from "@mui/material/Stack";
  import { styled } from "@mui/material/styles";
  import { AntDesignOutlined } from "@ant-design/icons";
  import {
    TextField,
    Grid,
    FormControl,
    InputLabel,
    Select,
    FormHelperText,
    useTheme,
  } from "@mui/material";
  import FlagIcon from "@mui/icons-material/Flag";
  import countries from "countries-list"; // npm package for country data
  import { makeStyles } from "@mui/styles";
  import PhoneInput from "react-phone-number-input";
  import "react-phone-number-input/style.css";
  import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
  import { Form, Input, Space } from "antd";
  import AddIcon from "@mui/icons-material/Add";
  import Card from "@mui/material/Card";
  import CardActions from "@mui/material/CardActions";
  import CardContent from "@mui/material/CardContent";
  import { DatePicker, TimePicker } from "antd";
  import FormGroup from "@mui/material/FormGroup";
  import FormControlLabel from "@mui/material/FormControlLabel";
  import Checkbox from "@mui/material/Checkbox";
  import Accordion from "@mui/material/Accordion";
  import AccordionSummary from "@mui/material/AccordionSummary";
  import AccordionDetails from "@mui/material/AccordionDetails";
  import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
  import { Outlet, Link } from "react-router-dom";

  const { RangePicker } = DatePicker;
  const pages = ["Products", "Pricing", "Blog"];
  const settings = ["Profile", "Account", "Dashboard", "Logout"];

  function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };

    return (
      <AppBar position="static" color="transparent">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {/* {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))} */}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              &nbsp;
              <Typography variant="h6">Senior .Net Developer</Typography>
              <Typography variant="subtitle1">
                <LocationOnIcon /> B-15 Phase 5 DHA, Lahore, Punjab, Pakistan
              </Typography>
              &nbsp;
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    );
  }
  const { Dragger } = Upload;
  const props = {
    name: "file",
    multiple: true,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  const UploadResume = () => {
    return (
      <>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <Box sx={{ width: "100%", height: "120px" }}>
            <Dragger {...props} style={{ height: "120px !important" }}>
              <p className="ant-upload-drag-icon" style={{ marginTop: "-15px" }}>
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Browse resume or just drop it here
              </p>
              <p className="ant-upload-hint">(Optional)</p>
            </Dragger>
          </Box>
          <Box>
            <Button
              sx={{
                backgroundColor: "#266EEB",
                color: "#fff",
                textDecoration: "none",
                width: "240px",
                height: "60px",
                marginTop: "15px",
              }}
              variant={"contained"}
            >
              <a
                target={"_blank"}
                style={{ color: "#fff", textDecoration: "none" }}
                href="https://secure.indeed.com/oauth/v2/authorize?client_id=6nwwcdklwgktryjw2j5fxh5t2fyneule7zg7mvw3pf9jbx3wmewzlxkdz1jxvt7c&redirect_uri=http%3A%2F%2Fwww.acerecruitersllc.com%2Fgotcode.html&response_type=code&state=employer1234&scope=email+offline_access+employer_access"
              >
                {/* <img src="indeed-button.png" alt="default light" /> */}
                Apply with Indeed
              </a>
            </Button>
          </Box>
        </Stack>
      </>
    );
  };

  const useStyles = makeStyles((theme) => ({
    formControl: {
      // margin: theme.spacing(1),
      margin: "1px",
      minWidth: 120,
    },
    flag: {
      // marginRight: theme.spacing(1),
      margin: "1px",
    },
  }));

  const PlaceInput = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [countryCode, setCountryCode] = React.useState("US");
    const [phoneNumber, setPhoneNumber] = React.useState("");

    const handleCountryCodeChange = (event) => {
      setCountryCode(event.target.value);
    };

    const handlePhoneNumberChange = (event) => {
      setPhoneNumber(event.target.value);
    };

    const countryData = countries.countries[countryCode];

    return (
      <div>
        <FormControl className={classes.formControl} sx={{ maxWidth: "565px" }}>
          {/* <InputLabel htmlFor="country-code-select">
            Place of residence
          </InputLabel> */}
          <Select
            native
            value={countryCode}
            onChange={handleCountryCodeChange}
            inputProps={{
              name: "country-code",
              id: "country-code-select",
            }}
            fullWidth
            sx={{ maxWidth: "565px" }}
            placeholder="Place of residence"
            // style={{width:'565px'}}
          >
            {Object.keys(countries.countries).map((code) => (
              <option key={code} value={code}>
                {countries.countries[code].name}
              </option>
            ))}
          </Select>
          {/* <FormHelperText>Select your country</FormHelperText> */}
        </FormControl>
        {/* <TextField
          id="phone-number"
          label="Phone Number"
          type="text"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          InputProps={{
            startAdornment: (
              <>
                <FlagIcon
                  className={classes.flag}
                  style={{ color: theme.palette.primary.main }}
                />
                {`+${countryData.callingCode}`}
              </>
            ),
          }}
        /> */}
      </div>
    );
  };

  function PhoneNumberInput() {
    const [phoneNumber, setPhoneNumber] = React.useState("");
    return (
      <PhoneInput
        placeholder="Enter phone number"
        value={phoneNumber}
        onChange={setPhoneNumber}
        defaultCountry={"pk"}
        inputStyle={{ color: "green", height: "250px" }}
        containerStyle={{ margin: "-20px" }}
        buttonStyle={{}}
      />
    );
  }

  function MyForm() {
    const [values, setValues] = React.useState({
      fname: "",
      email: "",
      lname: "",
      cemail: "",
    });

    const handleChange = (event) => {
      setValues({ ...values, [event.target.name]: event.target.value });
    };

    return (
      <form>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="First Name"
              name="fname"
              onChange={handleChange}
              value={values.fname}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Last Name"
              name="lname"
              onChange={handleChange}
              value={values.lname}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              onChange={handleChange}
              value={values.email}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Confirm Email"
              name="cemail"
              onChange={handleChange}
              value={values.cemail}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            {/* <TextField
              fullWidth
              label="Confirm Email"
              name="cemail"
              onChange={handleChange}
              value={values.cemail}
              variant="outlined"
            /> */}

            <PlaceInput />
          </Grid>
          <Grid item xs={6}>
            {/* <TextField
              fullWidth
              label="Confirm Email"
              name="cemail"
              onChange={handleChange}
              value={values.cemail}
              variant="outlined"
            /> */}

            <PhoneNumberInput />
          </Grid>
        </Grid>
      </form>
    );
  }

  const PersnolInfo = () => {
    return (
      <>
        <Typography variant="h5" fontWeight={"bold"}>
          Personal information
        </Typography>
        <Avatar
          sx={{ width: 126, height: 126 }}
          src={
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIEAgQMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAQUCAwQGB//EAC4QAAICAQEGBQIHAQAAAAAAAAABAgMEEQUSITFBURMiMmFxQlIjYpGhwdHhsf/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABYRAQEBAAAAAAAAAAAAAAAAAAARAf/aAAwDAQACEQMRAD8A+4gAAAAAAAA1WZFNfrsivbU0vaOOuUm/iLA6wci2jjdZSXzFm2vKos9Fkde3IDcBqAAAAAAAAAAAAAHBn5vh611Nb/V9v9A3ZWZXj8PVP7V/JV35l13OW6u0eBofF6kGoiQQSk3yWvwEQHxJaceaa+SAN9OTbT6JvT7XxRZY2fXc1Gfkm+nRlMSIr0gKvAztGqrn7Rk/+MtDKgAAAAAAAObOyFj1cPXLhH+yk1b4vizfnXeNkSf0x4ROc1iAACOzBw/H89mqrT5dy3rrjXHdhFRXZEUwVdUYLlFaGZlpEoqcdJJNPoyrz8JVxdtPpXqj2LUhpNNNcGB5sGdsdyyUPtbRgaZSW2zcnxYeHN+eP7oqDZj2um6Ni6Pj8BXoQRFprVcU+RJlQAADVkz8PHsn2jwNpybTemJL3aQFMQAaZAAFeipmrKozXJrUzKfAzFR+HZruN8H2LaE4zjvQaafVMyrIhvRaiTUVq2ku7KvPzlNOml6p+qX9AcVst+2c/uk2YAGkAAEXmzp7+JDvHynSV+yH+DYu0iwMtAAAHJtRa4kn2aOs05cPExrI9XECgAQNMhGnEySbeiWrLLE2cklO9av7P7Cq6FFtrfhwlL4Qdd1T5WRftqj0UUorRLRLoiSVXnd2616Pfn25sizHur0c65RXuj0ZDWqFHmdGZLXqW+Vs+E05U+WfboyqnFwm4STUlz1KjEAkItNjr8Kx95fwWBybMhuYkW+cm2dZloAAAhkgChy6fBvlDThzXwaC52jju6vegtZw5e6KY1iLTZmKlFXWLi/T7e5YlTgZvhfh2vydJdi2T1WpnVAAAAAA49o43i1ucF54r9UdhW7QzVo6qXq/qkugwVhnTW7bY1x5yehgWmy8fdXjTXGXp+DWo74RUIKK5JaIyAMqAAAAABV7Qwmn4tK4fVFdPdFoAPNHRjZltHBPeh9rO/K2fG1uVfkn+zKy6myl6WQcffoaRa1bQonwk3B+50xtrl6ZxfwzzoJCvRSshFaynFL3Zotz8eHBS332jxKQCFdeTnW3eWPkh2XNnIZ11Ttlu1xcn7Fli7OUWp3+Z/b0KOfBw3c1ZYtK1yX3f4W6WgS05EmVAAAAAAAAAAAIaUlo1quzJAHLZgY8/o3X+V6Gl7Lr6WTX6FgAK9bLr62T/RG6vZ+PDjuuT/MzqAGMYRgtIxSXZIyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//Z"
          }
        />
        <MyForm />
      </>
    );
  };

  const Experience = () => {
    // const onFinish = (values) => {
    //   console.log('Received values of form:', values);
    // };
    const [values, setValues] = React.useState({
      title: "",
      company: "",
      offloc: "",
      desc: "",
    });

    const handleChange = (event) => {
      setValues({ ...values, [event.target.name]: event.target.value });
    };

    const formItemLayout = {
      labelCol: {
        xs: {
          span: 24,
        },
        sm: {
          span: 8,
        },
      },
      wrapperCol: {
        xs: {
          span: 24,
        },
        sm: {
          span: 16,
        },
      },
    };
    const config = {
      rules: [
        {
          type: "object",
          required: true,
          message: "Please select time!",
        },
      ],
    };
    const rangeConfig = {
      rules: [
        {
          type: "array",
          required: true,
          message: "Please select time!",
        },
      ],
    };
    const onFinish = (fieldsValue) => {
      // Should format date value before submit.
      const rangeValue = fieldsValue["range-picker"];
      const rangeTimeValue = fieldsValue["range-time-picker"];
      const values = {
        ...fieldsValue,
        "date-picker": fieldsValue["date-picker"].format("YYYY-MM-DD"),
        "date-time-picker": fieldsValue["date-time-picker"].format(
          "YYYY-MM-DD HH:mm:ss"
        ),
        "month-picker": fieldsValue["month-picker"].format("YYYY-MM"),
        "range-picker": [
          rangeValue[0].format("YYYY-MM-DD"),
          rangeValue[1].format("YYYY-MM-DD"),
        ],
        "range-time-picker": [
          rangeTimeValue[0].format("YYYY-MM-DD HH:mm:ss"),
          rangeTimeValue[1].format("YYYY-MM-DD HH:mm:ss"),
        ],
        "time-picker": fieldsValue["time-picker"].format("HH:mm:ss"),
      };
      console.log("Received values of form: ", values);
    };

    const [checked, setChecked] = React.useState(true);

    const handleChangeCheck = (event) => {
      setChecked(event.target.checked);
    };

    return (
      <Box>
        <Accordion>
          <AccordionSummary
            expandIcon={
              <>
                {" "}
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    borderRadius: "25px",
                    color: "#365679",
                    borderColor: "#365679",
                    padding: "10px 60px",
                  }}
                >
                  <AddIcon />
                  &nbsp;Add
                </Button>
              </>
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h5" fontWeight={"bold"}>
              Experience
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <form>
                  <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    <Grid item xs={6}>
                      <TextField
                        fullWidth
                        label="Title"
                        name="title"
                        onChange={handleChange}
                        value={values.title}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        fullWidth
                        label="Company"
                        name="company"
                        onChange={handleChange}
                        value={values.company}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Office Location"
                        name="offloc"
                        onChange={handleChange}
                        value={values.offloc}
                        variant="outlined"
                      />
                    </Grid>
                    {/* <Grid item xs={6}>
            <TextField
              fullWidth
              label="Confirm Email"
              name="cemail"
              onChange={handleChange}
              value={values.cemail}
              variant="outlined"
            />
          </Grid> */}
                    <Grid item xs={12}>
                      {/* <TextField
              fullWidth
              label="Confirm Email"
              name="cemail"
              onChange={handleChange}
              value={values.cemail}
              variant="outlined"
            /> */}

                      <TextField
                        id="outlined-multiline-static"
                        label="Description"
                        multiline
                        rows={4}
                        defaultValue={values.desc}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      &nbsp;
                      <Form.Item
                        name="range-time-picker"
                        label="From To"
                        {...rangeConfig}
                      >
                        <RangePicker showTime format="YYYY-MM-DD HH:mm:ss" />
                      </Form.Item>
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={checked}
                              onChange={handleChangeCheck}
                              inputProps={{ "aria-label": "controlled" }}
                            />
                          }
                          label="I currently work here"
                        />
                      </FormGroup>
                    </Grid>
                    {/* <Grid item xs={12}>
                </Grid> */}
                    <Grid item xs={10}></Grid>
                    <Grid item xs={2}>
                      <Button variant="outlined" sx={{ borderColor: "#365679" }}>
                        Cancel
                      </Button>
                      &nbsp;
                      <Button
                        variant="contained"
                        sx={{ backgroundColor: "#365679" }}
                      >
                        Save
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
              {/* <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions> */}
            </Card>
          </AccordionDetails>
        </Accordion>
      </Box>
    );
  };
  const Education = () => {
    // const onFinish = (values) => {
    //   console.log('Received values of form:', values);
    // };
    const [values, setValues] = React.useState({
      inst: "",
      major: "",
      degree: "",
      schloc: "",
      desc: "",
    });

    const handleChange = (event) => {
      setValues({ ...values, [event.target.name]: event.target.value });
    };

    const formItemLayout = {
      labelCol: {
        xs: {
          span: 24,
        },
        sm: {
          span: 8,
        },
      },
      wrapperCol: {
        xs: {
          span: 24,
        },
        sm: {
          span: 16,
        },
      },
    };
    const config = {
      rules: [
        {
          type: "object",
          required: true,
          message: "Please select time!",
        },
      ],
    };
    const rangeConfig = {
      rules: [
        {
          type: "array",
          required: true,
          message: "Please select time!",
        },
      ],
    };
    const onFinish = (fieldsValue) => {
      // Should format date value before submit.
      const rangeValue = fieldsValue["range-picker"];
      const rangeTimeValue = fieldsValue["range-time-picker"];
      const values = {
        ...fieldsValue,
        "date-picker": fieldsValue["date-picker"].format("YYYY-MM-DD"),
        "date-time-picker": fieldsValue["date-time-picker"].format(
          "YYYY-MM-DD HH:mm:ss"
        ),
        "month-picker": fieldsValue["month-picker"].format("YYYY-MM"),
        "range-picker": [
          rangeValue[0].format("YYYY-MM-DD"),
          rangeValue[1].format("YYYY-MM-DD"),
        ],
        "range-time-picker": [
          rangeTimeValue[0].format("YYYY-MM-DD HH:mm:ss"),
          rangeTimeValue[1].format("YYYY-MM-DD HH:mm:ss"),
        ],
        "time-picker": fieldsValue["time-picker"].format("HH:mm:ss"),
      };
      console.log("Received values of form: ", values);
    };

    const [checked, setChecked] = React.useState(true);

    const handleChangeCheck = (event) => {
      setChecked(event.target.checked);
    };

    return (
      <Box>
        <Accordion>
          <AccordionSummary
            expandIcon={
              <>
                {" "}
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    borderRadius: "25px",
                    color: "#365679",
                    borderColor: "#365679",
                    padding: "10px 60px",
                  }}
                >
                  <AddIcon />
                  &nbsp;Add
                </Button>
              </>
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h5" fontWeight={"bold"}>
              Education
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <form>
                  <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Institution"
                        name="intitution"
                        onChange={handleChange}
                        value={values.inst}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        fullWidth
                        label="Major"
                        name="major"
                        onChange={handleChange}
                        value={values.major}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        fullWidth
                        label="Degree"
                        name="degree"
                        onChange={handleChange}
                        value={values.degree}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="School Location"
                        name="schoollocation"
                        onChange={handleChange}
                        value={values.schloc}
                        variant="outlined"
                      />
                    </Grid>
                    {/* <Grid item xs={6}>
            <TextField
              fullWidth
              label="Confirm Email"
              name="cemail"
              onChange={handleChange}
              value={values.cemail}
              variant="outlined"
            />
          </Grid> */}
                    <Grid item xs={12}>
                      {/* <TextField
              fullWidth
              label="Confirm Email"
              name="cemail"
              onChange={handleChange}
              value={values.cemail}
              variant="outlined"
            /> */}

                      <TextField
                        id="outlined-multiline-static"
                        label="Description"
                        multiline
                        rows={4}
                        defaultValue={values.desc}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      &nbsp;
                      <Form.Item
                        name="range-time-picker"
                        label="From To"
                        {...rangeConfig}
                      >
                        <RangePicker showTime format="YYYY-MM-DD HH:mm:ss" />
                      </Form.Item>
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={checked}
                              onChange={handleChangeCheck}
                              inputProps={{ "aria-label": "controlled" }}
                            />
                          }
                          label="I currently attend"
                        />
                      </FormGroup>
                    </Grid>
                    {/* <Grid item xs={12}>
                </Grid> */}
                    <Grid item xs={10}></Grid>
                    <Grid item xs={2}>
                      <Button variant="outlined" sx={{ borderColor: "#365679" }}>
                        Cancel
                      </Button>
                      &nbsp;
                      <Button
                        variant="contained"
                        sx={{ backgroundColor: "#365679" }}
                      >
                        Save
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
              {/* <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions> */}
            </Card>
          </AccordionDetails>
        </Accordion>
      </Box>
    );
  };

  const OnTheWeb = () => {
    const [values, setValues] = React.useState({
      linkedin: "",
      facebook: "",
      twitter: "",
      website: "",
    });

    const handleChange = (event) => {
      setValues({ ...values, [event.target.name]: event.target.value });
    };

    return (
      <Box>
        <Typography variant="h5" fontWeight={"bold"}>
          On The Web
        </Typography>
        &nbsp;
        <form>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="linkedIn"
                name="linkedin"
                onChange={handleChange}
                value={values.linkedin}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Facebook"
                name="facebook"
                onChange={handleChange}
                value={values.facebook}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Twitter"
                name="twitter"
                onChange={handleChange}
                value={values.twitter}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Website"
                name="website"
                onChange={handleChange}
                value={values.website}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </form>
      </Box>
    );
  };

  const Resume = () => {
    return (
      <Box>
        <Typography variant="h5" fontWeight={"bold"}>
          Resume
        </Typography>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <Box sx={{ width: "100%", height: "120px" }}>
            <Dragger {...props} style={{ height: "120px !important" }}>
              <p className="ant-upload-drag-icon" style={{ marginTop: "-15px" }}>
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Browse resume or just drop it here
              </p>
              <p className="ant-upload-hint">(Optional)</p>
            </Dragger>
          </Box>
          {/* <Box>
          <Button
            sx={{
              backgroundColor: "#266EEB",
              color: "#fff",
              textDecoration: "none",
              width: "240px",
              height: "60px",
              marginTop: "15px",
            }}
            variant={"contained"}
          >
            <a
              target={"_blank"}
              style={{ color: "#fff", textDecoration: "none" }}
              href="https://secure.indeed.com/oauth/v2/authorize?client_id=6nwwcdklwgktryjw2j5fxh5t2fyneule7zg7mvw3pf9jbx3wmewzlxkdz1jxvt7c&redirect_uri=http%3A%2F%2Fwww.acerecruitersllc.com%2Fgotcode.html&response_type=code&state=employer1234&scope=email+offline_access+employer_access"
            >
              Apply with Indeed
            </a>
          </Button>
        </Box> */}
        </Stack>
      </Box>
    );
  };

  const Message = () => {
    return (
      <Box>
        <Typography variant="h5" fontWeight={"bold"}>
          Message to Hiring Manager
        </Typography>
        &nbsp;
        <Typography variant="subtitle1" fontWeight={"normal"}>
          Let the company know about your interest working there
        </Typography>
        <TextField
          id="outlined-multiline-static"
          // label="Multiline"
          multiline
          rows={4}
          // defaultValue="Default Value"
          fullWidth
        />
      </Box>
    );
  };

  const TandC = () => {
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
      setChecked(event.target.checked);
    };
    return (
      <Box>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
            }
            label="
  Please be informed that your application to this job offer will trigger some processing of your personal data by the recruiting company, the data controller. SmartRecruiters, the data processor, has no control over such personal data processing. For more information on these personal data processing, please refer to the recruiting company’s privacy policy."
          />
        </FormGroup>
      </Box>
    );
  };

  export default function ApplyForJobs() {
    return (
      <div>
        <ResponsiveAppBar />
        <br />
        <Container sx={{ textAlign: "left" }}>
          <Typography variant="h5" fontWeight={"bold"}>
            Easy Apply
          </Typography>
          <Typography variant="subtitle1">
            Choose an option to autocomplete your application. You can still fill
            your profile manually.
          </Typography>
          <br />
          <UploadResume />
          <hr />
          <PersnolInfo />
          <br />
          <hr />
          <br />
          <Experience />
          <br />
          <br />
          <br />
          <Education />
          <br />
          <hr />
          <br />
          <OnTheWeb />
          <br />
          <hr />
          <br />
          <Resume />
          <br />
          <hr />
          <br />
          <Message />
          <br />
          <hr />
          <br />
          <TandC />
          <br />
          <br />
          <br />
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={10}></Grid>
            <Grid item xs={2}>
              &nbsp;
              <Link to="/">
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#365679",
                    borderRadius: "25px",
                    padding: "10px 40px ",
                  }}
                >
                  Submit
                </Button>
              </Link>
            </Grid>
          </Grid>
          <br />
          <br />
        </Container>
      </div>
    );
  }
