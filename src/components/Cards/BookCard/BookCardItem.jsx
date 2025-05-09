import React from "react";
import { Grid, Stack, Typography } from "@mui/material";
import { Bookmark, TrendingFlat } from "@mui/icons-material";

const BookCardItem = () => {
    return (
        <Grid container p={3}>
            <Grid item sx={1} sm={1} md={1} lg={1} textAlign={"center"} p={0.5}>
                <Bookmark sx={{color:"var(--orange)"}}></Bookmark>
            </Grid>
            <Grid item xs={11} sm={11} md={11} lg={11}>
                <Stack spacing={0.2}>
                    <Typography variant="h5" fontWeight={600}>Title</Typography>
                    <Typography variant="h6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
                </Stack>
                    <Stack direction={"row"} spacing={2} alignItems={"center"} sx={{cursor:"pointer"}}>
                        <Typography variant="h6" fontWeight={600} color={"var(--orange)"}>Read more</Typography>
                        <TrendingFlat sx={{ fontSize: 35, color:"var(--orange)" }} />
                    </Stack>
            </Grid>
        </Grid>
    );
};

export default BookCardItem;