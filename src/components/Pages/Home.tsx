import PresentationCard from "../PresentationCard";
import Profilepic from "../Profilepic";
import ShowcaseCard from "../Showcasecard";
import MySwiper from "../MySwiper";
import { motion } from "framer-motion";
import { slides, cards } from "../../data/cardData.json";

function Home() {
	const options = {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	} as Intl.DateTimeFormatOptions;
	const date = new Date().toLocaleDateString("fr-FR", options);
	let reactions: { [key: string]: unknown[] } = {}; // Declare the 'reactions' variable with type

	// Fonction pour mettre à jour les réactions dans le session storage
	const updateReactions = () => {
		sessionStorage.setItem("reactions", JSON.stringify(reactions));
	};

	// Fonction pour ajouter une réaction à une carte spécifique
	const addReaction = (cardId: string, reaction: unknown) => {
		// Specify the types for 'cardId' and 'reaction'
		const updatedReactions = { ...reactions };
		updatedReactions[cardId] = [...updatedReactions[cardId], reaction];
		reactions = updatedReactions; // Replace 'setReactions' with 'reactions'
		updateReactions();
	};

	return (
		<main className="m-0 flex flex-col place-content-center min-w-[320px] h-screen py-10">
			<motion.div
				initial={{ opacity: 0, scale: 0.5 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{
					duration: 0.8,
					delay: 0.5,
					ease: [0, 0.71, 0.2, 1.01],
				}}
				className="flex mr-6 ml-6"
			>
				<div>
					<Profilepic />
				</div>
				<PresentationCard />
			</motion.div>
			<motion.div
				initial={{ opacity: 0, scale: 0.5 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.5 }}
				className="flex flex-row place-content-center mb-20"
			>
				<ShowcaseCard
					data={cards.find((item) => item.id === 1) || { src: "", alt: "" }}
					title="Ma carte magic the gathering préférée !"
					sousTitle={"Date d'ajout le " + date}
					id="1"
					reactions={reactions[1]}
					addReaction={addReaction}
				/>
				<ShowcaseCard
					data={cards.find((item) => item.id === 2) || { src: "", alt: "" }}
					title="Mon tweet préféré :"
					sousTitle={"Date d'ajout le " + date}
					id="2"
					reactions={reactions[2]}
					addReaction={addReaction}
				/>
				<ShowcaseCard
					data={cards.find((item) => item.id === 3) || { src: "", alt: "" }}
					title="J'adore ce jeu !"
					sousTitle={"Date d'ajout le " + date}
					id="3"
					reactions={reactions[3]}
					addReaction={addReaction}
				/>
			</motion.div>
			<div className="flex flex-row place-content-center m-20">
				<MySwiper data={slides} />
			</div>
		</main>
	);
}

export default Home;
