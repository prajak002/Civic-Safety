import React from "react"
import {AppBar, Toolbar, Typography, Button} from "@mui/material";
import {Link} from "react-router-dom";

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Civic Safety</Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/add-issue">
          Add Issue
        </Button>
      </Toolbar>
    </AppBar>
  );
}
