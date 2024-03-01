import BoutonReaction from "./BoutonReaction";

function Showcasecard (props) {

    
    return ( 
        <div className="bg-zinc-900 max-h-fit w-100 rounded-3xl border-zinc-500 border m-10 overflow-hidden">
            <h1 className="m-5">{props.title}</h1>
            <h2 className="m-5">{props.sousTitle}</h2>
            <div className="overflow-hidden rounded-3xl border-zinc-500 border m-7 max-h-40">
                <img  className="object-contain w-96 h-40" src="./src/assets/img/d43724154b9c4500d13cfdd0e6488d20.png"></img>
            </div>
            <BoutonReaction/>
        </div>
     );
}

export default Showcasecard ;