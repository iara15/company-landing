import { Box, Grid, Stack, Typography } from "@mui/material";
import logo2Image from "../assets/images/Logo2.png";

const Footer = () => {
    return (
        <Box p={5} mt={3} sx={{ backgroundColor: "var(--orange)" }}>
            <Grid container pt={3} pb={3} justifySelf={"center"} justifyContent={"center"} xs={12} sm={12} md={7} lg={7}>
                <Grid item justifyItems={"center"} lg={3} md={12} sm={12}>
                    <Box>
                        <img src={logo2Image} height={100} width={100} alt="Logo" />
                    </Box>
                </Grid>
                <Grid container p={2} justifyContent={"center"} lg={9} md={8} sm={8} xs={12}>
                    <Grid item lg={4} md={4} sm={4} xs={3}>
                        <Stack spacing={2} color={"white"} textAlign={"center"}>
                            <Typography variant="h6">TITLE</Typography>
                            <Typography variant="h7" sx={{ cursor: "pointer" }}>Page 1</Typography>
                            <Typography variant="h7" sx={{ cursor: "pointer" }}>Page 2</Typography>
                        </Stack>
                    </Grid>
                    <Grid item lg={4} md={4} sm={4} xs={3}>
                        <Stack spacing={2} color={"white"} textAlign={"center"}>
                            <Typography variant="h6">TITLE</Typography>
                            <Typography variant="h7" sx={{ cursor: "pointer" }}>Page 5</Typography>
                            <Typography variant="h7" sx={{ cursor: "pointer" }}>Page 4</Typography>
                            <Typography variant="h7" sx={{ cursor: "pointer" }}>Page 5</Typography>
                        </Stack>
                    </Grid>
                    <Grid item lg={4} md={4} sm={4} xs={3}>
                        <Stack spacing={2} color={"white"} textAlign={"center"}>
                            <Typography variant="h6">TITLE</Typography>
                            <Typography variant="h7" sx={{ cursor: "pointer" }}>Page 6</Typography>
                            <Typography variant="h7" sx={{ cursor: "pointer" }}>Page 7</Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container justifyContent={"space-between"} pt={2} borderTop={"2px white solid"} textAlign={"center"}>
                <Grid container lg={7} md={7}>
                    <Grid item lg={3} md={4} sm={12} xs={12}>
                        <Typography variant="h7" component="u" color={"white"} sx={{ cursor: "pointer" }}>Terms & Conditions</Typography>
                    </Grid>
                    <Grid item lg={3} md={4} sm={12} xs={12}>
                        <Typography variant="h7" component="u" color={"white"} sx={{ cursor: "pointer" }}>Privacy Policy</Typography>
                    </Grid>
                </Grid>
                <Grid item lg={4} md={4} sm={12} xs={12} textAlign={{ xs: "center", sm: "center", md: "right", lg: "right" }}>
                    <Typography variant="h7" color={"white"}>© All rights reserved.</Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

{/* <Box pt={1.5} width={"100%"} borderTop={"2px white solid"}
                    sx={{
                        display:"flex",
                        justifyContent:"space-between"}}
                        flexWrap={"wrap"}
                    >
                    <Stack direction={"row"} spacing={4} color={"white"}>
                        <Typography variant="h7" component="u" sx={{cursor:"pointer"}}>Terms & Conditions</Typography>
                        <Typography variant="h7" component="u" sx={{cursor:"pointer"}}>Privacy Policy</Typography>
                    </Stack>
                    <Typography variant="h7" color={"white"}>© All rights reserved.</Typography>
                </Box> */}

export default Footer;