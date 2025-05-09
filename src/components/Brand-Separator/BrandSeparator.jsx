import React from "react";
import { Box } from "@mui/material";
import { VerifiedOutlined } from '@mui/icons-material';

const BrandSeparator = () => {
    return (
        <Box className="brandSeparator">
            <VerifiedOutlined sx={{ fontSize: 50 }} />
            <VerifiedOutlined sx={{ fontSize: 50 }} />
            <VerifiedOutlined sx={{ fontSize: 50 }} />
            <VerifiedOutlined sx={{ fontSize: 50 }} />
            <VerifiedOutlined sx={{ fontSize: 50 }} />
        </Box>
    );
};

export default BrandSeparator;