import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counter";
import firebaseReducer from "./reducers/firebase";

export const store = configureStore({ reducer: { counter: counterReducer, firebase: firebaseReducer } });
