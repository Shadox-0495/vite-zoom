import fbApp from "../../../config/firebase";
import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
	user: null,
};

export const firebaseSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		getUser: (state) => state.user,
		setUser: (state) => {
			state.user = "";
		},
		app: () => fbApp,
	},
});

export const { app, getUser, setUser } = firebaseSlice.actions;

export default firebaseSlice.reducer;
