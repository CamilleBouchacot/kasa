import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/main.css'
import '../styles/404.css'


export default function NotFound() {
  return (
    <div>
      <h1 className='Number'>404 </h1>
      <h5 className='titre_notFound'>Oups! La page que vous demandez n'existe pas.</h5>
      <Link to="/" className="text_p">
        Retourner sur la page d'accueil
      </Link>
    </div>
  )
}
