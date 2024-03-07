import React from "react";
import Toast from "./component/Toast";
import { useToastContext } from "./Context/ToastContext";
import "./App.css";

export default function App() {
	const { type, setType, visible, setVisible, msg, setMsg } = useToastContext();

	const handleClick = (type, msg) => {
		setType(type);
		setMsg(msg);
		setVisible(true);
		setTimeout(() => {
			setVisible(false);
		}, 3000);
	};

	return (
		<div className="app">
			<div className="app-content">
				<button
					className="btns"
					onClick={() => {
						handleClick("success", "success msg");
					}}
				>
					{" "}
					success
				</button>
				<button
					className="btns"
					onClick={() => {
						handleClick("error", "err msg here");
					}}
				>
					Error
				</button>
				<button
					className="btns"
					onClick={() => {
						handleClick("warning", "wrn msg here");
					}}
				>
					Warning
				</button>
				<Toast type={type} visible={visible} msg={msg} />
			</div>
		</div>
	);
}
