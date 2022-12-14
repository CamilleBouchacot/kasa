import React from 'react'
import  {Link}  from 'react-router-dom'
import '../styles/App.css'
import img_Home from '../assets/img_Home.png'
import Blocorange1 from '../assets/Blocorange1.png'

export default function Home() {
  return (
    <>
    <h1 className='h1Home'>Chez vous, partout et ailleurs </h1>

    <body>  
    <div className="img_home">
        <Link>
          <img src={img_Home} alt='img'/>
        </Link>
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

    </>
  )
}
