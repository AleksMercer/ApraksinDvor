import React from 'react'

import DownloadButton from '../tinycomp/DownloadButton'
import Footer from '../tinycomp/Footer'

/* Pic import start */

  import wrongLogo1 from '../../media/accordion1/logotype/wrong-logo-1.svg'

/* Pic import end */

function Typography() {
  return (
    <>
      <section className='typography-description'>
        <h1>Типографика</h1>
        <p>Система типографики в дизайн-системе основана на двух шрифтах: Aprashka Grotesk и  Inter. Соблюдение рекомендаций по использованию этих шрифтов и правил визуальной иерархии текста обеспечивает удобство восприятия информации и помогает пользователю лучше ориентироваться в интерфейсе.</p>
      </section>

      <section className='typography-grotesk'>
        <h2>Aprashka Grotesk</h2>

        <div className='typography-grotesk__block'>
          <div className='gray-container'>
            <img src={wrongLogo1}  alt="Апрашка Гротеск" />
          </div>
          <div className='typography-grotesk__block-text'>
            <p>Aprashka Grotesk — акцидентный шрифт, который был разработан специально для Апраксина двора. Это современная интерпретация советской типографики, что наилучшим образом подчеркивает концепцию нашего проекта.</p>
            <p>Aprashka Grotesk используется в написании названия, слогане и в тех случаях, когда важно сделать сильный акцент или решить творческую задачу. Может быть использован для декоративных элементов и не может быть использовандля написания текстов и создания компонентов интерфейса.</p>
          </div>
        </div>

        <DownloadButton picture={wrongLogo1} />
      </section>

      <section className='typography-inter'>
        <h2>Inter</h2>

        <p>Inter — это современный гуманистический шрифт, оптимизированный для использования в интерфейсах и пользовательских продуктах. Пропорции и открытость символов гармонируют с символами Aprashka Grotesk. Inter используется для большинства элементов пользовательского интерфейса и при проектировании других носителей.</p>
        <p>Имеет большой диапазон начертаний, но в дизайн-системе используется только 3 начертания: Medium — заголовки и акценты, Regular — основной текст, ExtraLight — акценты и стилистические приемы.</p>

        <img src={wrongLogo1}  alt="Шрифт inter" />

        <DownloadButton picture={wrongLogo1} />
      </section>

      <section className='typography-headers'>
        <h2>Заголовки</h2>

        <p>Заголовки должны быт кратко сформулированы и четко описывать содержание контента, к которому они относятся. Заголовок должен состоять из 1-3 слов и не может занимать более одной строки.</p>
        <p>Создана общепринятая система иерархии заголовков от H1 до H5. На каждой странице может быть использован только один заголовок первого уровня, далее используются заголовки по порядку уровней без пропусков. Для заголовков всех уровней применимо только начертание Medium (font-weight: 500).</p>
      
        <div className='typography-headers__block'>
          <div className='typography-headers__block-name'> 
            <p>Level</p>
            <p>Size</p>
            <p>Line-height</p>
            <p>View</p>
          </div>

          <div className='typography-headers__block-h1'> 
            <p>H1</p>
            <p>56 px</p>
            <p>64 px</p>
            <p style={{fontSize: '56px', lineHeight: '64px'}}>Заголовок первого уровня</p>
          </div>

          <div className='typography-headers__block-h2'> 
            <p>H2</p>
            <p>48 px</p>
            <p>56 px</p>
            <p style={{fontSize: '48px', lineHeight: '56px'}}>Заголовок второго уровня</p>
          </div>

          <div className='typography-headers__block-h3'> 
            <p>H3</p>
            <p>36 px</p>
            <p>48 px</p>
            <p style={{fontSize: '36px', lineHeight: '48px'}}>Заголовок третьего уровня</p>
          </div>

          <div className='typography-headers__block-h4'> 
            <p>H4</p>
            <p>28 px</p>
            <p>38 px</p>
            <p style={{fontSize: '28px', lineHeight: '38px'}}>Заголовок четвертого уровня</p>
          </div>

          <div className='typography-headers__block-h5'> 
            <p>H5</p>
            <p>20 px</p>
            <p>28 px</p>
            <p style={{fontSize: '20px', lineHeight: '28px'}}>Заголовок пятого уровня</p>
          </div>
        </div>
      </section>

      <section className='typography-main-text'>
        <h2>Основной текст</h2>
        <p>Для основного и вспомогательного текста используется начертание Regular, а межстрочный интервал рассчитывается с коэффициентом 1,4.</p>
        
        <div className='typography-main-text__block'>
          <div className='typography-main-text__block-name'> 
            <p>Level</p>
            <p>Line-height</p>
            <p>Font-weight</p>
            <p>View</p>
          </div>

          <div className='typography-main-text__block-big-text'> 
            <p>24 px</p>
            <p>32 px</p>
            <p>400</p>
            <p style={{fontSize: '24px', lineHeight: '32px'}}>Крупный основной текст</p>
          </div>

          <div className='typography-main-text__block-main-text'> 
            <p>20 px</p>
            <p>28 px</p>
            <p>400</p>
            <p style={{fontSize: '20px', lineHeight: '28px'}}>Основной текст</p>
          </div>

          <div className='typography-main-text__block-add-text'> 
            <p>16 px</p>
            <p>22 px</p>
            <p>400</p>
            <p style={{fontSize: '16px', lineHeight: '22px'}}>Вспомогательный текст для второстепенной информации и компонентов</p>
          </div>

          <div className='typography-main-text__block-small-text'> 
            <p>12 px</p>
            <p>18 px</p>
            <p>400</p>
            <p style={{fontSize: '12px', lineHeight: '18px'}}>Вспомогательный текст для подписей и технической информации</p>
          </div>
        </div>
      </section>

      <section className='typography-accent-text'>

      </section>

      <section className='typography-interface-text'>

      </section>

      <section className='typography-center'>

      </section>

      <section className='typography-string-length'>

      </section>

      <section className='typography-indentation'>

      </section>

      <section className='typography-list-description'>

      </section>

      <section className='typography-lists'>

      </section>

      <Footer />
    </>
  )
}

export default Typography