import { AppBar, Button, Menu, MenuItem, Toolbar } from "@mui/material";
import React from "react";

const NavigationMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = anchorEl?.id || "";

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
        <div>
          <Button
            id="btn-field"
            aria-controls={open ? "field-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            color="secondary">
            Field
          </Button>
          <Menu
            id="field-menu"
            anchorEl={anchorEl}
            open={open === "btn-field"}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "btn-field",
              style: {
                width: 250,
              },
            }}>
            <MenuItem onClick={handleClose}>Add</MenuItem>
            <MenuItem onClick={handleClose}>Edit</MenuItem>
            <MenuItem onClick={handleClose}>Import</MenuItem>
          </Menu>
        </div>
        <div>
          <Button
            id="btn-water"
            aria-controls={open ? "water-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            color="secondary">
            Water Management
          </Button>
          <Menu
            id="water-menu"
            anchorEl={anchorEl}
            open={open === "btn-water"}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "btn-water",
              style: {
                width: 250,
              },
            }}>
            <MenuItem onClick={handleClose}>Pump</MenuItem>
            <MenuItem onClick={handleClose}>TDI</MenuItem>
            <MenuItem onClick={handleClose}>Tile Map</MenuItem>
            <MenuItem onClick={handleClose}>Assment</MenuItem>
          </Menu>
        </div>
        <div>
          <Button
            id="btn-alaly"
            aria-controls={open ? "alaly-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            color="secondary">
            AnalyZe
          </Button>
          <Menu
            id="alaly-menu"
            anchorEl={anchorEl}
            open={open === "btn-alaly"}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "btn-alaly",
              style: {
                width: 250,
              },
            }}>
            <MenuItem onClick={handleClose}>Yield</MenuItem>
            <MenuItem onClick={handleClose}>Soils</MenuItem>
            <MenuItem onClick={handleClose}>Plant Dates</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationMenu;
