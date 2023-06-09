import React from "react";
import * as yup from "yup";
import {
  Box,
  Typography,
  Button,
  Drawer,
  Stack,
  Divider,
  TextField,
} from "@mui/material";
import { BlockRounded, Send } from "@mui/icons-material";
import { useDefaultStyles } from "../../hooks/useDefaultStyles";
import { useFormSetup } from "../../hooks/useFormSetup";
import { Controller } from "react-hook-form";

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

const FormFooter = ({
  onClose,
  theme,
  onSubmit,
  isValid,
}: FormPartProps & {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  isValid: boolean;
}) => {
  const { defaultButtonStyle } = useDefaultStyles();
  const buttonArrangement = {
    p: 1,
    display: "flex",
    justifyContent: "end",
    gap: 1,
  };

  return (
    <Box sx={{ ...defaultButtonStyle, ...buttonArrangement }}>
      <Button
        className={`primaryButtons ${!isValid ? "notAllowedCursor" : ""}`}
        variant="contained"
        endIcon={<Send />}
        type="submit"
        disabled={!isValid}
      >
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

interface FormData {
  username: string;
  fullName: string;
  group: string;
}

const schema = yup.object().shape({
  username: yup.string().required("Username is required"),
  fullName: yup.string().required("Full Name is required"),
  group: yup.string().required("Group is required"),
});

const defaultValues: FormData = {
  username: "",
  fullName: "",
  group: "",
};

export const FormDrawer = ({ isOpen, onClose, theme }: FormDrawerProps) => {
  const { defaultTextFieldStyle } = useDefaultStyles();

  const { control, errors, isValid } = useFormSetup({
    schema: schema as yup.AnyObjectSchema,
    defaultValues,
  });

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data: FormData = {
      username: formData.get("username") as string,
      fullName: formData.get("fullName") as string,
      group: formData.get("group") as string,
    };
    console.log(data);
    console.log(errors, isValid);
  };

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
        <form style={{ height: "100%" }} onSubmit={submitHandler}>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            <FormHeader onClose={onClose} theme={theme} />

            <Stack
              sx={{
                display: "flex",
                alignItems: "center",
                height: "90%",
                width: "100%",
                mt: 3,
                gap: 2,
              }}
            >
              <Controller
                name="username"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    sx={defaultTextFieldStyle}
                    variant="outlined"
                    label="Username"
                    error={!!errors?.username}
                  />
                )}
              />
              <Controller
                name="fullName"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    sx={defaultTextFieldStyle}
                    variant="outlined"
                    label="Full Name"
                    error={!!errors.fullName}
                  />
                )}
              />
              <Controller
                name="group"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    sx={defaultTextFieldStyle}
                    variant="outlined"
                    label="Group"
                    error={!!errors.group}
                  />
                )}
              />
            </Stack>

            <Divider />
            <FormFooter
              onClose={onClose}
              theme={theme}
              onSubmit={submitHandler}
              isValid={isValid}
            />
          </Box>
        </form>
      </Drawer>
    </>
  );
};
