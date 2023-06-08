import React, { useRef, useState } from "react";
import { useTheme, Box, Chip, IconButton } from "@mui/material";
import DrawerNavigation from "./Drawer-Navigation";
import AccountMenu from "./Account-Menu";
import WidgetsIcon from "@mui/icons-material/Widgets";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useDisclosure } from "../hooks/useDisclosure";
import { Outlet } from "react-router-dom";

type LayoutProps = {
  toggleTheme: () => void;
};

const Layout: React.FC<LayoutProps> = ({ toggleTheme }) => {
  const theme = useTheme();

  const styleProp = {
    display: "flex",
    flexDirection: "row",
    width: "full",
    color: "#f0eded",
    // background: "rgb(11,52,117)",
    background:
      "linear-gradient(90deg, rgba(11,107,117,0.8519782913165266) 22%, rgba(11,52,117,0.896796218487395) 50%, rgba(11,95,117,0.8463760504201681) 75%)",
    justifyContent: "space-between",
    px: 2,
    alignItems: "center",
    height: "5%",
  };

  const chipStyle = {
    color: "white",
  };

  const [moduleName, setModuleName] = useState<string>("");

  const { isOpen: isDrawer, onToggle: toggleDrawer } = useDisclosure();
  const { isOpen: isMenu, onToggle: toggleMenu } = useDisclosure();

  const anchorRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <Box component="div" height="100vh">
        <Box sx={styleProp}>
          <IconButton onClick={toggleDrawer}>
            <WidgetsIcon sx={{ color: "white" }} />
          </IconButton>
          <Chip sx={chipStyle} label={moduleName} />
          <IconButton ref={anchorRef} onClick={toggleMenu}>
            <AccountCircleIcon sx={{ color: "white" }} />
          </IconButton>
        </Box>
        <Box
          sx={{
            bgcolor: theme.palette.primary.main,
            height: `calc(100% - ${styleProp?.height})`,
          }}
        >
          <Outlet />
        </Box>
      </Box>
      <DrawerNavigation
        isOpen={isDrawer}
        onClose={toggleDrawer}
        setModuleName={setModuleName}
      />
      <AccountMenu
        anchorEl={anchorRef.current}
        isOpen={isMenu}
        onClose={toggleMenu}
        toggleTheme={toggleTheme}
      />
    </>
  );
};

export default Layout;
