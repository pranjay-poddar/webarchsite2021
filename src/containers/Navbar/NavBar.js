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
import { Link } from "react-router-dom";
import { Link as NavLink } from "react-scroll";

export default function PrimarySearchAppBar({ isHome }) {
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
      className="menu"
      anchorEl={mobileMoreAnchorEl}
      style={{ position: "absolute", width: "100%" }}
      id={mobileMenuId}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem className="menuItem">
        <NavLink activeClass="active" to="About" duration={0} smooth={true}>
          <Button
            className="btn-head"
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          >
            About us
          </Button>
        </NavLink>
      </MenuItem>
      <MenuItem className="menuItem">
        <NavLink activeClass="active" to="Services" duration={0} smooth={true}>
          <Button
            className="btn-head"
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          >
            Services
          </Button>
        </NavLink>
      </MenuItem>
      <MenuItem className="menuItem">
        <NavLink activeClass="active" to="Clients" duration={0} smooth={true}>
          <Button
            className="btn-head"
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          >
            Clients
          </Button>
        </NavLink>
      </MenuItem>
      <MenuItem className="menuItem">
        <Link to="/projects">
          <Button
            className="btn-head"
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          >
            Projects
          </Button>
        </Link>
      </MenuItem>
      <MenuItem className="menuItem">
        <Link to="/team">
          <Button
            className="btn-head"
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          >
            Team
          </Button>
        </Link>
      </MenuItem>
      <MenuItem className="menuItem">
        <NavLink activeClass="active" to="Contact" duration={0} smooth={true}>
          <Button
            className="btn-head"
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          >
            Contact
          </Button>
        </NavLink>
      </MenuItem>
    </Menu>
  );

  return (
    <Box
      className={isHome ? "Navbar Navbar-Home" : "Navbar"}
      sx={{ flexGrow: 1 }}
    >
      <AppBar
        className="appbar"
        position="static"
        sx={{
          backgroundColor: "rgba(22,22,37, 0.3)",
          padding: "5px",
        }}
      >
        <Toolbar>
          {!isHome && (
            <Box sx={{ marginRight: "20px" }}>
              <img src={logo} alt="logo" style={{ width: "50px" }}></img>
            </Box>
          )}
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
                <NavLink
                  activeClass="active"
                  to="About"
                  duration={0}
                  smooth={true}
                >
                  <p className="p-tag">
                    <span style={{ color: "#00E8FF" }}>01. </span>About us
                  </p>
                </NavLink>
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
                <NavLink
                  activeClass="active"
                  to="Services"
                  duration={0}
                  smooth={true}
                >
                  <p className="p-tag">
                    <span style={{ color: "#00E8FF" }}>02. </span>Services
                  </p>
                </NavLink>
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
                <NavLink
                  activeClass="active"
                  to="Clients"
                  duration={0}
                  smooth={true}
                >
                  <p className="p-tag">
                    <span style={{ color: "#00E8FF" }}>03. </span>Clients
                  </p>
                </NavLink>
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
                <Link to="/projects">
                  <p className="p-tag">
                    <span style={{ color: "#00E8FF" }}>04. </span>Projects
                  </p>
                </Link>
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
                <Link to="/team">
                  <p className="p-tag">
                    <span style={{ color: "#00E8FF" }}>05. </span>Team
                  </p>
                </Link>
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
                <NavLink
                  activeClass="active"
                  to="Contact"
                  duration={0}
                  smooth={true}
                >
                  <p className="p-tag">
                    <span style={{ color: "#00E8FF" }}>06. </span>Contact
                  </p>
                </NavLink>
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
