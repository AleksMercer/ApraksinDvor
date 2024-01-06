import React from 'react'

import DownloadButton from '../tinycomp/DownloadButton'
import Footer from '../tinycomp/Footer'

import fonts from '../../style/Fonts/Inter-Fonts.rar'

/* Pic import start */

  import grotesk from '../../media/accordion1/typography/grotesk.svg'
  import interFont from '../../media/accordion1/typography/inter.svg'
  import textLeft from '../../media/accordion1/typography/text-left.svg'
  import textWidth from '../../media/accordion1/typography/text-width.svg'
  import indentation from '../../media/accordion1/typography/indentation.svg'
  import markList from '../../media/accordion1/typography/mark-list.svg'
  import numList from '../../media/accordion1/typography/num-list.svg'

/* Pic import end */

function Typography() {
  
  return (
    <>
      <section className='typography-description'>
        <h1>Типографика</h1>
        <p>Система типографики в&nbsp;дизайн-системе основана на&nbsp;двух шрифтах: Aprashka Grotesk и&nbsp;Inter. Соблюдение рекомендаций по&nbsp;использованию этих шрифтов и&nbsp;правил визуальной иерархии текста обеспечивает удобство восприятия информации и&nbsp;помогает пользователю лучше ориентироваться в&nbsp;интерфейсе.</p>
      </section>

      <section className='typography-grotesk'>
        <h2>Aprashka Grotesk</h2>

        <div className='typography-grotesk__block'>
          <img src={grotesk}  alt="Апрашка Гротеск" />

          <div className='typography-grotesk__block-text'>
            <p>Aprashka Grotesk&nbsp;&mdash; акцидентный шрифт, который был разработан специально для Апраксина двора. Это современная интерпретация советской типографики, что наилучшим образом подчеркивает концепцию нашего проекта.</p>
            <p>Aprashka Grotesk используется в&nbsp;написании названия, слогане и&nbsp;в&nbsp;тех случаях, когда важно сделать сильный акцент или решить творческую задачу. Может быть использован для декоративных элементов и&nbsp;не&nbsp;может быть использовандля написания текстов и&nbsp;создания компонентов интерфейса.</p>
          </div>
        </div>

        <DownloadButton />
      </section>

      <section className='typography-inter'>
        <h2>Inter</h2>

        <p>Inter&nbsp;&mdash; это современный гуманистический шрифт, оптимизированный для использования в&nbsp;интерфейсах и&nbsp;пользовательских продуктах. Пропорции и&nbsp;открытость символов гармонируют с&nbsp;символами Aprashka Grotesk. Inter используется для большинства элементов пользовательского интерфейса и&nbsp;при проектировании других носителей.</p>
        <p>Имеет большой диапазон начертаний, но&nbsp;в&nbsp;дизайн-системе используется только 3&nbsp;начертания: Medium&nbsp;&mdash; заголовки и&nbsp;акценты, Regular&nbsp;&mdash; основной текст, ExtraLight&nbsp;&mdash; акценты и&nbsp;стилистические приемы.</p>

        <img src={interFont}  alt="Шрифт inter" />

        <DownloadButton picture={fonts} />
      </section>

      <section className='typography-headers'>
        <h2>Заголовки</h2>

        <p>Заголовки должны быт кратко сформулированы и&nbsp;четко описывать содержание контента, к&nbsp;которому они относятся. Заголовок должен состоять из&nbsp;1-3 слов и&nbsp;не&nbsp;может занимать более одной строки.</p>
        <p>Создана общепринятая система иерархии заголовков от&nbsp;H1&nbsp;до&nbsp;H5. На&nbsp;каждой странице может быть использован только один заголовок первого уровня, далее используются заголовки по&nbsp;порядку уровней без пропусков. Для заголовков всех уровней применимо только начертание Medium (font-weight: 500).</p>
      
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
        <p>Для основного и&nbsp;вспомогательного текста используется начертание Regular, а&nbsp;межстрочный интервал рассчитывается с&nbsp;коэффициентом 1,4.</p>
        
        <div className='typography-main-text__block'>
          <div className='typography-main-text__block-row typography-headers__block_gray'> 
            <p>Size</p>
            <p>Line-height</p>
            <p>Font-weight</p>
            <p>Paragraphs-space</p>
            <p className='typography-headers__block-row-left'>View</p>
          </div>

          <span></span>

          <div className='typography-main-text__block-row'> 
            <p>24 px</p>
            <p>32 px</p>
            <p>400</p>
            <p>28 px</p>
            <p className='typography-headers__block-row-left' style={{fontSize: '24px', lineHeight: '32px'}}>Крупный основной текст</p>
          </div>

          <div className='typography-main-text__block-row'> 
            <p>20 px</p>
            <p>28 px</p>
            <p>400</p>
            <p>24 px</p>
            <p className='typography-headers__block-row-left' style={{fontSize: '20px', lineHeight: '28px'}}>Основной текст</p>
          </div>

          <div className='typography-main-text__block-row'> 
            <p>16 px</p>
            <p>22 px</p>
            <p>400</p>
            <p>18 px</p>
            <p className='typography-headers__block-row-left' style={{fontSize: '16px', lineHeight: '22px'}}>Вспомогательный текст для второстепенной информации</p>
          </div>

          <div className='typography-main-text__block-row'> 
            <p>12 px</p>
            <p>18 px</p>
            <p>400</p>
            <p>14 px</p>
            <p className='typography-headers__block-row-left' style={{fontSize: '12px', lineHeight: '18px'}}>Вспомогательный текст для подписей и технической информации</p>
          </div>
        </div>
      </section>

      <section className='typography-accent-text'>
        <h2>Акцентный текст</h2>
        <p>Чтобы выделить важные слова в&nbsp;тексте, используется начертание Medium. Такое&nbsp;же начертание следует использовать в&nbsp;выразительных компонентах, например, в&nbsp;кнопках и&nbsp;ссылках.</p> 

        <div className='typography-accent-text__block'>
          <div className='typography-accent-text__block-row typography-headers__block_gray'> 
            <p>Size</p>
            <p>Line-height</p>
            <p>Font-weight</p>
            <p>Paragraphs-space</p>
            <p className='typography-headers__block-row-left'>View</p>
          </div>

          <span></span>

          <div className='typography-accent-text__block-row'> 
            <p>24 px</p>
            <p>32 px</p>
            <p>500</p>
            <p>28 px</p>
            <p className='typography-headers__block-row-left'style={{fontSize: '24px', lineHeight: '32px'}}>Крупный основной текст</p>
          </div>

          <div className='typography-accent-text__block-row'> 
            <p>20 px</p>
            <p>28 px</p>
            <p>500</p>
            <p>24 px</p>
            <p className='typography-headers__block-row-left' style={{fontSize: '20px', lineHeight: '28px'}}>Основной текст</p>
          </div>

          <div className='typography-accent-text__block-row'> 
            <p>16 px</p>
            <p>22 px</p>
            <p>500</p>
            <p>18 px</p>
            <p className='typography-headers__block-row-left' style={{fontSize: '16px', lineHeight: '22px'}}>Вспомогательный текст для второстепенной информации</p>
          </div>

          <div className='typography-accent-text__block-row'> 
            <p>12 px</p>
            <p>18 px</p>
            <p>500</p>
            <p>14 px</p>
            <p className='typography-headers__block-row-left' style={{fontSize: '12px', lineHeight: '18px'}}>Вспомогательный текст для подписей и технической информации</p>
          </div>
        </div>

        <p>Для решения стилистических и&nbsp;творческих задач допускается использование начертания ExtraLight для текста крупного размера. Такое решение позволяет добиться максимального контраста.</p>
      </section>

      <section className='typography-interface'>

        <section className='typography-interface__text'>
          <h2>Текст в интерфейсе</h2>
          <p>Помимо структурирования текста посредством иерархии и&nbsp;семантики, следует учитывать правила выравнивания, соблюдать размер строки и&nbsp;закономерность в&nbsp;отступах.</p>
        </section>

        <section className='typography-interface__center'>
          <h3>Выравнивание</h3>
          <p>Выравнивание заголовков и&nbsp;основного текста всегда по&nbsp;левому краю.</p>
          <img src={textLeft}  alt="Выравнивание текста по левому краю обеспечивает оптимальную читабельность и восприятие при работе с текстовыми блоками." />
        </section>

        <section className='typography-interface__string-length'>
          <h3>Длина строки</h3>
          <p>Оптимальная длина строки текста 45-80&nbsp;символов. Рекомендуется использовать контейнеры для основного текста не&nbsp;меньше 1/4 и&nbsp;не&nbsp;больше 2/3 модульной сетки. При этом чем короче строка, тем меньше текста она должна содержать.</p>
          <img src={textWidth}  alt="Длина строки текста влияет на степень комфорта при чтении — чем больше количество символов в строке, тем сложнее читателю сосредотачивать внимание и удерживать фокус взгляда при переходе с одной строки на другую." />
        </section>

        <section className='typography-interface__indentation'>
          <h3>Отступы</h3>
          <p>Рекомендуется использовать стандартную систему отступов вложенных блоков с&nbsp;разными уровнями заголовков.</p>
          <img src={indentation} alt='Грамотная система отступов между заголовками и текстом визуально разделяет информационные блоки, связывая воедино смысловые части интерфейса для комфортного восприятия.' />
        </section>

      </section>

      <section className='typography-list'>

        <section className='typography-list__description'>
          <h2>Списки</h2>
          <p>Списки позволяют представить содержимое интерфейсов в&nbsp;более структурированном виде по&nbsp;сравнению со&nbsp;сплошным текстом. Возможно использования одноуровневых списков двух видов: маркированный и&nbsp;нумерованный.</p>
        </section>

        <section className='typography-list__lists'>
          <div className='typography-list__lists-name'>
            <h3>Маркированный список</h3>
            <h3>Нумерованный список</h3>
          </div>

          <div className='typography-list__lists-text'>
            <p>Следует использовать маркированный список, когда его элементы равнозначны и&nbsp;не&nbsp;образуют последовательность. Каждый пункт имеет квадратный маркер 10&times;10px, выравненный по&nbsp;середине строки.</p>
            <p>Следует использовать нумерованный список, когда у&nbsp;элементов списка есть последовательность. Каждый пункт отмечается цифрой с&nbsp;точкой, равной размеру основного текста.</p>
          </div>

          <div className='typography-list__lists-pic'>
            <img src={markList}  alt="Маркированный список" />
            <img src={numList}  alt="Нумерованный список" />
          </div>
        </section>

      </section>

      <Footer />
    </>
  )
}

export default Typography