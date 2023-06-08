import React, { useState } from "react";
import {
  useTheme,
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import { useGetAdminsQuery } from "../../services/request";
import { useDisclosure } from "../../hooks/useDisclosure";
import { AddCircleRounded, MoreVert } from "@mui/icons-material";
import { FormDrawer } from "./Admin-Components";

const AdminList: React.FC = () => {
  const theme = useTheme();
  const {
    isOpen: isAction,
    onClose: closeAction,
    onToggle: toggleAction,
  } = useDisclosure();
  const {
    isOpen: isDrawer,
    onClose: closeDrawer,
    onToggle: toggleDrawer,
  } = useDisclosure();

  const [selectedId, setSelectedId] = useState<string | null>(null);
  const { data: adminData, isLoading } = useGetAdminsQuery({});

  console.log(adminData);

  interface AdminItem {
    userName: string;
    fullname: string;
    groupCode: string;
    groupName: string;
  }

  const actionMenu = ["Edit", "View more"];

  const handleMenuOpen = (id: string) => {
    setSelectedId(id);
    toggleAction();
  };

  const handleMenuClose = () => {
    setSelectedId(null);
    closeAction();
  };

  const handleDrawerAdd = () => {
    toggleDrawer();
  };

  return (
    <Box width="full" height="100%">
      <Box sx={{ p: 5 }}>
        {isLoading ? (
          "Loading Data"
        ) : (
          <TableContainer component={Paper} elevation={20}>
            <Table sx={{ bgcolor: theme.palette.primary.main }}>
              <TableHead>
                <TableRow>
                  <TableCell>User Name</TableCell>
                  <TableCell>Fullname</TableCell>
                  <TableCell>Group Code</TableCell>
                  <TableCell>Group Name</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {adminData?.data.map((item: AdminItem, index: number) => (
                  <TableRow key={item.userName}>
                    <TableCell component="th" scope="row">
                      {item.userName}
                    </TableCell>
                    <TableCell>{item.fullname}</TableCell>
                    <TableCell>{item.groupCode}</TableCell>
                    <TableCell>{item.groupName}</TableCell>
                    <TableCell>
                      <IconButton
                        aria-label="more"
                        id={`long-button-${index}`}
                        aria-controls={
                          selectedId === `long-button-${index}`
                            ? "long-menu"
                            : undefined
                        }
                        aria-expanded={
                          selectedId === `long-button-${index}`
                            ? "true"
                            : undefined
                        }
                        aria-haspopup="true"
                        onClick={() => handleMenuOpen(`long-button-${index}`)}
                      >
                        <MoreVert />
                      </IconButton>
                      <Menu
                        anchorEl={document.getElementById(selectedId || "")}
                        open={selectedId === `long-button-${index}` && isAction}
                        onClose={handleMenuClose}
                        PaperProps={{
                          style: {
                            width: "20ch",
                          },
                        }}
                      >
                        {actionMenu.map((option) => (
                          <MenuItem key={option} onClick={handleMenuClose}>
                            {option}
                          </MenuItem>
                        ))}
                      </Menu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
        <Button
          onClick={handleDrawerAdd}
          variant="outlined"
          sx={{
            mt: 1,
            bgcolor: theme.palette.primary.main,
            color: theme.palette.secondary.main,
            borderColor: theme.palette.secondary.main,
            ":hover": {
              bgcolor: theme.palette.secondary.main,
              color: theme.palette.primary.main,
              variant: "contained",
            },
          }}
          startIcon={<AddCircleRounded />}
        >
          NEW
        </Button>
      </Box>

      <>
        <FormDrawer theme={theme} isOpen={isDrawer} onClose={closeDrawer} />
      </>
    </Box>
  );
};

export default AdminList;
