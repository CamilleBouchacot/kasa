import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Home.css'
import img_Home from '../assets/img_Home.png'
import Blocorange1 from '../assets/Blocorange1.png'
import Logo_footer from '../assets/Logo_footer.png'

export default function Home() {
  return (
    <>
      <body>
        <div>
          <h1 className='h1Home'>Chez vous, partout et ailleurs </h1>       
              <img className='img_Home' src={img_Home} alt='img' />
        </div>
        <div className='TotalBloc'>
          <div className='Blocorange1'>
            <Link>
              <img src={Blocorange1} alt='bloc' />
              <h6 className='titresBloc'>Titre</h6>
            </Link>

          </div>
          <div className='Blocorange1'>
            <Link>
              <img src={Blocorange1} alt='bloc' />
              <h6 className='titresBloc'>Titre</h6>
            </Link>

          </div>
          <div className='Blocorange1'>
            <Link>
              <img src={Blocorange1} alt='bloc' />
              <h6 className='titresBloc'>Titre</h6>
            </Link>
          </div>
        </div>
        <div className='TotalBloc2'>
          <div className='Blocorange1'>
            <Link>
              <img src={Blocorange1} alt='bloc' />
              <h6 className='titresBloc'>Titre</h6>
            </Link>
          </div>
          <div className='Blocorange1'>
            <Link>
              <img src={Blocorange1} alt='bloc' />
              <h6 className='titresBloc'>Titre</h6>
            </Link>
          </div>
          <div className='Blocorange1'>
            <Link>
              <img src={Blocorange1} alt='bloc' />
              <h6 className='titresBloc'>Titre</h6>
            </Link>
          </div>
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
