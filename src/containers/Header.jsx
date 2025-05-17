import { Box, Stack, Grid } from "@mui/material";
import companyBuildingImage from "../assets/images/company-building.png";
import LaunchButton from "../components/Buttons/LaunchButton";

const Header = () => {
  return (
    <Box flex={1} p={{ xs: 0, md: 5 }} height={"80vh"}
      sx={{
        backgroundImage: `url(${companyBuildingImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <Box p={8} pt={15}>
            <Stack spacing={4} color={"white"} sx={{ textAlign: { xs: "center", sm: "center", md: "center", lg: "left" } }}>
              <h1>Lorem ipsum dolor sit amet</h1>
              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
              <Stack direction={{ xs: "column", sm: "column", md: "row", lg: "row" }} spacing={2} >
                <LaunchButton title="GET A DEMO" fullWidth ></LaunchButton>
                <LaunchButton title="DOCUMENTATION" fullWidth ></LaunchButton>
              </Stack>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
