import {
  AppBar,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { Link } from "react-router-dom";
const useStyle = makeStyles(() => ({
  typhography: {
    flex: 1,
  },
}));

function Header() {
  const classes = useStyle();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.typhography}>Header</Typography>
        <Button color="inherit" component={Link} to="/home">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/products">
          Product
        </Button>
        <Button color="inherit" component={Link} to="/contact">
          Contact
        </Button>
        <Button color="inherit" component={Link} to="/about">
          About
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
