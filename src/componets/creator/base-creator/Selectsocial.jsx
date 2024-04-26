import React from 'react'
import '../creator-componets.css'
import { useNavigate } from 'react-router-dom';
import Fbicon from '../../icons-creator/fb-icon';
import Instagramicon from '../../icons-creator/instagram-icon';
import Tiktokicon from '../../icons-creator/tiktok-icon';
import Xicon from '../../icons-creator/X-icon';
import Yticon from '../../icons-creator/yt-icon';
const SelectSocial  = () => {
  const navigate = useNavigate();

  const HandleButtonClick = () => {
    navigate('/creator-content/GuideCreator');
  };
  return (
    <div className='select-social-container'>

      <div className='title-social-container'>
        <span className='title-social'>¿Para qué red social vamos a crear contenido hoy?</span>
      </div>

      <div className='social-cards-box'>
        <div className='group-social'>

          <div className='icon-social'>
          <Instagramicon/>
          </div>
          <span>Instagram</span>
        </div>

        <div className='group-social'>
          <div className='icon-social'>
          <Tiktokicon/>
          </div>
          <span>TikTok</span>
        </div>

        <div className='group-social'>
          <div className='icon-social'>
          <Fbicon/>
          </div>
          <span>Facebook</span>
        </div>

        <div className='group-social'>
          <div className='icon-social'>
          <Yticon/>
          </div>
          <span>Youtube</span>
        </div>

        <div className='group-social'>
          <div className='icon-social'>
          <Xicon/>
          </div>
          <span>Twitter / X</span>
        </div>
      </div>

      <div className='btn-social'>
      <button 
      className='btn-social-create'  
      onClick={HandleButtonClick}
      > 
      Crear
      </button>
      </div>
      
    </div>
  )
}

export default SelectSocial

