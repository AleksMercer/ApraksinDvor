import React from 'react'
import github from '../../media/github.webp'
import figma from '../../media/figma.webp'

function Footer() {
  return (
    <section className='footer'>
      <div className='footer__nopic'>
        <span className='fat'>Появились вопросы?</span>
        <span>Напишите нам в <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley' className='link-underline'>Telegram</a></span>
      </div>

      <div className='footer__pic'>
        <img src={figma} alt="Figma" />
        <span className='fat'>Figma</span>
        <a href='https://www.figma.com/file/cBGK6To2qWQ5d4Zw2WDkeJ/%D0%90%D0%BF%D1%80%D0%B0%D1%88%D0%BA%D0%B0-2.0?type=design&node-id=55-22&mode=design' className='link-underline'>UI Kit проекта</a>
      </div>

      <div className='footer__pic'>
        <img src={github} alt="GitHub" />
        <span className='fat'>GitHub</span>
        <a href='https://github.com/AleksMercer/Projects-Showcase' className='link-underline'>Репозиторий проекта</a>
      </div>
    </section>
  )
}

export default Footer