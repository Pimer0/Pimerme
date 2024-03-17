import PresentationCard from "../PresentationCard";
import Profilepic from "../Profilepic";
import ShowcaseCard from "../ShowCasecard";
import MySwiper from "../MySwiper"; // Correction du nom du composant
import { motion } from 'framer-motion';
import { slides, cards } from "../../data/cardData.json";




function Home() {
  /* gestion de la date en format francais */
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date().toLocaleDateString('fr-FR', options);

  return (
    <main className="m-0 flex flex-col place-content-center min-w-[320px] h-screen py-10">
      {/* ici vient les components */}

      <motion.div initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }} className="flex mr-6 ml-6">
        <div >
                  <Profilepic/>
        </div>

        <PresentationCard />
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }} className="flex flex-row place-content-center">
        <ShowcaseCard data={cards.find(item => item.id === 1)} title="Ma carte magic the gathering préférée !" sousTitle={"Date d'ajout le " + date} />
        <ShowcaseCard data={cards.find(item => item.id === 2)} title="Mon tweet préféré :" sousTitle={"Date d'ajout le " + date} />
        <ShowcaseCard data={cards.find(item => item.id === 3)} title="J'adore ce jeu !" sousTitle={"Date d'ajout le " + date} />
      </motion.div>
      <div className="flex flex-row place-content-center m-20">
      <MySwiper data={slides}/>
      </div>
    </main>
  );
}

export default Home;
