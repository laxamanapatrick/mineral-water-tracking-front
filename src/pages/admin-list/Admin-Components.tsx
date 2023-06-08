import React from "react";
import { Box, Typography, Button, Drawer, Stack, Divider } from "@mui/material";
import { BlockRounded, Send } from "@mui/icons-material";
import { useDefaultStyles } from "../../hooks/useDefaultStyles";

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
  const headerBg = {
    background:
      "linear-gradient(90deg, rgba(11,107,117,0.8519782913165266) 22%, rgba(11,52,117,0.896796218487395) 50%, rgba(11,95,117,0.8463760504201681) 75%)",
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: theme.palette.common.white,
        height: "5%",
        ...headerBg,
      }}
    >
      <Typography>Admin List Form</Typography>
    </Box>
  );
};

const FormFooter = ({ onClose, theme }: FormPartProps) => {
  const { defaultButtonStyle } = useDefaultStyles();
  const buttonArrangement = {
    p: 1,
    display: "flex",
    justifyContent: "end",
    gap: 1,
  };

  return (
    <Box sx={{ ...defaultButtonStyle, ...buttonArrangement }}>
      <Button className="primaryButtons" variant="contained" endIcon={<Send />}>
        Save
      </Button>
      <Button
        className="cancelButtons"
        variant="outlined"
        startIcon={<BlockRounded />}
        onClick={onClose}
      >
        Cancel
      </Button>
    </Box>
  );
};

export const FormDrawer = ({ isOpen, onClose, theme }: FormDrawerProps) => {
  return (
    <>
      <Drawer
        open={isOpen}
        anchor="right"
        sx={{
          width: 300,
          "& .MuiDrawer-paper": {
            width: 320,
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
          <FormHeader onClose={onClose} theme={theme} />
          <>
            <Stack height="90%">Hey</Stack>
          </>
          <Divider />
          <FormFooter onClose={onClose} theme={theme} />
        </Box>
      </Drawer>
    </>
  );
};
