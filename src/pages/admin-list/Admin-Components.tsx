import React from "react";
import {
  Box,
  Typography,
  Button,
  Drawer,
  Stack,
} from "@mui/material";
import { BlockRounded, Send } from "@mui/icons-material";

type FormDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  theme: import("@mui/material/styles").Theme;
};

type FormPartProps = {
  onClose: () => void;
  theme: import("@mui/material/styles").Theme;
};

const FormHeader = ({ theme }: FormPartProps) => {
  return (
    <Box bgcolor={theme.palette.secondary.main}>
      <Typography>Admin List Form</Typography>
    </Box>
  );
};

const FormFooter = ({ onClose }: FormPartProps) => {
  return (
    <Box>
      <Button variant="contained" endIcon={<Send />}>
        Send
      </Button>
      <Button variant="outlined" startIcon={<BlockRounded />} onClick={onClose}>
        Cancel
      </Button>
    </Box>
  );
};

export const FormDrawer = ({ isOpen, onClose, theme }: FormDrawerProps) => {
  return (
    <>
      <Drawer open={isOpen} onClick={onClose}>
        <Box
          sx={{
            height: "100%",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        >
          <Stack gap={2}>
            <FormHeader onClose={onClose} theme={theme} />
            <>
              <Stack></Stack>
            </>
          </Stack>
          <FormFooter onClose={onClose} theme={theme} />
        </Box>
      </Drawer>
    </>
  );
};
