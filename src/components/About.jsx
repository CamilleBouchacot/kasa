import React from 'react'
import '../styles/About.css'
import '../Styles/App.css'
import Bannier_about from '../assets/Banniere_about.png'
import Logo_footer from '../assets/Logo_footer.png'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <>
      <body>
        <div>
          <img className='img_About' src={Bannier_about} alt='img' />
        </div>
        <div className='About_bloc'>
          <h4>Fiabilité</h4>
          <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements,
            et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
        </div>
        <div className='About_bloc'>
          <h4>Respect</h4>
          <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement
            discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
        </div>
        <div className='About_bloc'>
          <h4>Service</h4>
          <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite.
            N'hésitez pas à nous contacter si vous avez la moindre question.</p>
        </div>
        <div className='About_bloc'>
          <h4>Responsabilité</h4>
          <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs,
            chaque logement correspond aux critères de sécurité établis par nos services.
            En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier
            que les standards sont bien respectés.
            Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
        </div>
      </body>
      <footer>
        <div className="Logo_footer">
          <Link>
            <img src={Logo_footer} alt='img' />
          </Link>
        </div>
        <div>
          <h5 className='footer_text'>© 2020 Kasa. All rights reserved</h5>
        </div>
      </footer>
    </>
  )
}