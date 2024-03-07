import { createContext, useContext } from "react";
import { useState } from "react";
const ToastContext = createContext();

const ToastContextProvider = ({ children }) => {
	const [visible, setVisible] = useState(false);
	const [type, setType] = useState("");
	const [msg, setMsg] = useState("");

	return (
		<ToastContext.Provider
			value={{ visible, setVisible, type, setType, msg, setMsg }}
		>
			{children}
		</ToastContext.Provider>
	);
};

const useToastContext = () => {
	return useContext(ToastContext);
};

export { useToastContext, ToastContextProvider };
