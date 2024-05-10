import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import BoutonReaction from "./BoutonReaction";
import BoutonReactionTaped from "./BoutonReactionTaped";

interface ShowCasecardProps {
	id: string;
	title: string;
	sousTitle: string;
	data: {
		src: string;
		alt: string;
	};
	reactions: unknown;
	addReaction: (cardId: string, reaction: unknown) => void;
}

const ShowCasecard: React.FC<ShowCasecardProps> = ({
	id,
	title,
	sousTitle,
	data,
}) => {
	const [selectedImage, setSelectedImage] = useState("");
	const [isReactionTaped, setIsReactionTaped] = useState(false);

	useEffect(() => {
		const storedReaction = sessionStorage.getItem(`selectedReaction_${id}`);
		if (storedReaction) {
			setSelectedImage(storedReaction);
		} else {
			setSelectedImage("./src/assets/img/main-tenant-coeur.svg");
		}
	}, [id]);

	const handleReactionSelect = (imageSrc: string) => {
		setSelectedImage(imageSrc);
		sessionStorage.setItem(`selectedReaction_${id}`, imageSrc);
		setIsReactionTaped(false);
	};

	const handleReactionClick = () => {
		setIsReactionTaped(true);
	};

	const handleCloseReaction = () => {
		setIsReactionTaped(false);
	};

	return (
		<motion.div
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.9 }}
			transition={{ type: "spring", stiffness: 400, damping: 17 }}
			className="bg-zinc-900 max-h-fit w-100 rounded-3xl border-zinc-500 border m-10 overflow-hidden"
		>
			<h1 className="m-5">{title}</h1>
			<h2 className="m-5">{sousTitle}</h2>
			<div className="overflow-hidden rounded-3xl border-zinc-500 border m-7 max-h-40">
				<img src={data.src} alt={data.alt} />
			</div>
			{!isReactionTaped && (
				<BoutonReaction
					onClick={handleReactionClick}
					selectedImage={selectedImage}
				/>
			)}

			{isReactionTaped && (
				<BoutonReactionTaped
					ident={id}
					onReactionSelect={handleReactionSelect}
					onClose={handleCloseReaction}
				/>
			)}
		</motion.div>
	);
};

export default ShowCasecard;
