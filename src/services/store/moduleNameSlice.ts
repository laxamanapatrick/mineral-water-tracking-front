import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ModuleNameState = {
  moduleName: string;
};

const storedModuleName = localStorage.getItem("moduleName");

const initialState: ModuleNameState = {
  moduleName: storedModuleName || "",
};

const moduleNameSlice = createSlice({
  name: "moduleName",
  initialState,
  reducers: {
    setModuleName: (state, action: PayloadAction<string>) => {
      state.moduleName = action.payload;
      localStorage.setItem("moduleName", action.payload); // Store in local storage
    },
  },
});

export const { setModuleName } = moduleNameSlice.actions;

export default moduleNameSlice.reducer;
