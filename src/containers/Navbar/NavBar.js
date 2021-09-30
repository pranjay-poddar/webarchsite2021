import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import logo from "./logo.png";
import MoreIcon from "@mui/icons-material/MoreVert";
import "./NavBar.css";

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Button
          className="btn-head"
          size="large"
          aria-label="show 4 new mails"
          color="inherit"
        >
          About us
        </Button>
      </MenuItem>
      <MenuItem>
        <Button
          className="btn-head"
          size="large"
          aria-label="show 4 new mails"
          color="inherit"
        >
          Content
        </Button>
      </MenuItem>
      <MenuItem>
        <Button
          className="btn-head"
          size="large"
          aria-label="show 4 new mails"
          color="inherit"
        >
          Projects
        </Button>
      </MenuItem>
      <MenuItem>
        <Button
          className="btn-head"
          size="large"
          aria-label="show 4 new mails"
          color="inherit"
        >
          Team
        </Button>
      </MenuItem>
    </Menu>
  );

  return (
    <Box className="Navbar" sx={{ flexGrow: 1 }}>
      <AppBar
        className="appbar"
        position="static"
        sx={{
          backgroundColor: "#0A192F",
          padding: "5px",
        }}
      >
        <Toolbar>
          <Box sx={{ marginRight: "20px" }}>
            <img src={logo} alt="logo" style={{ width: "50px" }}></img>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{ display: { xs: "none", md: "flex" } }}
            display="flex"
            justifyContent="space-evenly"
          >
            <Button
              className="btn-head"
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Typography
                variant="h6"
                noWrap
                className="hoverable"
                component="div"
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                <p className="p-tag">
                  <span style={{ color: "#64ffda" }}>01. </span>About us
                </p>
              </Typography>
            </Button>
            <Button
              className="btn-head"
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Typography
                variant="h6"
                noWrap
                className="hoverable"
                component="div"
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                <p className="p-tag">
                  <span style={{ color: "#64ffda" }}>02. </span>Content
                </p>
              </Typography>
            </Button>
            <Button
              className="btn-head"
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Typography
                variant="h6"
                noWrap
                className="hoverable"
                component="div"
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                <p className="p-tag">
                  <span style={{ color: "#64ffda" }}>03. </span>Project
                </p>
              </Typography>
            </Button>
            <Button
              className="btn-head"
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Typography
                variant="h6"
                noWrap
                className="hoverable"
                component="div"
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                <p className="p-tag">
                  <span style={{ color: "#64ffda" }}>04. </span>Team
                </p>
              </Typography>
            </Button>
          </Box>
          <Box sx={{ display: { xs: "flex", s: "none", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
