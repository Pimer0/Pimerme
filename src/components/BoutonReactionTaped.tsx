import React, { useEffect } from "react";
import { motion } from "framer-motion";

interface BoutonReactionTapedProps {
	onReactionSelect: (imageSrc: string) => void; // Prop de rappel pour gérer la sélection de la réaction
	className?: string;
	ident: string;
	onClose: () => void;
}

const BoutonReactionTaped: React.FC<BoutonReactionTapedProps> = ({
	onReactionSelect,
	className,
}) => {
	const id = "uniqueId"; // Replace "uniqueId" with the actual ID value
	useEffect(() => {
		// Récupère la réaction stockée dans sessionStorage lors du chargement du composant
		const storedReaction = sessionStorage.getItem("selectedReaction");
		if (storedReaction) {
			onReactionSelect(storedReaction);
		}
	}, [onReactionSelect]);

	// Fonction de gestion du clic sur la réaction
	const handleReactionClick = (imageSrc: string) => {
		onReactionSelect(imageSrc);
		sessionStorage.setItem(`selectedReaction_${id}`, imageSrc); // Utilisez une clé unique basée sur l'ID de la carte
	};

	return (
		<motion.div
			whileHover={{ scale: 1.1 }}
			transition={{ type: "spring", stiffness: 400, damping: 10 }}
			className={`bg-zinc-900 rounded-3xl border-zinc-500 border overflow-hidden ml-5 mb-4 w-fit ${className}`}
		>
			<button
				onClick={() =>
					handleReactionClick("./src/assets/img/AstonishedFace.svg")
				}
			>
				<img
					className="m-2"
					src="./src/assets/img/AstonishedFace.svg"
					alt="Astonished Face"
				/>
			</button>
			<button
				onClick={() => handleReactionClick("./src/assets/img/BeatingHeart.svg")}
			>
				<img
					className="m-2"
					src="./src/assets/img/BeatingHeart.svg"
					alt="Beating Heart"
				/>
			</button>
			<button
				onClick={() =>
					handleReactionClick("./src/assets/img/DisappointedFace.svg")
				}
			>
				<img
					className="m-2"
					src="./src/assets/img/DisappointedFace.svg"
					alt="Disappointed Face"
				/>
			</button>
			<button
				onClick={() =>
					handleReactionClick("./src/assets/img/ExplodingHead.svg")
				}
			>
				<img
					className="m-2"
					src="./src/assets/img/ExplodingHead.svg"
					alt="Exploding Head"
				/>
			</button>
		</motion.div>
	);
};

export default BoutonReactionTaped;
