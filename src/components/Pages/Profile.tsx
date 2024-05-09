import React from "react";
import Me from "../Me";
export default function Profile() {
	return (
		<div className="m-3 min-w-[320px] h-max flex place-content-center flex-col items-center">
			<div className=" bg-zinc-900 w-fit h-fit rounded-3xl border-zinc-500 border m-10 overflow-hidden p-5">
				<h1 className="text-center m-3">
					Bienvenue sur mon{" "}
					<a className="pre bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-5xl inline-block text-transparent bg-clip-text">
						Profile 3D.
					</a>
				</h1>

				<p className="text-center m-3">
					Me voici ! Enfin pas vraiment, c'est juste ce que je m'imagine être en
					3D. <br />
					J'ai fais cet autoportrait avec Spline, bouge ta souris en maintenant{" "}
					<code className="bg-zinc-400 text-zinc-900 rounded-md p-1">
						alt
					</code>{" "}
					pour me faire bouger dans tout les sens...
				</p>
			</div>
			<Me />
		</div>
	);
}
