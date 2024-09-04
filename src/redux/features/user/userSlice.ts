import { createSlice } from "@reduxjs/toolkit";

export type TUser = {
  name: string;
  email: string;
  selectedRole: string;
  _id: string;
};

const initialState: TUser = {
  name: "",
  email: "",
  selectedRole: "",
  _id: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loadUser: (state, action) => {
      console.log("sssll", action);
      const { _id, name, email, selectedRole } = action.payload.payload;
      state._id = _id;
      state.name = name;
      state.email = email;
      state.selectedRole = selectedRole;
    },
  },
});

export const { loadUser } = userSlice.actions;

export default userSlice.reducer;
