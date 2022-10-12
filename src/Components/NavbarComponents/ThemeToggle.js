import { MdLightMode, MdDarkMode } from "react-icons/md";
import { BsFillCircleFill } from "react-icons/bs";
import { useEffect, useState } from "react";
export default function ThemeToggle(props) {
	const [light, setLight] = useState(true);
	useEffect(() => {
		if (props.mode === "light") setLight(true);
		else setLight(false);
	}, [props.mode]);

	const changeMode = () => {
		if (props.mode === 'light') props.setMode('dark');
		else props.setMode('light');
	}

	return (
		<div onClick={changeMode} className={`flex items-center justify-center my-4 px-1 rounded-full text-yellow-100 gap-1`}>
			<BsFillCircleFill className={`absolute transition-all duration-200 ${light ? "-translate-x-3" : "translate-x-3"}`} />
			<MdLightMode />
			<MdDarkMode />
		</div>
	);
}
