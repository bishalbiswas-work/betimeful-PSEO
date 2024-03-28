import React from "react";
import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { Container } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Stack from "@mui/material/Stack";

import FavoriteIcon from "@mui/icons-material/Favorite";
import FileUploadIcon from "@mui/icons-material/FileUpload";
// import texts from "./data/texts.json";
import quotesData from "./data/texts.json";
import { Link } from "react-router-dom";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
import { styled } from "@mui/material/styles";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

// import htmlContent from "./components/side-mobile-section.html";

function Quotes() {
  const location = useLocation();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const categories = Object.keys(quotesData);
  // console.log(categories);
  // State to track the selected category
  const [selectedCategory, setSelectedCategory] = useState(
    "you've got this quotes"
  );
  const quotesToDisplay = quotesData[selectedCategory] || [];
  var path = "";
  useEffect(() => {
    // Extract the path from the URL, remove the leading slash and hyphens
    path = location.pathname.replace(/^\//, "").replace(/-/g, " ");

    // Set the initial state based on the modified path
    setSelectedCategory(path || "you've got this quotes");
  }, [location.pathname]);

  // Function to handle category selection, e.g., from a button or dropdown
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Filter the quotes based on the selected category

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  const handleChange = (event, newValue) => {
    // newValue will be the categoryUrl, we need to find the original category
    const newCategory = categories.find(
      (category) => category.replace(/\s+/g, "-") === newValue
    );
    setSelectedCategory(newCategory);
  };

  // Find the value for the current selected tab
  const currentTabValue = selectedCategory.replace(/\s+/g, "-");

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={8} md={8} lg={8} xl={8}>
          <Box
            sx={{
              // maxWidth: 800,

              flexGrow: 1,
              // background: "green",
            }}
          >
            {" "}
            <div>
              <Grid container spacing={2}>
                <Grid item xs={9}>
                  {/* <Button
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, #FF6FD8, #3813C2)", // Replace with the actual gradient colors
                      color: "white",
                      padding: "10px 20px", // Adjust padding as needed
                      borderRadius: "10px", // Adjust border-radius as needed
                      textTransform: "none", // Prevents uppercase transformation
                      boxShadow: "none", // No shadow for the button
                      border: "none", // No border
                      // Add more styling as needed
                    }}
                  >
                    BeTimeful Quotes
                  </Button> */}
                  <Button
                    style={{
                      position: "relative",
                      // width: "100%",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      textAlign: "left",
                      fontSize: "0.88rem",
                      color: "#fff",
                      fontFamily: "Lato",
                    }}
                  >
                    <div
                      style={{
                        borderRadius: "6px",
                        background:
                          "linear-gradient(-45deg, #fbe18a, #fcbb45 21%, #f75274 38%, #d53692 52%, #8f39ce 74%, #5b4fe9)",
                        flexShrink: "0",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "0.38rem 0.75rem",
                      }}
                    >
                      <div
                        style={{
                          position: "relative",
                          lineHeight: "1.25rem",
                          fontWeight: "500",
                          textTransform: "none", // Explicitly setting text transform to none
                        }}
                      >
                        BeTimeful Quotes
                      </div>
                    </div>
                  </Button>
                </Grid>
                {/* <Grid item xs={6}>
              <Item>xs=8</Item>
            </Grid> */}
                <Grid item xs={3}>
                  <div>Share this quote on:</div>
                </Grid>
                <Grid item xs={8}>
                  {/* <Typography sx={{ fontSize: "22px", fontWeight: "700" }}>
                    {selectedCategory.charAt(0).toUpperCase() +
                      selectedCategory.slice(1)}
                  </Typography> */}
                  <h1 style={{ fontSize: "22px", fontWeight: "700" }}>
                    {selectedCategory.charAt(0).toUpperCase() +
                      selectedCategory.slice(1)}
                  </h1>
                </Grid>
                <Grid
                  item
                  xs={4}
                  // sx={{ display: "flex", justifyContent: "end" }}
                >
                  {/* <Item>xs=8</Item> */}
                  <IconButton>
                    <img src="/static/images/instagram.png" />
                  </IconButton>
                  <IconButton>
                    <img src="/static/images/facebook.png" />
                  </IconButton>
                  <IconButton>
                    <img src="/static/images/linkedin.png" />
                  </IconButton>
                  <IconButton>
                    <img src="/static/images/twitter.png" />
                  </IconButton>
                </Grid>
              </Grid>
            </div>
            <Paper
              square
              elevation={0}
              sx={{
                display: "flex",
                alignItems: "center",
                height: 50,
                pl: 2,
                bgcolor: "background.default",
              }}
            ></Paper>
            <AutoPlaySwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
            >
              {quotesToDisplay.map((quoteItem, index) => (
                <Box
                  key={index}
                  sx={{
                    height: "200px",
                    width: "90%",
                    display: "flex", // Enable Flexbox
                    alignItems: "center", // Vertically center the content
                    justifyContent: "center", // Horizontally center the content
                    textAlign: "center", // Ensure the text itself is centered
                    borderRadius: "10px",
                    background: "#292843",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  <Box>
                    <p
                      style={{
                        paddingLeft: "50px",
                        paddingRight: "50px",
                        fontSize: "22px",
                        color: "white",
                      }}
                    >
                      "{quoteItem.quote}"{/* - {quoteItem.author} */}
                    </p>
                    <span
                      style={{
                        // paddingLeft: "50px",
                        paddingRight: "50px",
                        fontSize: "18px",
                        color: "white",
                        textAlign: "right",
                      }}
                    >
                      - {quoteItem.author}
                    </span>
                  </Box>
                </Box>
              ))}
            </AutoPlaySwipeableViews>
            {/* <div style={{ marginTop: "25px" }}>
          <Stack direction="row" spacing={2}>
            <Button
              sx={{ fontSize: "10px", whiteSpace: "nowrap", color: "gray" }}
            >
              Daily Motivation
            </Button>
            <Button
              sx={{
                fontSize: "12px",
                whiteSpace: "nowrap",
                color: "black",
                borderBottom: "2px solid #7C3AED", // Adds a blue line under the button
              }}
            >
              Happiness & Gratitude
            </Button>
          </Stack>
        </div> */}
            {/* <div
          style={{ maxWidth: "800px", overflowX: "auto", marginTop: "25px" }}
        >
          <Stack direction="row" spacing={2}>
            {categories.map((category) => (
              <Button
                key={category}
                component={Link}
                to={`/${category}`} // Link to the category
                sx={{
                  fontSize: "12px",
               
                  color: "black",
                  borderBottom:
                    category === "you've got this quotes"
                      ? "2px solid #7C3AED"
                      : "none",
                }}
              >
                {category.replace(/-/g, " ")}{" "}
              
              </Button>
            ))}
          </Stack>
        </div> */}
            <div
              style={{
                maxWidth: "800px",
                overflowX: "auto",
                marginTop: "25px",
                // Custom scrollbar styles:
                // scrollbarWidth: "thin", // For Firefox
                // msOverflowStyle: "none", // For Internet Explorer 10+
                // "::-webkit-scrollbar": {
                //   width: "4px", // Scrollbar width for webkit browsers
                // },
              }}
            >
              {/* <Stack direction="row" spacing={2}>
                {categories.map((category) => {
                  const categoryUrl = category.replace(/\s+/g, "-");
                  const isSelected =
                    categoryUrl === selectedCategory.replace(/\s+/g, "-");

                  return (
                    <Button
                      key={category}
                      component="a"
                      href={`/${categoryUrl}`} // Using href will cause a full page reload
                      sx={{
                        fontSize: "12px",
                        textOverflow: "ellipsis", // Add ellipsis for text that doesn't fit
                        color: "black",
                        borderBottom: isSelected ? "2px solid #7C3AED" : "none",
                      }}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category.replace(/-/g, " ")}
                    </Button>
                  );
                })}
              </Stack> */}
              <Box sx={{ width: "100%" }}>
                <Tabs
                  value={currentTabValue}
                  onChange={handleChange}
                  variant="scrollable"
                  scrollButtons="auto"
                  aria-label="category tabs"
                  TabIndicatorProps={{
                    style: {
                      backgroundColor: "#7C3AED", // Set the color for the indicator line
                    },
                  }}
                >
                  {categories.map((category) => {
                    const categoryUrl = category.replace(/\s+/g, "-");
                    const isSelected =
                      categoryUrl === selectedCategory.replace(/\s+/g, "-");
                    return (
                      <Tab
                        key={categoryUrl}
                        value={categoryUrl}
                        label={category}
                        onClick={() => {
                          const categoryUrl = category.replace(/\s+/g, "-");
                          window.location.href = `/${categoryUrl}`; // This will cause a full page reload to the category URL
                        }}
                        sx={{
                          "&.Mui-selected": {
                            color: isSelected ? "black" : "gray",
                          },
                        }}
                        wrapped={category.length > 10} // Use wrapped prop based on your needs
                      />
                    );
                  })}
                </Tabs>
              </Box>
            </div>
            <div
              style={{
                display: "flex", // Enable Flexbox for the outer container
                flexWrap: "wrap", // Allow items to wrap onto the next line
                justifyContent: "center", // Center items horizontally
                alignItems: "center", // Center items vertically
                gap: "20px", // Add some space between items
                padding: "20px", // Add padding around the container
              }}
            >
              {quotesToDisplay.map((quoteItem, index) => (
                <Box
                  key={index}
                  sx={{
                    height: "200px",
                    width: "300px",
                    display: "flex", // Enable Flexbox
                    alignItems: "center", // Vertically center the content
                    justifyContent: "center", // Horizontally center the content
                    textAlign: "center", // Ensure the text itself is centered
                    borderRadius: "10px",
                    background: "#292843",
                    color: "#ffffff", // Optional: change text color for better contrast
                  }}
                >
                  <Box
                    sx={{
                      padding: "10px",
                      // height: "200px",

                      justifyContent: "end",
                    }}
                  >
                    <p style={{ margin: 0, fontSize: "14px" }}>
                      {" "}
                      {/* Remove default paragraph margin */}"{quoteItem.quote}"
                      -{" "}
                    </p>
                    <p style={{ fontSize: "12px" }}> {quoteItem.author}</p>
                    <div>
                      <Button
                        sx={{ background: "#28231D", marginRight: "5px" }}
                      >
                        <FavoriteIcon sx={{ color: "red" }} />
                      </Button>
                      <Button sx={{ background: "#28231D" }}>
                        <FileUploadIcon sx={{ color: "white" }} />
                      </Button>
                    </div>
                  </Box>
                </Box>
              ))}
            </div>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
          <div
            style={{ marginLeft: "15px", marginRight: "auto", width: "100%" }}
          >
            {/* <div dangerouslySetInnerHTML={{ __html: htmlContent }} /> */}
            {mobiledisplay()}
          </div>
        </Grid>
      </Grid>

      {/* <Box>sdfsdf</Box> */}
    </Container>
  );
}

const mobiledisplay = () => {
  return (
    <>
      <div
        style={{
          position: "relative",
          backgroundColor: "#fff",
          width: "100%",
          height: "39.44rem",
          overflow: "hidden",
          textAlign: "left",
          fontSize: "0.88rem",
          color: "#263238",
          fontFamily: "Lato",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "2.44rem",
            left: "1.88rem",
            borderRadius: "16px",
            backgroundColor: "#fff",
            boxShadow: "1px 1px 20px rgba(0, 0, 0, 0.12)",
            border: "1px solid rgba(0, 0, 0, 0.05)",
            boxSizing: "border-box",
            width: "18.63rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "1rem",
            gap: "1rem",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "0.13rem",
            }}
          >
            <div
              style={{
                alignSelf: "stretch",
                position: "relative",
                lineHeight: "170%",
              }}
            >
              <b>Don’t just get inspired, live an inspiring life</b>
              <span style={{ fontWeight: "600" }}>{` `}</span>
            </div>
            <div
              style={{
                alignSelf: "stretch",
                position: "relative",
                fontSize: "0.69rem",
                lineHeight: "150%",
                color: "#455a64",
              }}
            >
              Download the BeTimeful app for free to live a less scrolling and
              more living life!
            </div>
          </div>
          <div
            style={{
              position: "relative",
              width: "16rem",
              height: "14.94rem",
              overflow: "hidden",
              flexShrink: "0",
              fontSize: "0.69rem",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "0rem",
                left: "0rem",
                borderRadius: "8px",
                background:
                  "linear-gradient(135deg, rgba(124, 58, 237, 0.2), rgba(88, 33, 182, 0.2))",
                width: "16rem",
                height: "20.48rem",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "0.56rem",
                left: "calc(50% - 108px)",
                width: "13.44rem",
                height: "23.31rem",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "0.95rem",
                  left: "0.32rem",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "0.32rem",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "12.8rem",
                    height: "26.35rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: "0",
                  }}
                >
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      position: "absolute",
                      left: "0rem",
                      top: "-6.7rem",
                      transform: "scale(1.454)",
                    }}
                    alt=""
                    src="/static/images/iphone-14-pro@2x.png"
                  />
                </div>
                <div
                  style={{
                    margin: "0",
                    position: "absolute",
                    top: "7.73rem",
                    left: "calc(50% - 116px)",
                    borderRadius: "8.44px",
                    backgroundColor: "rgba(255, 255, 255, 0.5)",
                    backdropFilter: "blur(100px)",
                    width: "14.5rem",
                    flexShrink: "0",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    padding: "0.4rem",
                    boxSizing: "border-box",
                    gap: "0.4rem",
                    zIndex: "1",
                  }}
                >
                  <div
                    style={{
                      borderRadius: "6.24px",
                      backgroundColor: "#fff",
                      flexShrink: "0",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      padding: "0.16rem 0.19rem",
                    }}
                  >
                    <div
                      style={{
                        flexShrink: "0",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "flex-start",
                      }}
                    >
                      <div
                        style={{
                          flexShrink: "0",
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                        }}
                      >
                        <img
                          style={{
                            position: "relative",
                            borderRadius: "50%",
                            width: "1.17rem",
                            height: "1.17rem",
                            objectFit: "cover",
                          }}
                          alt=""
                          src="/static/images/ellipse-76@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      flex: "1",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      gap: "0.13rem",
                    }}
                  >
                    <b
                      style={{
                        alignSelf: "stretch",
                        position: "relative",
                        letterSpacing: "-0.01em",
                        background:
                          "linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), rgba(255, 255, 255, 0.5)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      Your daily spark ✨
                    </b>
                    <div
                      style={{
                        alignSelf: "stretch",
                        position: "relative",
                        fontSize: "0.5rem",
                        lineHeight: "150%",
                        fontWeight: "600",
                        background:
                          "linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), rgba(255, 255, 255, 0.2)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      Embrace today's challenges as opportunities, and watch how
                      your strength unfolds. You've got this!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            top: "25.63rem",
            left: "2.19rem",
            borderRadius: "16px",
            backgroundColor: "#fff",
            boxShadow: "1px 1px 20px rgba(0, 0, 0, 0.12)",
            border: "1px solid rgba(0, 0, 0, 0.05)",
            boxSizing: "border-box",
            width: "18rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "1rem",
            gap: "1.25rem",
            textAlign: "center",
            fontSize: "0.75rem",
            color: "rgba(38, 50, 56, 0.75)",
            marginTop: "20px",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              position: "relative",
              letterSpacing: "0.01em",
              lineHeight: "150%",
              fontWeight: "600",
            }}
          >
            Simply scan this QR code to get the App 📱
          </div>
          <div
            style={{
              alignSelf: "stretch",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "2rem",
              fontSize: "0.57rem",
              color: "#263238",
            }}
          >
            <div
              style={{
                flexShrink: "0",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "0.75rem",
              }}
            >
              <div
                style={{
                  borderRadius: "2.9px",
                  backgroundColor: "rgba(140, 82, 255, 0.5)",
                  boxShadow:
                    "0px 1.4204562902450562px 4.62px rgba(0, 0, 0, 0.06), 0px 6.283545970916748px 15.23px rgba(0, 0, 0, 0.06)",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "0.32rem",
                }}
              >
                <img
                  style={{
                    position: "relative",
                    width: "4.35rem",
                    height: "4.35rem",
                    objectFit: "cover",
                  }}
                  alt=""
                  src="/static/images/frame-9@2x.png"
                />
              </div>
              <div
                style={{
                  flexShrink: "0",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "0.26rem",
                }}
              >
                <img
                  style={{
                    position: "relative",
                    width: "0.83rem",
                    height: "0.83rem",
                    overflow: "hidden",
                    flexShrink: "0",
                    objectFit: "cover",
                  }}
                  alt=""
                  src="/static/images/icons8android-1@2x.png"
                />
                <div
                  style={{
                    position: "relative",
                    letterSpacing: "0.01em",
                    lineHeight: "150%",
                    fontWeight: "600",
                  }}
                >
                  For Andriod
                </div>
              </div>
            </div>
            <div
              style={{
                flexShrink: "0",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "0.75rem",
              }}
            >
              <div
                style={{
                  borderRadius: "2.9px",
                  backgroundColor: "rgba(140, 82, 255, 0.5)",
                  boxShadow:
                    "0px 1.4204564094543457px 4.62px rgba(0, 0, 0, 0.06), 0px 6.283546447753906px 15.23px rgba(0, 0, 0, 0.06)",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "0.32rem",
                }}
              >
                <img
                  style={{
                    position: "relative",
                    width: "4.35rem",
                    height: "4.35rem",
                    objectFit: "cover",
                  }}
                  alt=""
                  src="/static/images/frame-9@2x.png"
                />
              </div>
              <div
                style={{
                  flexShrink: "0",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "0.26rem",
                }}
              >
                <img
                  style={{
                    position: "relative",
                    width: "0.83rem",
                    height: "0.83rem",
                    overflow: "hidden",
                    flexShrink: "0",
                    objectFit: "cover",
                  }}
                  alt=""
                  src="/static/images/icons8apple-1@2x.png"
                />
                <div
                  style={{
                    position: "relative",
                    letterSpacing: "0.01em",
                    lineHeight: "150%",
                    fontWeight: "600",
                  }}
                >
                  For iOS
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quotes;
