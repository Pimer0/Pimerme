import Lottie from "react-lottie";
import animationData from "../lotties/Pikachu.json";

export default function App() {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	return (
		<div className="-z-10">
			<Lottie options={defaultOptions} height={250} width={250} />
		</div>
	);
}
