// ShowCasecard.tsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BoutonReaction from "./BoutonReaction";
import BoutonReactionTaped from "./BoutonReactionTaped";

function ShowCasecard(props) {
    const [reactionClicked, setReactionClicked] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const handleReactionSelect = (imageSrc: string) => {
        setSelectedImage(imageSrc);
        setReactionClicked(false);
    };

    const handleReactionClick = () => {
        setReactionClicked(true);
    };

    useEffect(() => {
        // Au chargement du composant, initialisez l'image sélectionnée avec l'image par défaut
        setSelectedImage('./src/assets/img/main-tenant-coeur.svg');
    }, []);

    return ( 
        <motion.div whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}className="bg-zinc-900 max-h-fit w-100 rounded-3xl border-zinc-500 border m-10 overflow-hidden">
            <h1 className="m-5">{props.title}</h1>
            <h2 className="m-5">{props.sousTitle}</h2>
            <div className="overflow-hidden rounded-3xl border-zinc-500 border m-7 max-h-40">
                <img src={props.data.src} alt={props.data.alt} className="object-contain w-96 h-40" />
            </div>
            {!reactionClicked && <BoutonReaction onClick={handleReactionClick} selectedImage={selectedImage} />}
            {reactionClicked && <BoutonReactionTaped onReactionSelect={handleReactionSelect} />}
        </motion.div>
    );
}

export default ShowCasecard;
