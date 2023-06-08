import React from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Stack,
} from "@mui/material";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setModuleName } from "../services/store/moduleNameSlice";

const DrawerHeader = () => {
  return (
    <>
      <Box>Header Here</Box>
    </>
  );
};

const DrawerFooter = () => {
  return (
    <>
      <Box>Footer</Box>
    </>
  );
};

const DrawerBody: React.FC = () => {

  const dispatch = useDispatch();

  const handleItemClick = (name: string) => {
    dispatch(setModuleName(name));
  };

  const options = [
    {
      path: "/admin-list",
      name: "Admin List",
      icon: <SupervisorAccountIcon />,
    },
    {
      path: "/group",
      name: "Group",
      icon: <Diversity2Icon />,
    },
  ];

  const listItemStyle = {
    cursor: "pointer",
    bgcolor: "#f0eded",
    color: "#0B4775",
    textDecoration: "none",
    gap: 0.5,
  };

  return (
    <>
      <Box>
        <List sx={{ width: "100%", bgcolor: "background.paper", p: 0 }}>
          {options.map((item) => (
            <ListItem
              key={item.path}
              sx={listItemStyle}
              component={Link}
              to={item.path}
              onClick={() => handleItemClick(item.name)}
            >
              {item?.icon}
              <ListItemText primary={item.name} />
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
};

type DrawerNavigationProps = {
  isOpen: boolean;
  onClose: () => void;
};

const DrawerNavigation: React.FC<DrawerNavigationProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <>
      <Drawer
        open={isOpen}
        onClick={onClose}
        sx={{
          width: 280,
          "& .MuiDrawer-paper": {
            bgcolor: "#f0eded",
            width: 280,
          },
        }}
      >
        <Box
          sx={{
            height: "100%",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        >
          <Stack gap={2}>
            <DrawerHeader />
            <DrawerBody />
          </Stack>
          <DrawerFooter />
        </Box>
      </Drawer>
    </>
  );
};

export default DrawerNavigation;
