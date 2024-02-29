import Showcasecard from "./components/Showcasecard"


function App() {

  /* gestion de la date en format francais */
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date().toLocaleDateString('fr-FR', options);

  
  return (
    <main className="m-0 flex place-content-center min-w-[320px] h-screen py-10">
{/* ici vient les components */}
<Showcasecard title="Ma carte magic the gathering préférée !" sousTitle={"Date d'ajout le " + date}/>
<Showcasecard/>
<Showcasecard/>
    </main>
  )
}

export default App
