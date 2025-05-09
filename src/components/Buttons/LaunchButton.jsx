import React from "react";
import { Box } from "@mui/material";

const LaunchButton = (props) => {
    return (
        <Box className="launchButton">
            <h5>{props.title}</h5>
        </Box>
    );
};

export default LaunchButton;