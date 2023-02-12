import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchForm from "./search";

export default function Header() {
  const renderMobileMenu = (
    <Box display={"flex"}>
      <MenuItem style={{ padding: 0 }}>
        <IconButton
          size="small"
          aria-label="show 17 new notifications"
          color="inherit">
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </MenuItem>
      <MenuItem style={{ padding: 0 }}>
        <IconButton
          size="small"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit">
          <AccountCircle />
        </IconButton>
      </MenuItem>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            LOGO
          </Typography>
          <Box
            sx={{ flexGrow: 1 }}
            alignContent={"center"}
            display={"flex"}
            justifyContent="center">
            <div>
              <SearchForm />
            </div>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <MenuItem>Notification</MenuItem>
            <MenuItem>Profile</MenuItem>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            {renderMobileMenu}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
