import React, { useState } from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import { Theme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, CardActions, Stack } from "@mui/material";
import {StartSignUp} from "../../Components/StartSignup/StartSignUp";
import StartSchedule from "../../Components/StartSchedule/StartSchedule";
import "./style.css";
import logo from "../../Images/logo.png";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function FormRow() {
  return (
    <React.Fragment>
      <Grid item xs={4}>
        &nbsp;
      </Grid>
      <Grid item xs={4}>
        <div>
          <img src="https://remotebase.com/_next/image?url=%2Fimages%2Frb-logo.png&w=1920&q=100" />
        </div>
      </Grid>
      <Grid item xs={4}>
        &nbsp;
      </Grid>
    </React.Fragment>
  );
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Python",
  "Node.js",
  "PHP",
  "Ruby on Rails",
  "C#",
  "GO",
  "Swift",
  "Java",
  "IONIC",
  "React",
  "React Native",
  "Flutter",
  "Machine Learning",
  "C",
  "C++",
  "Rust",
  "Angular",
  "Scala",
  "Vue.js",
  "IOS",
  "DevOps",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

function SkillsSet() {
  const [chipData, setChipData] = React.useState([
    { key: 0, label: "Angular" },
    { key: 1, label: "Java" },
    { key: 2, label: "React Native" },
    { key: 3, label: "React" },
    { key: 4, label: "Vue.js" },
    { key: 5, label: "HTML" },
    { key: 6, label: "CSS" },
    { key: 7, label: "JavaScript" },
    { key: 8, label: "TypeScript" },
    { key: 9, label: "Python" },
    { key: 10, label: "Node.js" },
    { key: 11, label: "PHP" },
    { key: 12, label: "Ruby on Rails" },
    { key: 13, label: "C#" },
    { key: 14, label: "GO" },
    { key: 15, label: "Swift" },
    { key: 16, label: "Java" },
    { key: 17, label: "IONIC" },
    { key: 18, label: "React" },
    { key: 19, label: "React Native" },
    { key: 20, label: "Flutter" },
    { key: 21, label: "Machine Learning" },
    { key: 22, label: "C" },
    { key: 23, label: "C++" },
    { key: 24, label: "Rust" },
    { key: 25, label: "Angular" },
    { key: 26, label: "Scala" },
    { key: 27, label: "Vue.js" },
    { key: 28, label: "IOS" },
    { key: 29, label: "DevOps" },
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  };

  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        listStyle: "none",
        p: 0.5,
        m: 0,
      }}
      component="ul"
    >
      {chipData.map((data) => {
        let icon;

        if (data.label === "React") {
          icon = <TagFacesIcon />;
        }

        return (
          <ListItem key={data.key}>
            <Chip
              icon={icon}
              label={data.label}
              onDelete={data.label === "React" ? undefined : handleDelete(data)}
            />
          </ListItem>
        );
      })}
    </Paper>
  );
}

function MultipleSelectChip() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 350 }}>
        <InputLabel id="demo-multiple-chip-label">
          Desired areas of epertise (e.g, JavaScript, Python, etc)
        </InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

