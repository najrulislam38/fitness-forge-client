import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
// import MenuItem from "@mui/material/MenuItem";
import logo from "../../../assets/images/logo1.png";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";

// const pages = ["Products", "Pricing", "Blog"];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const { user, logOut } = useAuth();

  const navItems = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "text-[#FF914D]" : "")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/gallery"}
          className={({ isActive }) => (isActive ? "text-[#FF914D]" : "")}
        >
          Gallery
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/trainer"}
          className={({ isActive }) => (isActive ? "text-[#FF914D]" : "")}
        >
          Trainer
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/classes"}
          className={({ isActive }) => (isActive ? "text-[#FF914D]" : "")}
        >
          Classes
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/community"}
          className={({ isActive }) => (isActive ? "text-[#FF914D]" : "")}
        >
          Community
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              to={"/dashboard"}
              className={({ isActive }) => (isActive ? "text-[#FF914D]" : "")}
            >
              Dashboard
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Logout successful.");
      })
      .catch((error) => {
        toast.error(`${error.message}`);
      });
  };

  return (
    <AppBar
      sx={{
        backgroundColor: "#ffff",
        color: "black",
        padding: "5px 0",
      }}
      position="sticky"
      top="0"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              // color: "inherit",
              textDecoration: "none",
              flexGrow: 1,
            }}
          >
            LOGOs
          </Typography> */}
          <div className="flex-1 hidden md:flex">
            <img src={logo} alt="" className="w-[160px] " />
          </div>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              // color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))} */}
              <ul className="flex flex-col gap-3 mr-6 font-semibold font-Poppins">
                {navItems}
              </ul>
            </Menu>
          </Box>
          {/* <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              // color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography> */}

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {/* {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleCloseNavMenu(page)}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                {page}
              </Button>
            ))} */}
            <ul className="flex  mr-6 font-semibold font-Poppins">
              {navItems}
            </ul>
          </Box>

          {user ? (
            <>
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src={user?.photoURL}
                      // src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  // anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {/* {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))} */}
                  <button
                    onClick={handleLogOut}
                    className="mx-2 px-3 py-1 bg-[#FF914D] text-sm  font-semibold rounded"
                  >
                    Log Out
                  </button>
                </Menu>
              </Box>
            </>
          ) : (
            <Link to="/login">
              <button className=" px-3 py-1 bg-[#FF914D] text-sm  font-semibold rounded">
                Login
              </button>
            </Link>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
