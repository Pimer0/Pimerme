import React from 'react';

interface BoutonReactionTapedProps {
    onReactionSelect: (imageSrc: string) => void; // Prop de rappel pour gérer la sélection de la réaction
    className?: string;
}

const BoutonReactionTaped: React.FC<BoutonReactionTapedProps> = ({ onReactionSelect, className }) => {
    // Fonction de gestion du clic sur la réaction
    const handleReactionClick = (imageSrc: string) => {
        onReactionSelect(imageSrc); // Appeler la fonction de rappel avec l'image sélectionnée
    };

    return ( 
        <div className={`bg-zinc-900 rounded-3xl border-zinc-500 border overflow-hidden ml-5 mb-4 w-fit ${className}`}>
            <button onClick={() => handleReactionClick('./src/assets/img/AstonishedFace.svg')}>
                <img className="m-2" src="./src/assets/img/AstonishedFace.svg" alt="Astonished Face" />
            </button>
            <button onClick={() => handleReactionClick('./src/assets/img/BeatingHeart.svg')}>
                <img className="m-2" src="./src/assets/img/BeatingHeart.svg" alt="Beating Heart" />
            </button>
            <button onClick={() => handleReactionClick('./src/assets/img/DisappointedFace.svg')}>
                <img className="m-2" src="./src/assets/img/DisappointedFace.svg" alt="Disappointed Face" />
            </button>
            <button onClick={() => handleReactionClick('./src/assets/img/ExplodingHead.svg')}>
                <img className="m-2" src="./src/assets/img/ExplodingHead.svg" alt="Exploding Head" />
            </button>
        </div>
    );
}

export default BoutonReactionTaped;
