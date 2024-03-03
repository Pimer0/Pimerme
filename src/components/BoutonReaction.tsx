// BoutonReaction.tsx
import React from 'react';

interface BoutonReactionProps {
    onClick: () => void;
    selectedImage: string; // Ajoutez la prop selectedImage pour l'image sélectionnée
    className?: string;
}

const BoutonReaction: React.FC<BoutonReactionProps> = ({ onClick, selectedImage, className }) => {
    return (
        <button onClick={onClick} className={`bg-zinc-900 rounded-3xl border-zinc-500 border overflow-hidden ml-5 mb-4 ${className}`}>
            {selectedImage && <img className="m-2" src={selectedImage} alt="Selected Image" />} {/* Affichage de l'image sélectionnée */}
        </button>
    );
};

export default BoutonReaction;
