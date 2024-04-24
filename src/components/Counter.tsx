import { useState } from "react";
function Counter() {
	const [count, setCount] = useState(0);
	const message = "Tu as cliqué " + count + " fois";

	return (
		<div>
			<p>{message}</p>
			<button onClick={() => setCount(count + 1)}> </button>
		</div>
	);
}

export default Counter;
