import React from 'react'
import github from '../../media/github.png'
import figma from '../../media/figma.png'

function Footer() {
  return (
    <section className='footer'>
      <div className='footer__nopic'>
        <span className='fat'>Появились вопросы?</span>
        <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley' className='link'>Напишите нам в Telegram</a>
      </div>

      <div className='footer__pic'>
        <img src={figma} alt="Figma" />
        <span className='fat'>Figma</span>
        <a href='https://www.youtube.com/watch?v=oyN2ybzWLCs&ab_channel=FatihSahin' className='link'>UI Kit проекта</a>
      </div>

      <div className='footer__pic'>
        <img src={github} alt="GitHub" />
        <span className='fat'>GitHub</span>
        <a href='https://github.com/AleksMercer/Projects-Showcase' className='link'>Репозиторий проекта</a>
      </div>
    </section>
  )
}

export default Footer