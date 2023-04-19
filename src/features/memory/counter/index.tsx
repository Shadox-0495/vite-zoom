import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: 0,
};

export const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		addCounter: (state) => {
			//if (action) console.log(action);
			state.value += 1;
		},
		subCounter: (state) => {
			//if (action) console.log(action);
			state.value -= 1;
		},
	},
});

export const { addCounter, subCounter } = counterSlice.actions;

export default counterSlice.reducer;
