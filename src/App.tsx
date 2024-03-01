import PresentationCard from "./components/PresentationCard";
import ShowcaseCard from "./components/ShowCasecard"; // Correction du nom du composant
import { motion } from 'framer-motion';

function App() {
  /* gestion de la date en format francais */
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date().toLocaleDateString('fr-FR', options);

  return (
    <main className="m-0 flex flex-col place-content-center min-w-[320px] h-screen py-10">
      {/* ici vient les components */}
      <motion.div       whileHover={{ scale: [null, 1.5, 1.4] }}
      transition={{ duration: 0.3 }} className="flex place-content-center">
        <PresentationCard />
      </motion.div>
      <div className="flex flex-row place-content-center">
        <ShowcaseCard title="Ma carte magic the gathering préférée !" sousTitle={"Date d'ajout le " + date} />
        <ShowcaseCard title="Mon tweet préféré:" sousTitle={"Date d'ajout le " + date} />
        <ShowcaseCard title="J'adore ce jeu !" sousTitle={"Date d'ajout le " + date} />
      </div>
    </main>
  );
}

export default App;
