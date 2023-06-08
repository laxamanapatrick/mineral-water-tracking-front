import React from "react";
import {
  Box,
  Menu,
  MenuItem,
  Typography,
  useTheme,
  Divider,
} from "@mui/material";
import { DarkModeRounded, LightModeRounded } from "@mui/icons-material";

type MenuProps = {
  anchorEl: HTMLButtonElement | null;
  isOpen: boolean;
  onClose: () => void;
  toggleTheme: () => void;
};

const AccountMenu: React.FC<MenuProps> = ({
  anchorEl,
  isOpen,
  onClose,
  toggleTheme,
}) => {
  const theme = useTheme();

  const options = ["About", "Settings", "Logout"];

  const open = Boolean(isOpen);

  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      PaperProps={{
        style: {
          maxHeight: "auto",
          width: "20ch",
        },
      }}
    >
      {options.map((option) => (
        <MenuItem key={option} onClick={onClose}>
          {option}
        </MenuItem>
      ))}
      <Divider sx={{ my: 0.5 }} />
      <MenuItem>
        <Box sx={{ p: 0, m: 0, justifyContent: "start" }} onClick={toggleTheme}>
          <Typography variant="overline" display="block" gutterBottom>
            Theme
          </Typography>
          {theme.palette.mode === "light" ? (
            <DarkModeRounded sx={{ p: 0, m: 0, color: "black" }} />
          ) : (
            <LightModeRounded sx={{ p: 0, m: 0, color: "white" }} />
          )}
        </Box>
      </MenuItem>
    </Menu>
  );
};

export default AccountMenu;
