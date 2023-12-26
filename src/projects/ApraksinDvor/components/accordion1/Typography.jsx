import React from 'react'

import DownloadButton from '../tinycomp/DownloadButton'
import Footer from '../tinycomp/Footer'

import fonts from '../../style/Fonts/Inter-Fonts.rar'

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

        <DownloadButton />
      </section>

      <section className='typography-inter'>
        <h2>Inter</h2>

        <p>Inter — это современный гуманистический шрифт, оптимизированный для использования в интерфейсах и пользовательских продуктах. Пропорции и открытость символов гармонируют с символами Aprashka Grotesk. Inter используется для большинства элементов пользовательского интерфейса и при проектировании других носителей.</p>
        <p>Имеет большой диапазон начертаний, но в дизайн-системе используется только 3 начертания: Medium — заголовки и акценты, Regular — основной текст, ExtraLight — акценты и стилистические приемы.</p>

        <img src={wrongLogo1}  alt="Шрифт inter" />

        <DownloadButton picture={fonts} />
      </section>

      <section className='typography-headers'>
        <h2>Заголовки</h2>

        <p>Заголовки должны быт кратко сформулированы и четко описывать содержание контента, к которому они относятся. Заголовок должен состоять из 1-3 слов и не может занимать более одной строки.</p>
        <p>Создана общепринятая система иерархии заголовков от H1 до H5. На каждой странице может быть использован только один заголовок первого уровня, далее используются заголовки по порядку уровней без пропусков. Для заголовков всех уровней применимо только начертание Medium (font-weight: 500).</p>
      
        <div className='typography-headers__block'>
          
          <div className='typography-headers__block-row typography-headers__block_gray'> 
            <p>Level</p>
            <p>Size</p>
            <p>Line-height</p>
            <p className='typography-headers__block-row-left'>View</p>
          </div>  

          <span></span>

          <div className='typography-headers__block-row'> 
            <p>H1</p>
            <p>56 px</p>
            <p>64 px</p>
            <p className='typography-headers__block-row-left' style={{fontSize: '56px', lineHeight: '64px', fontWeight: '500'}}>Заголовок первого уровня</p>
          </div>

          <div className='typography-headers__block-row'> 
            <p>H2</p>
            <p>48 px</p>
            <p>56 px</p>
            <p className='typography-headers__block-row-left' style={{fontSize: '48px', lineHeight: '56px', fontWeight: '500'}}>Заголовок второго уровня</p>
          </div>

          <div className='typography-headers__block-row'> 
            <p>H3</p>
            <p>36 px</p>
            <p>48 px</p>
            <p className='typography-headers__block-row-left' style={{fontSize: '36px', lineHeight: '48px', fontWeight: '500'}}>Заголовок третьего уровня</p>
          </div>

          <div className='typography-headers__block-row'> 
            <p>H4</p>
            <p>28 px</p>
            <p>38 px</p>
            <p className='typography-headers__block-row-left' style={{fontSize: '28px', lineHeight: '38px', fontWeight: '500'}}>Заголовок четвертого уровня</p>
          </div>

          <div className='typography-headers__block-row'> 
            <p>H5</p>
            <p>20 px</p>
            <p>28 px</p>
            <p className='typography-headers__block-row-left' style={{fontSize: '20px', lineHeight: '28px', fontWeight: '500'}}>Заголовок пятого уровня</p>
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
        <h2>Акцентный текст</h2>
        <p>Чтобы выделить важные слова в тексте, используется начертание Medium. Такое же начертание следует использовать в выразительных компонентах, например, в кнопках и ссылках.</p> 

        <div className='typography-accent-text__block'>
          <div className='typography-accent-text__block-name'> 
            <p>Level</p>
            <p>Line-height</p>
            <p>Font-weight</p>
            <p>View</p>
          </div>

          <div className='typography-accent-text__block-big-text'> 
            <p>24 px</p>
            <p>32 px</p>
            <p>500</p>
            <p style={{fontSize: '24px', lineHeight: '32px'}}>Крупный основной текст</p>
          </div>

          <div className='typography-accent-text__block-main-text'> 
            <p>20 px</p>
            <p>28 px</p>
            <p>500</p>
            <p style={{fontSize: '20px', lineHeight: '28px'}}>Основной текст</p>
          </div>5
          <div className='typography-accent-text__block-add-text'> 
            <p>16 px</p>
            <p>22 px</p>
            <p>500</p>
            <p style={{fontSize: '16px', lineHeight: '22px'}}>Вспомогательный текст для второстепенной информации и компонентов</p>
          </div>

          <div className='typography-accent-text__block-small-text'> 
            <p>12 px</p>
            <p>18 px</p>
            <p>500</p>
            <p style={{fontSize: '12px', lineHeight: '18px'}}>Вспомогательный текст для подписей и технической информации</p>
          </div>
        </div>

        <p>Для решения стилистических и творческих задач допускается использование начертания ExtraLight для текста крупного размера. Такое решение позволяет добиться максимального контраста.</p>
      </section>

      <section className='typography-interface-text'>
        <h2>Текст в интерфейсе</h2>
        <p>Помимо структурирования текста посредством иерархии и семантики, следует учитывать правила выравнивания, соблюдать размер строки и закономерность в отступах.</p>
      </section>

      <section className='typography-center'>
        <h3>Выравнивание</h3>
        <p>Выравнивание заголовков и основного текста всегда по левому краю.</p>

        <div className='gray-container'>
          <p className='gray-container__text'>Выравнивание текста по левому краю обеспечивает оптимальную читабельность и восприятие при работе с текстовыми блоками.</p>
        </div>
      </section>

      <section className='typography-string-length'>
        <h3>Длина строки</h3>
        <p>Оптимальная длина строки текста 45-80 символов. Рекомендуется использовать контейнеры для основного текста не меньше 1/4 и не больше 2/3 модульной сетки. При этом чем короче строка, тем меньше текста она должна содержать.</p>
        
        <img src={wrongLogo1}  alt="Ширина текстового блока" />
      </section>

      <section className='typography-indentation'>
        <h3>Отступы</h3>
        <p>Рекомендуется использовать стандартную систему отступов вложенных блоков с разными уровнями заголовков.</p>
        
        <div className='gray-container'>
          <div className='gray-container__num-column'>
            <p>32</p>
            <p>140</p>
            <p>32</p>
            <p>32</p>
            <p>80</p>
            <p>20</p>
            <p>60</p>
            <p>16</p>
            <p>40</p>
            <p>12</p>
          </div>

          <div className='gray-container__text-column'>
            <p style={{fontSize: '56px', lineHeight: '64px'}}>Заголовок первого уровня</p>
            <span className='gray-container__text-column-green-block'></span>
            <p>Грамотная система отступов между заголовками и текстом визуально разделяет информационные блоки, связывая воедино смысловые части интерфейса для комфортного восприятия.</p>
            <span className='gray-container__text-column-orange-block'></span>
              
              <p style={{fontSize: '48px', lineHeight: '56px'}}>Заголовок второго уровня</p>
              <span className='gray-container__text-column-green-block'></span>
              <p>Грамотная система отступов между заголовками и текстом визуально разделяет информационные блоки, связывая воедино смысловые части интерфейса для комфортного восприятия.</p>
              <span className='gray-container__text-column-green-block'></span>
              <p>Грамотная система отступов между заголовками и текстом визуально разделяет информационные блоки, связывая воедино смысловые части интерфейса для комфортного восприятия.</p>
              <span className='gray-container__text-column-orange-block'></span>
              
                <p style={{fontSize: '36px', lineHeight: '48px'}}>Заголовок третьего уровня</p>
                <span className='gray-container__text-column-green-block'></span>
                <p>Грамотная система отступов между заголовками и текстом визуально разделяет информационные блоки, связывая воедино смысловые части интерфейса для комфортного восприятия.</p>
                <span className='gray-container__text-column-orange-block'></span>

                  <p style={{fontSize: '28px', lineHeight: '38px'}}>Заголовок четвертого уровня</p>
                  <span className='gray-container__text-column-green-block'></span>
                  <p>Грамотная система отступов между заголовками и текстом визуально разделяет информационные блоки, связывая воедино смысловые части интерфейса для комфортного восприятия.</p>
                  <span className='gray-container__text-column-orange-block'></span>

                    <p style={{fontSize: '20px', lineHeight: '28px'}}>Заголовок пятого уровня</p>
                    <span className='gray-container__text-column-green-block'></span>
                    <p>Грамотная система отступов между заголовками и текстом визуально разделяет информационные блоки, связывая воедино смысловые части интерфейса для комфортного восприятия.</p>
          </div>
        </div>
      </section>

      <section className='typography-list-description'>
        <h2>Списки</h2>
        <p>Списки позволяют представить содержимое интерфейсов в более структурированном виде по сравнению со сплошным текстом. Возможно использования одноуровневых списков двух видов: маркированный и нумерованный.</p>
      </section>

      <section className='typography-lists'>
        <div className='typography-lists__name'>
          <h2>Маркированный список</h2>
          <h2>Нумерованный список</h2>
        </div>

        <div className='typography-lists__text'>
          <p>Следует использовать маркированный список, когда его элементы равнозначны и не образуют последовательность. Каждый пункт имеет квадратный маркер 10×10px, выравненный по середине строки. </p>
          <p>Следует использовать нумерованный список, когда у элементов списка есть последовательность. Каждый пункт отмечается цифрой с точкой, равной размеру основного текста.</p>
        </div>

        <div className='typography-lists__pic'>
          <img src={wrongLogo1}  alt="Маркированный список" />
          <img src={wrongLogo1}  alt="Нумерованный список" />
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Typography