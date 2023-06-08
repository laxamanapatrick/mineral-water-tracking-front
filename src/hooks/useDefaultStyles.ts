import { useTheme } from "@mui/material";

export const useDefaultStyles = () => {

  const theme = useTheme();

  const defaultButtonStyle = {
    ".primaryButtons": {
      color: theme.palette.secondary.main,
      bgcolor: theme.palette.primary.main,
      border: `1px solid ${theme.palette.secondary.main}`,
      ":hover": {
        color: theme.palette.primary.main,
        bgcolor: theme.palette.secondary.main,
        variant: "contained",
      },
    },
    ".cancelButtons": {
      color: theme.palette.error.main,
      bgcolor: theme.palette.primary.main,
      border: `1px solid ${theme.palette.error.main}`,
      ":hover": {
        color: theme.palette.primary.main,
        bgcolor: theme.palette.error.main,
        variant: "contained",
      },
    },
  };

  const defaultTableStyle = {

  }

  return { defaultButtonStyle, defaultTableStyle };
};
