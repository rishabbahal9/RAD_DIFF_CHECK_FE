import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Header = (props) => (
  <AppBar position="static">
    <Toolbar variant="dense">
      <Typography variant="h6" color="inherit" component="div">
        Radpair Assessment
      </Typography>
      <div
        style={{
          display: "block",
          padding: "5px",
          backgroundColor: "green",
          opacity: "0.3",
          color: "white",
          marginLeft: "15px",
          textAlign: "right",
          borderRadius: "5px",
          fontSize: "12px",
        }}
      >
        {process.env.REACT_APP_ENV}
      </div>
    </Toolbar>
  </AppBar>
);

export default Header;
