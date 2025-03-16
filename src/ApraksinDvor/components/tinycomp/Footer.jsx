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
        <a href='https://www.figma.com/design/QASH4ZjzwkTSwooP9TKmwp/%D0%94%D0%B8%D0%B7%D0%B0%D0%B8%CC%86%D0%BD-%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0-%D0%90%D0%BF%D1%80%D0%B0%D0%BA%D1%81%D0%B8%D0%BD-%D0%B4%D0%B2%D0%BE%D1%80' className='link-underline'>UI Kit проекта</a>
      </div>

      <div className='footer__pic'>
        <img src={github} alt="GitHub" />
        <span className='fat'>GitHub</span>
        <a href='https://github.com/AleksMercer/ApraksinDvor' className='link-underline'>Репозиторий проекта</a>
      </div>
    </section>
  )
}

export default Footer