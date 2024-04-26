import React from 'react'
import '../creator-componets.css'
const GuideCreator = () => {
  return (
    <>
    <div className='container-guide'>
      <div className='title-guide'>
        <div className='title-input'>
        <input type='text' placeholder='Coloca un título a tu publicación'></input>
        </div>
      </div>

      <div className='quill-container'>
        <div className='btn-quills'>
        </div>

        <div className='editor-quills'>
        </div>

      </div>

    </div>
    </>
  )
}

export default GuideCreator
