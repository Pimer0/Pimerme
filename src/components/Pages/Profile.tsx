import React from 'react'
import Me from '../Me'
export default function Profile() {
  return (
    <main className="m-0 min-w-[320px] h-screen py-10 place-content-center">
              <h1 className='text-center'>
            Bienvenue sur mon profile 3D
        </h1>
      <div       
         className=" bg-zinc-900 max-h-fit w-2/3 rounded-3xl border-zinc-500 border m-10 overflow-hidden contents p-3">
<p>Me voici ! Enfin pas vraiment, c'est juste ce que je m'imagine être en 3D. J'ai fais cet autoportrait avec Spline, bouge ta souris en maintenat alt pour me faire bouger dans tout les sens...</p>

         </div>


        <Me/>
        </main>
  )
}
