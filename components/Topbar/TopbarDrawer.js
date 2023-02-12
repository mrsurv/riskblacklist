import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {
  AiOutlineMenu,
  AiOutlineQuestionCircle,
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { MdAttachMoney, MdOutlineDesignServices } from "react-icons/md";
import Link from "next/link";

export default function TopbarDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <h1 className="my-5 text-center">Change Language</h1>
      <List className="mb-10">
        {["Arabic", "French", "English"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {text === "Arabic" && (
                  <AiOutlineArrowRight color="black" size={25} />
                )}
                {text === "French" && (
                  <AiOutlineArrowRight color="black" size={25} />
                )}
                {text === "English" && (
                  <AiOutlineArrowRight color="black" size={25} />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider />

      <List className="mt-10">
        {["Home", "Services", "Login/Signup"].map((text, index) => (
          <ListItem key={text} disablePadding className="">
            <ListItemButton>
              <ListItemIcon>
                {text === "Home" && <AiOutlineHome color="black" size={25} />}
                {text === "Services" && (
                  <MdOutlineDesignServices color="black" size={25} />
                )}
                {text === "Login/Signup" && (
                  <AiOutlineUser color="black" size={25} />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List>
        {["Pricing", "About us"].map((text, index) => (
          <ListItem key={text} disablePadding className="">
            <ListItemButton>
              <ListItemIcon>
                {text === "Pricing" && (
                  <MdAttachMoney color="black" size={25} />
                )}
                {text === "About us" && (
                  <AiOutlineQuestionCircle color="black" size={25} />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <AiOutlineMenu size={30} color="white" />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
