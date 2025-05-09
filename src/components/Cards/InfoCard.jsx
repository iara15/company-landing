import { Box, Stack, Card, CardContent } from "@mui/material";
import { VerifiedRounded } from '@mui/icons-material';

const InfoCard = () => {
    return (
        <Card sx={{ margin: 5, maxWidth: {xs:"100%", sm:"100%", md:"40vw", lg:"40vw"} }} >
            <CardContent className="infoCard">
                <Box className="infoCardIcon">
                    <VerifiedRounded sx={{ fontSize: 70 }} />
                </Box>
                <Stack spacing={5}>
                    <h2>Title</h2>
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h3>
                </Stack>
            </CardContent>
        </Card>
    );
};

export default InfoCard