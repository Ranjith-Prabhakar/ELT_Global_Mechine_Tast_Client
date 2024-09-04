import { createSlice } from "@reduxjs/toolkit";

export type TUser = {
  name: string;
  email: string;
  selectedRole: string;
  _id: string;
  bookedEvents?: string[]; // Ensure this is correctly typed as an array of strings
};

const initialState: TUser = {
  name: "",
  email: "",
  selectedRole: "",
  _id: "",
  bookedEvents: [], // Initialize as an empty array
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loadUser: (state, action) => {
      console.log("Action payload:", action.payload);
      const { _id, name, email, selectedRole, bookedEvents } =
        action.payload.payload; // Access payload directly
      console.log(
        "Loaded user data:",
        _id,
        name,
        email,
        selectedRole,
        bookedEvents
      );

      state._id = _id;
      state.name = name;
      state.email = email;
      state.selectedRole = selectedRole;
      state.bookedEvents = bookedEvents ?? []; // Assign an empty array if bookedEvents is undefined
    },
    logoutUser: (state) => {
      state._id = "";
      state.name = "";
      state.email = "";
      state.selectedRole = "";
      state.bookedEvents = []; // Clear booked events on logout
    },
  },
});

export const { loadUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
