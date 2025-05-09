import { Box, Grid, Typography } from "@mui/material";
import circlesImage from "../assets/images/circles.png";
import computerImage from "../assets/images/computer.png";
import OutlineButton from "../components/Buttons/OutlineButton.jsx";

const SecondSection = () => {
    return (
        <Box justifyItems={"center"} p={{ xs: 0, md: 8 }}
        sx={{
            backgroundImage: `url(${circlesImage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}>
            <Box textAlign={"center"}>
                <Typography variant="h2" p={4} fontWeight={"600"}>First Title</Typography>
                <Typography variant="h5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
            </Box>
            <Grid container spacing={2} p={4}>
                <Grid item alignContent={"center"} xs={12} md={6} lg={6} textAlign={{xs:"center", sm:"center", md:"left", lg:"left"}}>
                    <Typography variant="h6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
                </Grid>
                <Grid item textAlign={"center"} xs={12} md={6} lg={6}>
                    <img src={computerImage} alt="Computer" width={"90%"}/>
                </Grid>
            </Grid>
            <Box justifyItems={"center"} width={"100%"} mb={4}>
                <OutlineButton title="GET A DEMO" />
            </Box>
        </Box>
    );
};

export default SecondSection;