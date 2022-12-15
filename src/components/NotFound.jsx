import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/NotFound.css'
import '../styles/App.css'
<link rel="stylesheet" media="screen and (max-width: 767px)" href="../styles/NotFound.css" />

export default function NotFound() {
  return (
    <div>
      <h1 className='Number'>404 </h1>
      <h5 className='titre_notFound'>Oups! La page que vous demandez n'existe pas.</h5>
      <Link>
      <p className='text_p'>Retourner sur la page d'accueil</p>
      </Link>
    </div>
  )
}
