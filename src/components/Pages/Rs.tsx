import RsCard from "../RsCard";
import { motion } from "framer-motion";

export default function Rs() {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.5 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{
				duration: 0.8,
				delay: 0.5,
				ease: [0, 0.71, 0.2, 1.01],
			}}
			className="m-3 min-w-[320px] h-max flex place-content-center flex-col items-center"
		>
			<RsCard
				title="GitHub"
				body="Mon humble Github si tu clic sur cette image"
				image="/src/assets/img/github.svg"
				link="https://github.com/Pimer0"
			/>
			<RsCard
				title="LinkedIn"
				body="Mon humble LinkedIn si tu clic sur cette image"
				image="/src/assets/img/linkedin.svg"
				link="https://www.linkedin.com/in/paul-m%C3%A9randon/"
			/>
			<RsCard
				title="Instagram"
				body="Mon humble Instagram si tu clic sur cette image"
				image="/src/assets/img/instagram.svg"
				link="https://www.instagram.com/grosmaraud/"
			/>
		</motion.div>
	);
}
