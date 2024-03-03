import PresentationCard from "./components/PresentationCard";
import Profilepic from "./components/Profilepic";
import ShowcaseCard from "./components/ShowCasecard"; // Correction du nom du composant
import { motion } from 'framer-motion';
import { slides } from "./data/cardData.json";
import BoutonReactionTaped from "./components/BoutonReactionTaped";

function App() {
  /* gestion de la date en format francais */
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date().toLocaleDateString('fr-FR', options);

  return (
    <main className="m-0 flex flex-col place-content-center min-w-[320px] h-screen py-10">
      {/* ici vient les components */}
      <div className="flex mr-6 ml-6">
        <motion.div whileHover={{ scale: 0.8 }}>
                  <Profilepic/>
        </motion.div>

        <PresentationCard />
      </div>
      <motion.div initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }} className="flex flex-row place-content-center">
        <ShowcaseCard data={slides.find(item => item.id === 1)} title="Ma carte magic the gathering préférée !" sousTitle={"Date d'ajout le " + date} />
        <ShowcaseCard data={slides.find(item => item.id === 2)} title="Mon tweet préféré :" sousTitle={"Date d'ajout le " + date} />
        <ShowcaseCard data={slides.find(item => item.id === 3)} title="J'adore ce jeu !" sousTitle={"Date d'ajout le " + date} />
      </motion.div>
    </main>
  );
}

export default App;
