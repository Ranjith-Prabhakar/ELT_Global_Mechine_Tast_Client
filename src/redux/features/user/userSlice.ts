import { createSlice } from "@reduxjs/toolkit";

export type TUser = {
  name: string;
  email: string;
  selectedRole: string;
  _id: string;
  bookedEvents?: string[]; 
};

const initialState: TUser = {
  name: "",
  email: "",
  selectedRole: "",
  _id: "",
  bookedEvents: [], 
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loadUser: (state, action) => {
      const { _id, name, email, selectedRole, bookedEvents } =
        action.payload.payload; 
      state._id = _id;
      state.name = name;
      state.email = email;
      state.selectedRole = selectedRole;
      state.bookedEvents = bookedEvents ?? []; 
    },
    logoutUser: (state) => {
      state._id = "";
      state.name = "";
      state.email = "";
      state.selectedRole = "";
      state.bookedEvents = []; 
    },
  },
});

export const { loadUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