function MultiActionAreaCard({ src, title, style, onClick }) {
  return (
    <Card
      sx={{ maxWidth: 455, width: "100%", height: "100vh", maxHeight: 255 }}
      onClick={onClick}
      style={style}
      className={"c-cards"}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height={120}
          width={120}
          image={src}
          alt="green iguana"
          sx={{
            width: "140px",
            height: "140px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            fontWeight={"500"}
            color="#282c34"
            fontFamily={"Poppins"}
          >
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

function TextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const [selCard, setSelCard] = useState(false);

  const clickCard = () => {
    setSelCard((current) => !current);
    handleNext();
  };
  const [selCardOne, setSelCardOne] = useState(false);

  const clickCardOne = () => {
    setSelCardOne((current) => !current);
    handleNext();
  };
  const [selCardTwo, setSelCardTwo] = useState(false);

  const clickCardTwo = () => {
    setSelCardTwo((current) => !current);
    handleNext();
  };
  const [selCardThree, setSelCardThree] = useState(false);

  const clickCardThree = () => {
    setSelCardThree((current) => !current);
    handleNext();
  };
  const [selsCard, setSelsCard] = useState(false);

  const clicksCard = () => {
    setSelsCard((current) => !current);
    handleNext();
  };
  const [selsCardOne, setSelsCardOne] = useState(false);

  const clicksCardOne = () => {
    setSelsCardOne((current) => !current);
    handleNext();
  };
  const [selsCardTwo, setSelsCardTwo] = useState(false);

  const clicksCardTwo = () => {
    setSelsCardTwo((current) => !current);
    handleNext();
  };
  const [selsCardThree, setSelsCardThree] = useState(false);

  const clicksCardThree = () => {
    setSelsCardThree((current) => !current);
    handleNext();
  };

  const [isActive, setIsActive] = useState(false);
  const [isActiveOne, setIsActiveOne] = useState(false);
  const [isActiveTwo, setIsActiveTwo] = useState(false);
  const [isActiveThree, setIsActiveThree] = useState(false);
  const [isActiveFour, setIsActiveFour] = useState(false);
  const [isActiveFive, setIsActiveFive] = useState(false);
  const [isActiveSix, setIsActiveSix] = useState(false);
  const [isActiveSeven, setIsActiveSeven] = useState(false);
  const [isActiveEight, setIsActiveEight] = useState(false);
  const [isActiveNine, setIsActiveNine] = useState(false);
  const [isActiveTen, setIsActiveTen] = useState(false);
  const [isActiveEleven, setIsActiveEleven] = useState(false);
  const [isActiveTwelve, setIsActiveTwelve] = useState(false);
  const [isActiveThirteen, setIsActiveThirteen] = useState(false);
  const [isActiveFourteen, setIsActiveFourteen] = useState(false);
  const [isActiveFifteen, setIsActiveFifteen] = useState(false);
  const [isActiveSixteen, setIsActiveSixteen] = useState(false);
  const [isActiveSeventeen, setIsActiveSeventeen] = useState(false);
  const [isActiveEighteen, setIsActiveEighteen] = useState(false);
  const [isActiveNineteen, setIsActiveNineteen] = useState(false);
  const [isActiveTwenty, setIsActiveTwenty] = useState(false);

  const handleClick = () => {
    // 👇️ toggle
    setIsActive((current) => !current);

    // 👇️ or set to true
    // setIsActive(true);
  };
  const handleClickOne = () => {
    setIsActiveOne((current) => !current);
  };
  const handleClickTwo = () => {
    setIsActiveTwo((current) => !current);
  };
  const handleClick3 = () => {
    setIsActiveThree((current) => !current);
  };
  const handleClick4 = () => {
    setIsActiveFour((current) => !current);
  };
  const handleClick5 = () => {
    setIsActiveFive((current) => !current);
  };
  const handleClick6 = () => {
    setIsActiveSix((current) => !current);
  };
  const handleClick7 = () => {
    setIsActiveSeven((current) => !current);
  };
  const handleClick8 = () => {
    setIsActiveEight((current) => !current);
  };
  const handleClick9 = () => {
    setIsActiveNine((current) => !current);
  };
  const handleClick10 = () => {
    setIsActiveTen((current) => !current);
  };
  const handleClick11 = () => {
    setIsActiveEleven((current) => !current);
  };
  const handleClick12 = () => {
    setIsActiveTwelve((current) => !current);
  };
  const handleClick13 = () => {
    setIsActiveThirteen((current) => !current);
  };
  const handleClick14 = () => {
    setIsActiveFourteen((current) => !current);
  };
  const handleClick15 = () => {
    setIsActiveFifteen((current) => !current);
  };
  const handleClick16 = () => {
    setIsActiveSixteen((current) => !current);
  };
  const handleClick17 = () => {
    setIsActiveSeventeen((current) => !current);
  };
  const handleClick18 = () => {
    setIsActiveEighteen((current) => !current);
  };
  const handleClick19 = () => {
    setIsActiveNineteen((current) => !current);
  };
  const handleClick20 = () => {
    setIsActiveTwenty((current) => !current);
  };

  const steps = [
    {
      label: (
        <>
          <Box sx={{ pt: 2, textAlign: "center" }}>
            <div style={{ background: "transparent", marginTop: "-10px" }}>
              <img
                src={logo}
                width={300}
                height={300}
                style={{ marginTop: "-70px" }}
              />
            </div>
            <Box
              sx={{
                pt: 4,
                textAlign: "center",
                marginTop: "-60px",
                display: { xs: "none", md: "block" },
              }}
            >
              <Typography variant="h4" textAlign={"center"} fontWeight={"bold"}>
                Hire Your Dream Developer Team Now
              </Typography>
            </Box>
            <br />
            <br />
            <br />
          </Box>
        </>
      ),
      description: (
        <>
          <Box
            sx={{
              pt: 7,
              width: "100%",
              margin: "0px auto",
              display: { xs: "none", md: "block" },
            }}
          >
            <Typography
              variant="body1"
              gutterBottom
              fontWeight={"400"}
              style={{ color: "#000", height: "120px" }}
            >
              Get a world-class team of the top 1% of remote software developers
              within 24 hours and accelerate your tech hiring process. Enjoy a
              2-week free trial and work with the best developer talent for two
              weeks without paying any upfront charges.
            </Typography>
            <Box
              // className="skill_contain"
              sx={{
                pt: 1,
                // overflow: "scroll",
                position: "fixed",
                height: "320px",
              }}
            >
              <div className="styles__SkillsWrapper-sc-s0b09o-0 gIDjoE">
                <div className="styles__Container-sc-s0b09o-1 fmsQUU">
                  <div className="styles__SkillsCanvas-sc-s0b09o-2 fbJaPV">
                    <div className="styles__SkillsContent-sc-s0b09o-7 frFFiG">
                      <div className="styles__ExpertiseCombine-sc-s0b09o-8 hmZUhN">
                        <div
                          className="styles__FormGroup-sc-s0b09o-9 fGDCLS aos-item"
                          data-aos="fade-zoom-in"
                          data-aos-easing="ease-in-back"
                          data-aos-delay={200}
                          data-aos-offset={0}
                        />
                        <div
                          className="styles__ExploreBadgeGroup-sc-s0b09o-11 jVYgMv aos-item"
                          data-aos="fade-zoom-in"
                          data-aos-easing="ease-in-back"
                          data-aos-delay={300}
                          data-aos-offset={0}
                        />
                      </div>
                      <div className="styles__SkillsCombine-sc-s0b09o-14 bNCweA">
                        <label
                          className="styles__SkillsLabel-sc-s0b09o-15 gnogEc aos-item"
                          data-aos="fade-zoom-in"
                          data-aos-easing="ease-in-back"
                          data-aos-delay={400}
                          data-aos-offset={0}
                        >
                          Popular skills for <b>Developer:</b>
                        </label>
                        <div
                          className="styles__ExpertiseBadgeGroup-sc-s0b09o-16 cOijbV aos-item"
                          data-aos="fade-zoom-in"
                          data-aos-easing="ease-in-back"
                          data-aos-delay={500}
                          data-aos-offset={0}
                        >
                          <div
                            className="styles__ExpertiseBadge-sc-s0b09o-12 GWGSk"
                            style={{
                              backgroundColor: isActiveOne ? "#D4305F" : "",
                              color: isActiveOne ? "white" : "",
                            }}
                            onClick={handleClickOne}
                          >
                            + CSS
                          </div>
                          <div
                            className="styles__ExpertiseBadge-sc-s0b09o-12 GWGSk"
                            style={{
                              backgroundColor: isActive ? "#D4305F" : "",
                              color: isActive ? "white" : "",
                            }}
                            onClick={handleClick}
                          >
                            + React
                          </div>
                          <div
                            className="styles__ExpertiseBadge-sc-s0b09o-12 GWGSk"
                            style={{
                              backgroundColor: isActiveTwo ? "#D4305F" : "",
                              color: isActiveTwo ? "white" : "",
                            }}
                            onClick={handleClickTwo}
                          >
                            + Node.js
                          </div>
                          <div
                            className="styles__ExpertiseBadge-sc-s0b09o-12 GWGSk"
                            style={{
                              backgroundColor: isActiveThree ? "#D4305F" : "",
                              color: isActiveThree ? "white" : "",
                            }}
                            onClick={handleClick3}
                          >
                            + Angular
                          </div>
                          <div
                            className="styles__ExpertiseBadge-sc-s0b09o-12 GWGSk"
                            style={{
                              backgroundColor: isActiveFour ? "#D4305F" : "",
                              color: isActiveFour ? "white" : "",
                            }}
                            onClick={handleClick4}
                          >
                            + Python
                          </div>
                          <div
                            className="styles__ExpertiseBadge-sc-s0b09o-12 GWGSk"
                            style={{
                              backgroundColor: isActiveFive ? "#D4305F" : "",
                              color: isActiveFive ? "white" : "",
                            }}
                            onClick={handleClick5}
                          >
                            + Swift
                          </div>
                          <div
                            className="styles__ExpertiseBadge-sc-s0b09o-12 GWGSk"
                            style={{
                              backgroundColor: isActiveSix ? "#D4305F" : "",
                              color: isActiveSix ? "white" : "",
                            }}
                            onClick={handleClick6}
                          >
                            + ReactNative
                          </div>
                          <div
                            className="styles__ExpertiseBadge-sc-s0b09o-12 GWGSk"
                            style={{
                              backgroundColor: isActiveSeven ? "#D4305F" : "",
                              color: isActiveSeven ? "white" : "",
                            }}
                            onClick={handleClick7}
                          >
                            + Android
                          </div>
                          <div
                            className="styles__ExpertiseBadge-sc-s0b09o-12 GWGSk"
                            style={{
                              backgroundColor: isActiveEight ? "#D4305F" : "",
                              color: isActiveEight ? "white" : "",
                            }}
                            onClick={handleClick8}
                          >
                            + IOS
                          </div>
                          <div
                            className="styles__ExpertiseBadge-sc-s0b09o-12 GWGSk"
                            style={{
                              backgroundColor: isActiveNine ? "#D4305F" : "",
                              color: isActiveNine ? "white" : "",
                            }}
                            onClick={handleClick9}
                          >
                            + Java
                          </div>
                          <div
                            className="styles__ExpertiseBadge-sc-s0b09o-12 GWGSk"
                            style={{
                              backgroundColor: isActiveTen ? "#D4305F" : "",
                              color: isActiveTen ? "white" : "",
                            }}
                            onClick={handleClick10}
                          >
                            + Ruby on Rails
                          </div>
                          <div
                            className="styles__ExpertiseBadge-sc-s0b09o-12 GWGSk"
                            style={{
                              backgroundColor: isActiveEleven ? "#D4305F" : "",
                              color: isActiveEleven ? "white" : "",
                            }}
                            onClick={handleClick11}
                          >
                            + Go
                          </div>
                          <div
                            className="styles__ExpertiseBadge-sc-s0b09o-12 GWGSk"
                            style={{
                              backgroundColor: isActiveTwelve ? "#D4305F" : "",
                              color: isActiveTwelve ? "white" : "",
                            }}
                            onClick={handleClick12}
                          >
                            + Vue.js
                          </div>
                          <div
                            className="styles__ExpertiseBadge-sc-s0b09o-12 GWGSk"
                            style={{
                              backgroundColor: isActiveThirteen
                                ? "#D4305F"
                                : "",
                              color: isActiveThirteen ? "white" : "",
                            }}
                            onClick={handleClick13}
                          >
                            + DevOps
                          </div>
                          <div
                            className="styles__ExpertiseBadge-sc-s0b09o-12 GWGSk"
                            style={{
                              backgroundColor: isActiveFourteen
                                ? "#D4305F"
                                : "",
                              color: isActiveFourteen ? "white" : "",
                            }}
                            onClick={handleClick14}
                          >
                            + PHP
                          </div>
                          <div
                            className="styles__ExpertiseBadge-sc-s0b09o-12 GWGSk"
                            style={{
                              backgroundColor: isActiveFifteen ? "#D4305F" : "",
                              color: isActiveFifteen ? "white" : "",
                            }}
                            onClick={handleClick15}
                          >
                            + MachineLearning
                          </div>
                          <div
                            className="styles__ExpertiseBadge-sc-s0b09o-12 GWGSk"
                            style={{
                              backgroundColor: isActiveSixteen ? "#D4305F" : "",
                              color: isActiveSixteen ? "white" : "",
                            }}
                            onClick={handleClick16}
                          >
                            + TypeScript
                          </div>
                          <div
                            className="styles__ExpertiseBadge-sc-s0b09o-12 GWGSk"
                            style={{
                              backgroundColor: isActiveSeventeen
                                ? "#D4305F"
                                : "",
                              color: isActiveSeventeen ? "white" : "",
                            }}
                            onClick={handleClick17}
                          >
                            + HTML
                          </div>
                          <div
                            className="styles__ExpertiseBadge-sc-s0b09o-12 GWGSk"
                            style={{
                              backgroundColor: isActiveEighteen
                                ? "#D4305F"
                                : "",
                              color: isActiveEighteen ? "white" : "",
                            }}
                            onClick={handleClick18}
                          >
                            + Javascript
                          </div>
                          <div
                            className="styles__ExpertiseBadge-sc-s0b09o-12 GWGSk"
                            style={{
                              backgroundColor: isActiveNineteen
                                ? "#D4305F"
                                : "",
                              color: isActiveNineteen ? "white" : "",
                            }}
                            onClick={handleClick19}
                          >
                            + Other
                          </div>
                          <div
                            className="styles__ExpertiseBadge-sc-s0b09o-12 GWGSk"
                            style={{
                              backgroundColor: isActiveTwenty ? "#D4305F" : "",
                              color: isActiveTwenty ? "white" : "",
                            }}
                            onClick={handleClick20}
                          >
                            + I am not sure
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Box>
          </Box>
          <Box
            sx={{
              pt: 7,
              width: "100%",
              margin: "0px auto",
              display: { xs: "block", md: "none" },
            }}
          >
            {/* <Typography
              variant="body1"
              gutterBottom
              fontWeight={"100"}
              color="#333"
              style={{ color: "#000",height:'120px' }}
            >
              Get a world-class team of the top 1% of remote software developers
              within 24 hours and accelerate your tech hiring process. Enjoy a
              2-week free trial and work with the best developer talent for two
              weeks without paying any upfront charges.
            </Typography> */}
            <Typography
              variant="h5"
              textAlign={"center"}
              fontWeight={"bold"}
              sx={{ marginTop: "45px" }}
            >
              Hire Your Dream Developer Team Now
            </Typography>
            <Box
              className="skill_contain"
              sx={{
                pt: 1,
                overflow: "scroll",
                position: "fixed",
                height: "280px",
              }}
            >
              <div className="styles__SkillsWrapper-sc-s0b09o-0 gIDjoE">
                <div className="styles__Container-sc-s0b09o-1 fmsQUU">
                  <div className="styles__SkillsCanvas-sc-s0b09o-2 fbJaPV">
                    <div className="styles__SkillsContent-sc-s0b09o-7 frFFiG">
                      <div className="styles__ExpertiseCombine-sc-s0b09o-8 hmZUhN">
                        <div
                          className="styles__FormGroup-sc-s0b09o-9 fGDCLS aos-item"
                          data-aos="fade-zoom-in"
                          data-aos-easing="ease-in-back"
                          data-aos-delay={200}
                          data-aos-offset={0}
                        />
                        <div
                          className="styles__ExploreBadgeGroup-sc-s0b09o-11 jVYgMv aos-item"
                          data-aos="fade-zoom-in"
                          data-aos-easing="ease-in-back"
                          data-aos-delay={300}
                          data-aos-offset={0}
                        />
                      </div>
                      <div className="styles__SkillsCombine-sc-s0b09o-14 bNCweA">
                        <label
                          className="styles__SkillsLabel-sc-s0b09o-15 gnogEc aos-item"
                          data-aos="fade-zoom-in"
                          data-aos-easing="ease-in-back"
                          data-aos-delay={400}
                          data-aos-offset={0}
                        >
                          Popular skills for <b>Developer:</b>
                        </label>
                        <div
                          className="styles__ExpertiseBadgeGroup-sc-s0b09o-16 cOijbV aos-item"
                          data-aos="fade-zoom-in"
                          data-aos-easing="ease-in-back"
                          data-aos-delay={500}
                          data-aos-offset={0}
                        >
                          <div
                            className="styles__ExpertiseBadge-sc-s0b09o-12 GWGSk"
                            style={{
                              backgroundColor: isActiveOne ? "#D4305F" : "",
                              color: isActiveOne ? "white" : "",
                            }}
                            onClick={handleClickOne}
                          >
                            + CSS
                          </div>
                          <div
                            className="styles__ExpertiseBadge-sc-s0b09o-12 GWGSk"
                            style={{
                              backgroundColor: isActive ? "#D4305F" : "",
                              color: isActive ? "white" : "",
                            }}
                            onClick={handleClick}
                          >
                            + React
                          </div>
                          <div
                            className="styles__ExpertiseBadge-sc-s0b09o-12 GWGSk"
                            style={{
                              backgroundColor: isActiveTwo ? "#D4305F" : "",
                              color: isActiveTwo ? "white" : "",
                            }}
                            onClick={handleClickTwo}
                          >
                            + Node.js
                          </div>
                          <div
                            className="styles__ExpertiseBadge-sc-s0b09o-12 GWGSk"
                            style={{
                              backgroundColor: isActiveThree ? "#D4305F" : "",
                              color: isActiveThree ? "white" : "",
                            }}
                            onClick={handleClick3}
                          >
                            + Angular
                          </div>
                          <div
                            className="styles__ExpertiseBadge-sc-s0b09o-12 GWGSk"
                            style={{
                              backgroundColor: isActiveFour ? "#D4305F" : "",
                              color: isActiveFour ? "white" : "",
                            }}
                            onClick={handleClick4}
                          >
                            + Python
                          </div>
                          <div
                            className="styles__ExpertiseBadge-sc-s0b09o-12 GWGSk"
                            style={{
                              backgroundColor: isActiveFive ? "#D4305F" : "",
                              color: isActiveFive ? "white" : "",
                            }}
                            onClick={handleClick5}
                          >
                            + Swift
                          </div>
                          <div
                            className="styles__ExpertiseBadge-sc-s0b09o-12 GWGSk"
                            style={{
                              backgroundColor: isActiveSix ? "#D4305F" : "",
                              color: isActiveSix ? "white" : "",
                            }}
                            onClick={handleClick6}
                          >
                            + ReactNative
                          </div>
                          <div
                            className="styles__ExpertiseBadge-sc-s0b09o-12 GWGSk"
                            style={{
                              backgroundColor: isActiveSeven ? "#D4305F" : "",
                              color: isActiveSeven ? "white" : "",
                            }}
                            onClick={handleClick7}
                          >
                            + Android
                          </div>
                          <div
                            className="styles__ExpertiseBadge-sc-s0b09o-12 GWGSk"
                            style={{
                              backgroundColor: isActiveEight ? "#D4305F" : "",
                              color: isActiveEight ? "white" : "",
                            }}
                            onClick={handleClick8}
                          >
                            + IOS
                          </div>
                          <div
                            className="styles__ExpertiseBadge-sc-s0b09o-12 GWGSk"
                            style={{
                              backgroundColor: isActiveNine ? "#D4305F" : "",
                              color: isActiveNine ? "white" : "",
                            }}
                            onClick={handleClick9}
                          >
                            + Java
                          </div>
                          <div
                            className="styles__ExpertiseBadge-sc-s0b09o-12 GWGSk"
                            style={{
                              backgroundColor: isActiveTen ? "#D4305F" : "",
                              color: isActiveTen ? "white" : "",
                            }}
                            onClick={handleClick10}
                          >
                            + Ruby on Rails
                          </div>
                          <div
                            className="styles__ExpertiseBadge-sc-s0b09o-12 GWGSk"
                            style={{
                              backgroundColor: isActiveEleven ? "#D4305F" : "",
                              color: isActiveEleven ? "white" : "",
                            }}
                            onClick={handleClick11}
                          >
                            + Go
                          </div>
                          <div
                            className="styles__ExpertiseBadge-sc-s0b09o-12 GWGSk"
                            style={{
                              backgroundColor: isActiveTwelve ? "#D4305F" : "",
                              color: isActiveTwelve ? "white" : "",
                            }}
                            onClick={handleClick12}
                          >
                            + Vue.js
                          </div>
                          <div
                            className="styles__ExpertiseBadge-sc-s0b09o-12 GWGSk"
                            style={{
                              backgroundColor: isActiveThirteen
                                ? "#D4305F"
                                : "",
                              color: isActiveThirteen ? "white" : "",
                            }}
                            onClick={handleClick13}
                          >
                            + DevOps
                          </div>
                          <div
                            className="styles__ExpertiseBadge-sc-s0b09o-12 GWGSk"
                            style={{
                              backgroundColor: isActiveFourteen
                                ? "#D4305F"
                                : "",
                              color: isActiveFourteen ? "white" : "",
                            }}
                            onClick={handleClick14}
                          >
                            + PHP
                          </div>
                          <div
                            className="styles__ExpertiseBadge-sc-s0b09o-12 GWGSk"
                            style={{
                              backgroundColor: isActiveFifteen ? "#D4305F" : "",
                              color: isActiveFifteen ? "white" : "",
                            }}
                            onClick={handleClick15}
                          >
                            + MachineLearning
                          </div>
                          <div
                            className="styles__ExpertiseBadge-sc-s0b09o-12 GWGSk"
                            style={{
                              backgroundColor: isActiveSixteen ? "#D4305F" : "",
                              color: isActiveSixteen ? "white" : "",
                            }}
                            onClick={handleClick16}
                          >
                            + TypeScript
                          </div>
                          <div
                            className="styles__ExpertiseBadge-sc-s0b09o-12 GWGSk"
                            style={{
                              backgroundColor: isActiveSeventeen
                                ? "#D4305F"
                                : "",
                              color: isActiveSeventeen ? "white" : "",
                            }}
                            onClick={handleClick17}
                          >
                            + HTML
                          </div>
                          <div
                            className="styles__ExpertiseBadge-sc-s0b09o-12 GWGSk"
                            style={{
                              backgroundColor: isActiveEighteen
                                ? "#D4305F"
                                : "",
                              color: isActiveEighteen ? "white" : "",
                            }}
                            onClick={handleClick18}
                          >
                            + Javascript
                          </div>
                          <div
                            className="styles__ExpertiseBadge-sc-s0b09o-12 GWGSk"
                            style={{
                              backgroundColor: isActiveNineteen
                                ? "#D4305F"
                                : "",
                              color: isActiveNineteen ? "white" : "",
                            }}
                            onClick={handleClick19}
                          >
                            + Other
                          </div>
                          <div
                            className="styles__ExpertiseBadge-sc-s0b09o-12 GWGSk"
                            style={{
                              backgroundColor: isActiveTwenty ? "#D4305F" : "",
                              color: isActiveTwenty ? "white" : "",
                            }}
                            onClick={handleClick20}
                          >
                            + I am not sure
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Box>
          </Box>
        </>
      ),
    },
    {
      label: (
        <>
          <Box sx={{ pt: 2, textAlign: "center" }}>
            <Typography>
              <img
                src={logo}
                width={250}
                height={250}
                style={{ marginTop: "-100px" }}
              />
            </Typography>
            <Box
              sx={{
                pt: 4,
                textAlign: "center",
                display: { xs: "none", md: "block" },
              }}
            >
              <Typography variant="h4" textAlign={"center"} fontWeight={"bold"}>
                How many team members do you require?
              </Typography>
            </Box>
            <br />
          </Box>
        </>
      ),
      description: (
        <>
          <Box
            sx={{
              pt: 12,
              width: "100%",
              margin: "0px auto",
              display: { xs: "none", md: "block" },
            }}
          >
            <Typography
              variant="h5"
              gutterBottom
              fontWeight={"600"}
              color="#ccc"
            >
              We have <span style={{ color: "#6610F2" }}>25+</span> engineers
              matching your criteria!
            </Typography>
            <Box
              sx={{
                width: "100%",
                margin: "0px auto",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "auto",
                marginRight: "auto",
                pt: 12,
              }}
            >
              <Typography>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={{ xs: 1, sm: 2, md: 4 }}
                  sx={{
                    width: "100%",
                    margin: "0px auto",
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  <MultiActionAreaCard
                    src={
                      "https://d29fhpw069ctt2.cloudfront.net/icon/image/73380/preview.svg"
                    }
                    title="One Engineer"
                    style={{
                      border: selCard ? "1px solid #ccc" : "",
                      background: selCard ? "#EEF1FC" : "",
                      // textDecoration: selCard ? "overline" : "",
                    }}
                    onClick={clickCard}
                  />
                  <MultiActionAreaCard
                    src={
                      "https://www.fiscal.treasury.gov/images/illustrative-icons/data-v1.svg"
                    }
                    title="A Small Team"
                    style={{
                      border: selCardOne ? "1px solid #ccc" : "",
                      background: selCardOne ? "#EEF1FC" : "",
                      // textDecoration: selCardOne ? "overline" : "",
                    }}
                    onClick={clickCardOne}
                  />
                  <MultiActionAreaCard
                    src={
                      "https://cdn4.iconfinder.com/data/icons/business-management-77/64/Big_Business-512.png"
                    }
                    title="A Large Team"
                    style={{
                      border: selCardThree ? "1px solid #ccc" : "",
                      background: selCardThree ? "#EEF1FC" : "",
                      // textDecoration: selCardThree ? "overline" : "",
                    }}
                    onClick={clickCardThree}
                  />
                  <MultiActionAreaCard
                    src={
                      "https://www.nicepng.com/png/detail/164-1647456_vaporwave-clipart-sad-sad-faces-black-and-white.png"
                    }
                    title="I am not sure"
                    style={{
                      border: selCardTwo ? "1px solid #ccc" : "",
                      background: selCardTwo ? "#EEF1FC" : "",
                      // textDecoration: selCardTwo ? "overline" : "",
                    }}
                    onClick={clickCardTwo}
                  />
                </Stack>
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              pt: 4,
              width: "100%",
              margin: "0px auto",
              display: { xs: "block", md: "none" },
              marginTop: "29px",
              overflow: "scroll",
              height: "490px",
            }}
          >
            <Typography variant="h5" textAlign={"center"} fontWeight={"bold"}>
              How many team members do you require?
            </Typography>
            <br />
            <Typography
              variant="h5"
              gutterBottom
              fontWeight={"600"}
              color="#ccc"
            >
              We have <span style={{ color: "#6610F2" }}>25+</span> engineers
              matching your criteria!
            </Typography>
            <Box
              sx={{
                width: "100%",
                margin: "0px auto",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "auto",
                marginRight: "auto",
                pt: 6,
              }}
            >
              <Typography>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={{ xs: 1, sm: 2, md: 4 }}
                  sx={{
                    width: "100%",
                    margin: "0px auto",
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  <MultiActionAreaCard
                    src={
                      "https://d29fhpw069ctt2.cloudfront.net/icon/image/73380/preview.svg"
                    }
                    title="One Engineer"
                    style={{
                      border: selCard ? "1px solid #ccc" : "",
                      background: selCard ? "#EEF1FC" : "",
                      // textDecoration: selCard ? "overline" : "",
                    }}
                    onClick={clickCard}
                  />
                  <MultiActionAreaCard
                    src={
                      "https://www.fiscal.treasury.gov/images/illustrative-icons/data-v1.svg"
                    }
                    title="A Small Team"
                    style={{
                      border: selCardOne ? "1px solid #ccc" : "",
                      background: selCardOne ? "#EEF1FC" : "",
                      // textDecoration: selCardOne ? "overline" : "",
                    }}
                    onClick={clickCardOne}
                  />
                  <MultiActionAreaCard
                    src={
                      "https://cdn4.iconfinder.com/data/icons/business-management-77/64/Big_Business-512.png"
                    }
                    title="A Large Team"
                    style={{
                      border: selCardThree ? "1px solid #ccc" : "",
                      background: selCardThree ? "#EEF1FC" : "",
                      // textDecoration: selCardThree ? "overline" : "",
                    }}
                    onClick={clickCardThree}
                  />
                  <MultiActionAreaCard
                    src={
                      "https://www.nicepng.com/png/detail/164-1647456_vaporwave-clipart-sad-sad-faces-black-and-white.png"
                    }
                    title="I am not sure"
                    style={{
                      border: selCardTwo ? "1px solid #ccc" : "",
                      background: selCardTwo ? "#EEF1FC" : "",
                      // textDecoration: selCardTwo ? "overline" : "",
                    }}
                    onClick={clickCardTwo}
                  />
                </Stack>
              </Typography>
            </Box>
          </Box>
        </>
      ),
    },
    {
      label: (
        <>
          <Box sx={{ pt: 2, textAlign: "center" }}>
            <Typography>
              <img
                src={logo}
                width={250}
                height={250}
                style={{ marginTop: "-100px" }}
              />
            </Typography>
            <Box
              sx={{
                pt: 4,
                textAlign: "center",
                display: { xs: "none", md: "block" },
              }}
            >
              <Typography variant="h4" textAlign={"center"} fontWeight={"bold"}>
                When do you need the developer to start?
              </Typography>
            </Box>
            <br />
          </Box>
        </>
      ),
      description: (
        <>
          <Box
            sx={{
              pt: 12,
              width: "100%",
              margin: "0px auto",
              display: { xs: "none", md: "block" },
            }}
          >
            <Typography
              variant="h5"
              gutterBottom
              fontWeight={"600"}
              color="#ccc"
            >
              Decide when you will start your project together!
            </Typography>
            <Box
              sx={{
                width: "100%",
                margin: "0px auto",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "auto",
                marginRight: "auto",
                pt: 12,
              }}
            >
              <Typography>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={{ xs: 1, sm: 2, md: 4 }}
                  sx={{
                    width: "100%",
                    margin: "0px auto",
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  <MultiActionAreaCard
                    src={
                      "https://cdn-icons-png.flaticon.com/512/4216/4216456.png"
                    }
                    title="Immediately"
                    style={{
                      border: selsCard ? "1px solid #ccc" : "",
                      background: selsCard ? "#EEF1FC" : "",
                      // textDecoration: selsCard ? "overline" : "",
                    }}
                    onClick={clicksCard}
                  />
                  <MultiActionAreaCard
                    src={
                      "https://cdn-icons-png.flaticon.com/512/9082/9082688.png"
                    }
                    title="In 1 to 2 weeks"
                    style={{
                      border: selsCardOne ? "1px solid #ccc" : "",
                      background: selsCardOne ? "#EEF1FC" : "",
                      // textDecoration: selsCardOne ? "overline" : "",
                    }}
                    onClick={clicksCardOne}
                  />
                  <MultiActionAreaCard
                    src={
                      "https://cdn3.iconfinder.com/data/icons/agile-3-flat-style/64/Agile-3_-_Flat_Style_-_9-18-512.png"
                    }
                    title=">2 weeks from now  "
                    style={{
                      border: selsCardThree ? "1px solid #ccc" : "",
                      background: selsCardThree ? "#EEF1FC" : "",
                      // textDecoration: selsCardThree ? "overline" : "",
                    }}
                    onClick={clicksCardThree}
                  />
                  <MultiActionAreaCard
                    title="I am not sure"
                    src={
                      "https://www.nicepng.com/png/detail/164-1647456_vaporwave-clipart-sad-sad-faces-black-and-white.png"
                    }
                    style={{
                      border: selsCardTwo ? "1px solid #ccc" : "",
                      background: selsCardTwo ? "#EEF1FC" : "",
                      textDecoration: selsCardTwo ? "overline" : "",
                    }}
                    onClick={clicksCardTwo}
                  />
                </Stack>
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              pt: 4,
              width: "100%",
              margin: "0px auto",
              display: { xs: "block", md: "none" },
              marginTop: "29px",
              overflow: "scroll",
              height: "490px",
            }}
          >
            {/* <Typography
              variant="h5"
              gutterBottom
              fontWeight={"600"}
              color="#ccc"
            >
              Decide when you will start your project together!
            </Typography> */}
            <Typography variant="h5" textAlign={"center"} fontWeight={"bold"}>
              When do you need the developer to start?
            </Typography>
            <br />
            <Typography
              variant="h5"
              gutterBottom
              fontWeight={"600"}
              color="#ccc"
            >
              Decide when you will start your project together!
            </Typography>
            <Box
              sx={{
                width: "100%",
                margin: "0px auto",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "auto",
                marginRight: "auto",
                pt: 6,
              }}
            >
              <Typography>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={{ xs: 1, sm: 2, md: 4 }}
                  sx={{
                    width: "100%",
                    margin: "0px auto",
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  <MultiActionAreaCard
                    src={
                      "https://cdn-icons-png.flaticon.com/512/4216/4216456.png"
                    }
                    title="Immediately"
                    style={{
                      border: selsCard ? "1px solid #ccc" : "",
                      background: selsCard ? "#EEF1FC" : "",
                      // textDecoration: selsCard ? "overline" : "",
                    }}
                    onClick={clicksCard}
                  />
                  <MultiActionAreaCard
                    src={
                      "https://cdn-icons-png.flaticon.com/512/9082/9082688.png"
                    }
                    title="In 1 to 2 weeks"
                    style={{
                      border: selsCardOne ? "1px solid #ccc" : "",
                      background: selsCardOne ? "#EEF1FC" : "",
                      // textDecoration: selsCardOne ? "overline" : "",
                    }}
                    onClick={clicksCardOne}
                  />
                  <MultiActionAreaCard
                    src={
                      "https://cdn3.iconfinder.com/data/icons/agile-3-flat-style/64/Agile-3_-_Flat_Style_-_9-18-512.png"
                    }
                    title=">2 weeks from now  "
                    style={{
                      border: selsCardThree ? "1px solid #ccc" : "",
                      background: selsCardThree ? "#EEF1FC" : "",
                      // textDecoration: selsCardThree ? "overline" : "",
                    }}
                    onClick={clicksCardThree}
                  />
                  <MultiActionAreaCard
                    title="I am not sure"
                    src={
                      "https://www.nicepng.com/png/detail/164-1647456_vaporwave-clipart-sad-sad-faces-black-and-white.png"
                    }
                    style={{
                      border: selsCardTwo ? "1px solid #ccc" : "",
                      background: selsCardTwo ? "#EEF1FC" : "",
                      textDecoration: selsCardTwo ? "overline" : "",
                    }}
                    onClick={clicksCardTwo}
                  />
                </Stack>
              </Typography>
            </Box>
          </Box>
        </>
      ),
    },
    {
      label: (
        <>
          <Box sx={{ pt: 2, textAlign: "center" }}>
            <Typography>
              <img
                src={logo}
                width={250}
                height={250}
                style={{ marginTop: "-100px" }}
              />
            </Typography>
          </Box>
        </>
      ),
      description: (
        <>
          <Box
            sx={{
              pt: 1,
              width: "100%",
              margin: "0px auto",
              marginTop: "2px",
              overflowY: "scroll",
              height: "570px",  
            }}
            className="hideScroll"
          >
            <StartSignUp handleNext={handleNext} />
          </Box>
        </>
      ),
    },
    {
      label: (
        <>
          <Box sx={{ pt: 2, textAlign: "center" }}>
            <Typography>
              <img
                src={logo}
                width={250}
                height={250}
                style={{ marginTop: "-100px" }}
              />
            </Typography>
          </Box>
        </>
      ),
      description: (
        <>
          <Box
          sx={{
              pt: 1,
              // width: "100%",
              margin: "0px auto",
              marginTop: "2px",
              overflowY: "scroll",
              width:"920px",
              height: "570px",  
            }}
            className="hideScroll"
          >
            <StartSchedule />

          </Box>
        </>
      ),
    },
  ];

  const maxSteps = steps.length;

  return (
    <div
      // className="stepContainer"
      sx={{
        maxWidth: "100%",
        flexGrow: 1,
        textAlign: "center",
        margin: "0px auto",
        // position:'fixed !important',
        // overflow:'scroll !important',
        marginLeft: "auto",
        marginRight: "auto",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        marginTop: "55%",
        overflow: "hidden !important",
      }}
    >
      <Box
        // sx={{   position:'fixed',
        //   overflow:'scroll', marginLeft: "-25%",}}
        sx={{ overflow: "hidden !important" }}
      >
        <Paper
          square
          elevation={0}
          sx={{
            display: "flex",
            justifyContent: "center",
            height: 50,
            backgroundColor: "#FFFBF0",
            maxWidth: 1500,
            margin: "0px auto",
            boxShadow: "10px 5px 10px #eee",
          }}
        >
          <Typography>{steps[activeStep].label}</Typography>
        </Paper>
        <Box
          sx={{
            height: 455,
            maxWidth: 1200,
            width: "100%",
            p: 2,
            display: "flex",
            justifyContent: "center",
            margin: "0px auto",
            // overflow:'scroll',
            backgroundColor: "#FFFBF0",
          }}
        >
          {steps[activeStep].description}
        </Box>
        <Box sx={{ pt: 16, backgroundColor: "#FFFBF0" }}>
          <MobileStepper
            variant="text"
            sx={{ backgroundColor: "#FFFBF0", boxShadow: "10px 5px 10px #eee" }}
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                Next
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </Button>
            }
          />
        </Box>
      </Box>
    </div>
  );
}

export default function Hire() {
  return (
    <div>
      <Container
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          textAlign: "center",
        }}
      >
        <TextMobileStepper />
      </Container>
    </div>
  );
}
