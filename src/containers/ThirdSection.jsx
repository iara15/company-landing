import { Box, Typography } from "@mui/material";
import BookCard from "../components/Cards/BookCard/BookCard.jsx";
import parallelogramImage from "../assets/images/parallelogram.png";

const ThirdSection = () => {
    return (
        <Box justifyItems={"center"} p={{ xs: 3, md: 8 }} sx={{ backgroundColor: "var(--light-gray)", position: "relative" }}>
            <Box textAlign={"center"}>
                <Typography variant="h2" p={4} fontWeight={"600"}>Second Title</Typography>
            </Box>
            <Box
                sx={{
                    backgroundImage: `url(${parallelogramImage})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% auto",
                    backgroundPosition: "bottom",
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: {xs: -80, sm: -80, md: -115, lg: -115 },
                    height: 'auto',
                    minHeight: '800px',
                    zIndex: 0,
                }}
            ></Box>
            <Box zIndex={1}>
                <BookCard></BookCard>
            </Box>
        </Box>
    );
};

export default ThirdSection;