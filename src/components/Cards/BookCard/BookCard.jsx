import React from "react";
import { Card, CardContent, Grid, Stack, Divider, Box } from "@mui/material";
import rocketImage from "../../../assets/images/rocket.png";
import BookCardItem from "./BookCardItem.jsx";

const BookCard = () => {
    return (
        <Card sx={{ borderRadius:"30px", position:"relative", zIndex: 2 }}>
            <CardContent >
                <Grid container>
                    <Grid item md={6} lg={6} display={{xs:"none", sm:"none", md:"block", lg:"block"}} borderRight={"0.8px lightGray solid"} alignContent={"center"}>
                        <img src={rocketImage} alt="Rocket" width={"100%"}/>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Stack justifyItems={"center"}>
                            <BookCardItem></BookCardItem>
                            <Box width={"100%"} paddingInline={2.8}>
                                <Divider width={"95%"}></Divider>
                            </Box>
                            <BookCardItem></BookCardItem>
                            <Box width={"100%"} paddingInline={2.8}>
                                <Divider width={"95%"}></Divider>
                            </Box>
                            <BookCardItem></BookCardItem>
                            <Box width={"100%"} paddingInline={2.8}>
                                <Divider width={"95%"}></Divider>
                            </Box>
                            <BookCardItem></BookCardItem>
                        </Stack>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default BookCard;