import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { selectFirstAccordion ,selectSecondAccordion } from '../../aprashkaStore' // selectors import
import { firstAccordionSwap ,secondAccordionSwap, scrollToElementSwap } from '../../aprashkaStore' // reducers import

import Footer from '../tinycomp/Footer'

/* Pic import start */

import usage from '../../media/accordion2/link/link-usage.webp'
import content from '../../media/accordion2/link/link-content.webp'
import include from '../../media/accordion2/link/link-include.webp'
import separate from '../../media/accordion2/link/link-separate.webp'
import table from '../../media/accordion2/link/link-table.webp'

/* Pic import end */


function Link() {

  const dispatch = useDispatch()
  const firstAccordionState = useSelector(selectFirstAccordion)
  const secondAccordionState = useSelector(selectSecondAccordion)

  return (
    <>
      <section className='link-description'>
        <h1>Link</h1>
        <p>Ссылки используются как навигационные элементы. Они могут располагаться отдельно, или внутри предложения или абзаца.</p>
      </section>

      <section className='link-usage'>
        <h2>Использование</h2>
        <div className='link-usage__container'>
          <img src={usage}  alt="Использования ссылки" />

          <div className='link-usage__container-text'>
            <p>Ссылки обеспечивают компактный вариант навигации, однако избыточное количество ссылок загромождает страницу. Это особенно относится к&nbsp;встроенным в&nbsp;текст ссылкам, которые следует использовать в&nbsp;умеренном количестве.</p>
            <p className='link-usage__container-text-list'>Используйте ссылки в&nbsp;следующих случаях:</p>
            <ul className='mark-lists'> 
              <li><span className='green-mark'></span><span>Для перехода на&nbsp;другую страницу внутри продукта;</span></li>
              <li><span className='green-mark'></span><span>Для перехода на&nbsp;другой сайт;</span></li>
              <li><span className='green-mark'></span><span>Для перехода к&nbsp;элементу на&nbsp;той&nbsp;же странице;</span></li>
              <li><span className='green-mark'></span><span>Для перехода к&nbsp;электронной почте или телефонному номеру.</span></li>
            </ul>
            <p>Для запуска каких-либо действий используйте <NavLink to="../Button" onClick={() => !secondAccordionState && dispatch(secondAccordionSwap())} className={'link-underline'}>кнопки</NavLink> вместо ссылок. При этом кнопки никогда не&nbsp;должны применяться для навигационных действий.</p>
          </div>
        </div>
      </section>

      <section className='link-content'>
        <h2>Содержание</h2>
        <div className='link-content__container'>
          <img src={content}  alt="Из чего сделана ссылка" />
          <div className='link-content__container-text'> 
            <p className='text'>Компонент ссылки состоит из&nbsp;следующих компонентов:</p>
            <div>
              <p>1.</p>
              <p className='mark-text'><span>Метка ссылки. </span>Сообщает о&nbsp;точке назначения при переходе по&nbsp;ссылке. Метка должна точно отражать контент, который пользователи найдут в&nbsp;месте назначения ссылки. Метки должны быть достаточно информативными, чтобы их&nbsp;мог понять пользователь, но&nbsp;не&nbsp;должны быть излишне длинными, чтобы текст переносился, если они не&nbsp;встроены в&nbsp;текст. Рекомендуемый размер метки&nbsp;&mdash; 1&ndash;3&nbsp;слова.</p>
            </div>
            <div>
              <p>2.</p>
              <p className='mark-text'><span>Иконка </span>(опционально). Используется только при размещении ссылки отдельно от&nbsp;текста. Иконка должны быть того&nbsp;же цвета, что и&nbsp;текст ссылки.</p>
            </div>
          </div>
        </div>
      </section>

      <section className='link-build'>
        <section className='link-build__include-link'>
          <h2>Принципы построения </h2>
          <h3>Встроенная ссылка</h3>

          <div className='link-build__include-link-container'>
            <img src={include}  alt="Встроенная ссылка" />
            <p>Встроенные ссылки используются в&nbsp;предложениях или абзацах текста. Встроенная ссылка оформляется в&nbsp;соответствии с&nbsp;окружающим текстом и&nbsp;выделяется акцентным цветом. Это помогает отличить ссылку от&nbsp;текста, и&nbsp;дает понять, что пользователи могут с&nbsp;ними взаимодействовать.</p>
          </div>
        </section>

        <section className='link-build__separate-link'>
          <h3>Отдельная ссылка</h3>
          <div className='link-build__separate-link-container'>
            <img src={separate}  alt="Отдельная ссылка" />
            <div className='link-build__separate-link-container-text'>
              <p>Отдельные ссылки используются непосредственно после контента. Их&nbsp;не&nbsp;следует использовать в&nbsp;предложениях или абзацах.</p>
              <p>Автономный компонент ссылки может быть связан с&nbsp;иконкой. Размер иконки пропорционален размеру текста. Иконка располагается справа от&nbsp;метки и&nbsp;центрируется по&nbsp;вертикали, расстояние между меткой и&nbsp;иконкой зависит от&nbsp;размера текста и&nbsp;составляет 4&ndash;24&nbsp;px. При использовании ссылки совместно с&nbsp;иконкой рекомендуется использовать <NavLink to="../Typography" onClick={() => {!firstAccordionState && dispatch(firstAccordionSwap()); dispatch(scrollToElementSwap('true'))}} className={'link-underline'}>акцентные стили текста</NavLink> для метки.</p>
            </div>
          </div>
        </section>
      </section>

      <section className='link-state'>
        <h2>Состояния</h2>
        <img src={table}  alt="Таблица состояний ссылки" />
      </section>

      <Footer />
    </>
  )
}

export default Link