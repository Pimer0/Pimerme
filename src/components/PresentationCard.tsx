
import { motion } from "framer-motion";
import anime from "animejs/lib/anime.es";

const pre = document.querySelector('.pre');
/* const div = document.querySelector('.divAnime'); */

anime({
    targets: pre,
    innerHTML: [0, 10000],
    easing: 'linear',
    round: 10, 
    loop: true,
});

/* anime ({
    targets: div,
    translateY: -150,
}); */

function PresentationCard() {
    return ( 
        <motion.div       
         className="divAnime bg-zinc-900 max-h-fit w-2/3 rounded-3xl border-zinc-500 border m-10 overflow-hidden">
            <h1 className="m-7">Ceci n'est pas un <a className="pre bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-5xl inline-block text-transparent bg-clip-text">portfolio.</a></h1>
            <p className="m-7">En effet, il s’agit uniquement d’un site internet pour effectuer des tests de mon côté. Si il te plaît , tant mieux ! J’y expose aussi mes capacités technique. N’hésite pas à te balader un peu. Peut-être que tu trouveras des choses cools, ou bien même que tu voudras rentrer en contact avec moi !</p>
            <p className="m-7 ">Hello world ! Voici le nombre de passager sur le site:</p>
            <pre className="pre bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-5xl m-7 inline-block text-transparent bg-clip-text">10000</pre>

        </motion.div>

     );
}

export default PresentationCard;