import { Box, Typography } from "@mui/material";
import BookCard from "../components/Cards/BookCard/BookCard.jsx";
import parallelogramImage from "../assets/images/parallelogram.png";

const ThirdSection = () => {
    return (
        <Box justifyItems={"center"} p={{ xs: 3, md: 8 }} sx={{backgroundColor:"var(--light-gray)"}}>
            <Box textAlign={"center"}>
                <Typography variant="h2" p={4} fontWeight={"600"}>Second Title</Typography>
            </Box>
            <Box position={"absolute"} left={0} right={0} zIndex={1} overflow={"hidden"} marginTop={8}>
                <img src={parallelogramImage} alt="" />
            </Box>
            <BookCard></BookCard>
        </Box>
    );
};

export default ThirdSection;