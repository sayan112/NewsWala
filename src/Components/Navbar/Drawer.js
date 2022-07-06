import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";

import ListItemText from "@mui/material/ListItemText";

import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import "./navbarcss.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import category from "../../data/category";

export default function SwipeableTemporaryDrawer({ setCategory }) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });


  //dark mode -code

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  // end dark mode code
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 200 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem style={{marginRight:10}} >Catagories</ListItem>
      </List>
      <Divider />
      <List>
        {category.map((text, index) => (
          <ListItem style={{padding:30}} button onClick={() => setCategory(text)} key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment key={"left"}>
        <Button onClick={toggleDrawer("left", true)}>
          {" "}
          <MenuOpenIcon className="menu-icon" />{" "}
        </Button>
        <ThemeProvider theme={darkTheme}>
          <SwipeableDrawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
            onOpen={toggleDrawer("left", true)}
          >
            {list("left")}
          </SwipeableDrawer>
        </ThemeProvider>
      </React.Fragment>
    </div>
  );
}
