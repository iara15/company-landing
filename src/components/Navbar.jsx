import { Menu as MenuIcon } from "@mui/icons-material";
import {
  AppBar,
  Box,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import logoImage from "../assets/images/logo.png";
import LaunchButton from "../components/Buttons/LaunchButton";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  gap: "1em",
  justifyContent: "space-between",
  backgroundColor: "var(--dark-blue)"
});

const MenuItems = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  flex: 1,
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
  cursor: "pointer",
}));

const MobileMenu = styled(Box)(() => ({
  position: "absolute",
  top: "71px",
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: "1em",
  backgroundColor: "var(--light-gray)",
  color: "var(--dark-gray)",
}));

const MobileMenuItem = styled(Box)(() => ({
  borderBottom: "1px var(--light-gray-2) solid",
  width: "100%",
  textAlign: "center",
  paddingBottom: "1em",
  cursor: "pointer",
}));

const LastMobileMenuItem = styled(Box)(() => ({
  width: "100%",
  textAlign: "center",
  cursor: "pointer",
}));

const CtaButton = styled(Box)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("sm")]: {
    display: "block",
    width: "20%",
  },
  [theme.breakpoints.up("md")]: {
    display: "block",
    width: "12%",
  },
  cursor: "pointer",
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Box p={1}>
          <img src={logoImage} alt="Logo" width={50} height={50} />
        </Box>
        <MenuIcon sx={{ display: { xs: "block", sm: "none" } }} onClick={() => setOpen(!open)} />
        <MenuItems>
          <Typography variant="h7">
            Home
          </Typography>
          <Typography variant="h7">
            Partners
          </Typography>
          <Typography variant="h7">
            Pricing
          </Typography>
          <Typography variant="h7">
            Resources
          </Typography>
        </MenuItems>
        <CtaButton>
          <LaunchButton title="CONTACT US"></LaunchButton>
        </CtaButton>
      </StyledToolbar>
      <MobileMenu pt={2} pb={2} sx={{ display: `${open ? "flex" : "none"}` }}>
        <MobileMenuItem>
          <Typography variant="h6">
            Home
          </Typography>
        </MobileMenuItem>
        <MobileMenuItem>
          <Typography variant="h6">
            Partners
          </Typography>
        </MobileMenuItem>
        <MobileMenuItem>
          <Typography variant="h6">
            Pricing
          </Typography>
        </MobileMenuItem>
        <LastMobileMenuItem>
          <Typography variant="h6">
            Resources
          </Typography>
        </LastMobileMenuItem>
      </MobileMenu>
    </AppBar>
  );
};

export default Navbar;
