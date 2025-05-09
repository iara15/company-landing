import { Box, Grid } from "@mui/material";
import InfoCard from "../components/Cards/InfoCard";
import BrandSeparator from "../components/Brand-Separator/BrandSeparator";

const FirstSection = () => {
    return (
        <Box>
            <Grid container spacing={2} p={4}>
                <Grid item justifyItems={"center"} xs={12} md={6} lg={4}>
                    <InfoCard />
                </Grid>
                <Grid item justifyItems={"center"} xs={12} md={6} lg={4}>
                    <InfoCard />
                </Grid>
                <Grid item justifyItems={"center"} xs={12} md={12} lg={4}>
                    <InfoCard />
                </Grid>
            </Grid>
            <BrandSeparator />
        </Box>
    );
};

export default FirstSection;