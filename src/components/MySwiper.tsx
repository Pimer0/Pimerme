import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";

interface SliderProps {
	data: Array<{
		src: string;
		alt: string;
		id: number;
	}>;
}

const Slider: React.FC<SliderProps> = ({ data }) => {
	const [slide, setSlide] = useState(0);
	const [isFlipped, setIsFlipped] = useState(false);

	const nextSlide = () => {
		setSlide(slide === data.length - 1 ? 0 : slide + 1);
		setIsFlipped(false); // Assure que la carte suivante est affichée côté face
	};

	const prevSlide = () => {
		setSlide(slide === 0 ? data.length - 1 : slide - 1);
		setIsFlipped(false); // Assure que la carte précédente est affichée côté face
	};

	const handleCardClick = () => {
		setIsFlipped(!isFlipped); // Inverse l'état du retournement de la carte au clic
	};

	return (
		<div className="flex place-content-center w-6/12 h-64 m-7 flex-col">
			<h2 className="text-center m-7 text-zinc-100">
				Ce site est fait avec (clic sur les slides) :{" "}
			</h2>

			<BsArrowLeftCircleFill
				className="arrow arrow-left absolute left-72 fill-zinc-100 h-6 w-6"
				onClick={prevSlide}
			/>
			<motion.div
				className="w-fit place-self-center"
				whileHover={{ scale: 1.1 }}
				transition={{ type: "spring", stiffness: 400, damping: 10 }}
			>
				{data.map(
					(
						item: { src: string; alt: string; id: number }, // Replace 'ItemType' with the appropriate type for 'item'
						idx: number
					) => (
						<motion.img
							src={item.src}
							alt={item.alt}
							key={idx}
							className={slide === idx ? "slide" : "slide hidden"}
							onClick={handleCardClick}
							animate={{ rotateX: isFlipped ? 360 : 0 }}
							transition={{ duration: 0.5 }}
						/>
					)
				)}
			</motion.div>

			<BsArrowRightCircleFill
				className="absolute right right-72 fill-zinc-100 h-6 w-6"
				onClick={nextSlide}
			/>
		</div>
	);
};

export default Slider;
