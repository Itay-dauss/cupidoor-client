import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { DividerLine, LogoImg, UserSection } from "./styles";
import Logo from "../../icons/logo.png";

export const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <LogoImg src={Logo} alt="logo" />
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Cupidoor
          </Typography>
          <UserSection>
            <Button color="inherit">Log in</Button>
            <DividerLine />
            <Button color="inherit">Sign up</Button>
          </UserSection>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
