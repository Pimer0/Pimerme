import React from "react";
import { motion } from "framer-motion";

interface RsCardProps {
	title: string;
	body: string;
	image: string;
	link: string;
}

const RsCard: React.FC<RsCardProps> = ({ title, body, image, link }) => {
	return (
		<motion.div
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.9 }}
			transition={{ type: "spring", stiffness: 400, damping: 17 }}
			className=" bg-zinc-900 w-fit h-fit p-5 rounded-3xl border-zinc-500 border m-4 overflow-hidden place-content-center flex-col"
		>
			<div className="flex place-content-center m-5">
				<a href={link}>
					<img src={image} alt={title} />
				</a>
			</div>

			<h2 className="text-center">{title}</h2>
			<p className="text-center">{body}</p>
		</motion.div>
	);
};

export default RsCard;
