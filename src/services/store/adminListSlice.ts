import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AdminItem {
  userName: string;
  fullname: string;
  groupCode: string;
  groupName: string;
}

interface AdminListState {
  adminData: AdminItem[];
  isLoading: boolean;
  isOpen: boolean;
  selectedId: string | null;
}

const initialState: AdminListState = {
  adminData: [],
  isLoading: false,
  isOpen: false,
  selectedId: null,
};

const adminListSlice = createSlice({
  name: "adminList",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setAdminData: (state, action: PayloadAction<AdminItem[]>) => {
      state.adminData = action.payload;
    },
    setOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
    setSelectedId: (state, action: PayloadAction<string | null>) => {
      state.selectedId = action.payload;
    },
  },
});

export const { setLoading, setAdminData, setOpen, setSelectedId } =
  adminListSlice.actions;

export default adminListSlice.reducer;
