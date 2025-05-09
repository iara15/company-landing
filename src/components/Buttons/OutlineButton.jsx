import React from "react";
import { Box } from "@mui/material";

const OutlineButton = (props) => {
    return (
        <Box className="outlineButtonContainer">
            <Box className="outlineButton">
                <h4>{props.title}</h4>
            </Box>
            <Box className="outlineButton-expand outlineButton-expand-one"></Box>
            <Box className="outlineButton-expand outlineButton-expand-two"></Box>
        </Box>
    );
};

export default OutlineButton;