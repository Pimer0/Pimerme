

function showcasecard (props) {

    
    return ( 
        <div className="bg-zinc-900 h-100 w-100 rounded-3xl border-zinc-500 border m-10">
            <h1 className="m-5">{props.title}</h1>
            <h2 className="m-5">{props.sousTitle}</h2>
            <div className="overflow-hidden w-96 h-40 rounded-3xl border-zinc-500 border">
                <img src="./src/assets/img/d43724154b9c4500d13cfdd0e6488d20.png"></img>
            </div>
        </div>
     );
}

export default showcasecard ;