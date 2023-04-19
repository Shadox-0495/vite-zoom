import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { addCounter, subCounter } from "./features/memory/counter";

export default function App() {
	const counter = useSelector((state: any) => state.counter);

	const dispatch = useDispatch();

	useEffect(() => {}, []);
	return (
		<div>
			<button
				onClick={() => {
					dispatch(subCounter());
				}}
			>
				-
			</button>

			<span>{counter.value}</span>

			<button
				onClick={() => {
					dispatch(addCounter());
				}}
			>
				+
			</button>
		</div>
	);
}
