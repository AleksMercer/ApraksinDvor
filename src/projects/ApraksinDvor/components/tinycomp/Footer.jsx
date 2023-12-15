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
        <a href='https://www.figma.com/file/cBGK6To2qWQ5d4Zw2WDkeJ/%D0%90%D0%BF%D1%80%D0%B0%D1%88%D0%BA%D0%B0-2.0?type=design&node-id=384%3A4704&mode=design&t=19XUeZmaX4d6OK2R-1' className='link'>UI Kit проекта</a>
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