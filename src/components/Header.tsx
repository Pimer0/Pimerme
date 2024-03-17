import React from 'react'
import {Link} from 'react-router-dom'


export default function Header() {
  return (
<header className='border-zinc-500 border-b flex flex-row place-content-between'>
    <img className="w-1/4" src="/src/assets/img/LogoPimer.svg" alt="logo du site"/>
<nav className='m-4 flex place-self-end'>
    <Link className="text-zinc-100 m-4 hover:text-zinc-400" to="/">Acceuil</Link>
    <Link className="text-zinc-100 m-4 hover:text-zinc-400" to="/Profile">Profile</Link>
    <Link className="text-zinc-100 m-4 hover:text-zinc-400" to="/Rs">Rs</Link>
</nav>

</header>
  )
}
