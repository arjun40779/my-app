import React from "react";
import "./Toast.css";
import { useToastContext } from "../Context/ToastContext";

export default function Toast({ type, visible, msg }) {
	const { setVisible } = useToastContext();
	const hideToast = () => {
		setVisible(false);
	};

	return (
		<div className={`toast-container ${!visible ? "hide" : ""}`}>
			<div className={`toast-content ${type}`}>
				<p className="err">{type}</p>
				<p className="msg">{msg}</p>
				<span onClick={hideToast} className="cancel-btn ">
					x
				</span>
			</div>
		</div>
	);
}
