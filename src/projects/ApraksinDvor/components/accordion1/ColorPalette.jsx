import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { selectScrollToContrast } from '../../aprashkaStore' // selectors import
import { scrollToContrastSwap } from '../../aprashkaStore' // reducers import

import Footer from '../tinycomp/Footer'

/* Pic import start */

import colorInterface from '../../media/accordion1/colorpalette/color-interface.svg'

/* Pic import end */

function ColorPalette() {

  const ref = useRef(null)
  const dispatch = useDispatch()
  const scrollToContrastState = useSelector(selectScrollToContrast)

  useEffect(() => { 

    if (scrollToContrastState === 'true') {
      setTimeout(() => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
        dispatch(scrollToContrastSwap('false'))
      }, 0);
    }
  }, [])

  return (
    <>  
      <section className='color-description'>
        <h1>Цветовая палитра</h1>
        <p className='text-container'>У&nbsp;Апраксина двора яркая, современная цветовая палитра с&nbsp;отсылкой на&nbsp;ретро. Сочетание основных и&nbsp;вспомогательных цветов поддерживает характер бренда и&nbsp;увеличивает его узнаваемость, а&nbsp;дополнительные технические палитры позволяют дизайн-системе быть более гибкой.</p>
      </section>

      <section className='color-main'>
        <h2>Основные цвета</h2>
        <p className='text-container'>Основные цвета являются приоритетными в&nbsp;использовании как при создании интерфейсов, так и&nbsp;на&nbsp;все носителях фирменного стиля. При этом каждый из&nbsp;основных цветов транслирует ценности бренда.</p>
        <p>Зеленый — надежность и экологичность. <br />Голубой — доверие и легкость. <br />Оранжевый — энергичность и драйв.</p>
        <div className='color-main__colors'>
          <div className='color-main__colors-green white-text'>
            <span className='color-main__colors_fontsize'>Green</span>
            <p><span>HEX</span><span>#058C50</span></p>
            <p><span>RGB</span><span>5 / 140 / 80</span></p>
          </div>
          <div className='color-main__colors-blue white-text'>
            <span className='color-main__colors_fontsize'>Blue</span>
            <p><span>HEX</span><span>#058CD7</span></p>
            <p><span>RGB</span><span>5 / 140 / 215</span></p>
          </div>
          <div className='color-main__colors-orange'>
            <span className='color-main__colors_fontsize'>Orange</span>
            <p><span>HEX</span><span>#FF5F28</span></p>
            <p><span>RGB</span><span>255 / 90 / 40</span></p>
          </div>
        </div>
      </section>

      <section className='color-additional'>
        <h2>Вспомогательные цвета</h2>
        <p className='text-container'>Вспомогательные цвета всегда используются в&nbsp;дополнение к&nbsp;основным. Желтый и&nbsp;розовый облегчают основную палитру, символизируя собой позитив и&nbsp;дружелюбие.</p>
        <div className='color-additional__colors'>
          <div className='color-additional__colors-yellow'>
            <p className='color-main__colors_fontsize'>Yellow</p>
            <p><span>HEX</span><span>#FFBE14</span></p>
            <p><span>RGB</span><span>255 / 190 / 20</span></p>
          </div>
          <div className='color-additional__colors-pink'>
            <p className='color-main__colors_fontsize'>Pink</p>
            <p><span>HEX</span><span>#FFA5C3</span></p>
            <p><span>RGB</span><span>255 / 165 / 195</span></p>
          </div>
        </div>
      </section>

      <section className='color-opacity'>
        <h2>Прозрачность</h2>
        <p className='text-container'>Для основных и&nbsp;вспомогательных цветов есть 4&nbsp;уровня прозрачности. Использование этих уровней позволяет делать разработку компонентов и&nbsp;продуктов более гибкой.</p>
        <div className='color-opacity__color-grid'>
          <p style={{backgroundColor: '#058C50'}} className='white-text'><span>Opacity 100</span></p>
          <p style={{backgroundColor: '#8ECBB0'}}><span>Opacity 50</span></p>
          <p style={{backgroundColor: '#CDE8DC'}}><span>Opacity 30</span></p>
          <p style={{backgroundColor: '#E6F3ED'}}><span>Opacity 15</span></p>
          <p style={{backgroundColor: '#058CD7'}} className='white-text'><span>Opacity 100</span></p>
          <p style={{backgroundColor: '#82C5EB'}}><span>Opacity 50</span></p>
          <p style={{backgroundColor: '#B4DDF3'}}><span>Opacity 30</span></p>
          <p style={{backgroundColor: '#D9EEF9'}}><span>Opacity 15</span></p>
          <p style={{backgroundColor: '#FF5F28'}}><span>Opacity 100</span></p>
          <p style={{backgroundColor: '#FF9F7E'}}><span>Opacity 50</span></p>
          <p style={{backgroundColor: '#FFCFBF'}}><span>Opacity 30</span></p>
          <p style={{backgroundColor: '#FFEFE9'}}><span>Opacity 15</span></p>
          <p style={{backgroundColor: '#FFBE14'}}><span>Opacity 100</span></p>
          <p style={{backgroundColor: '#FFDF89'}}><span>Opacity 50</span></p>
          <p style={{backgroundColor: '#FFEBB9'}}><span>Opacity 30</span></p>
          <p style={{backgroundColor: '#FFF5DC'}}><span>Opacity 15</span></p>
          <p style={{backgroundColor: '#FFA5C3'}}><span>Opacity 100</span></p>
          <p style={{backgroundColor: '#FFC9DB'}}><span>Opacity 50</span></p>
          <p style={{backgroundColor: '#FFE4ED'}}><span>Opacity 30</span></p>
          <p style={{backgroundColor: '#FFF1F6'}}><span>Opacity 15</span></p>
        </div>
      </section>

      <section className='color-gray'>
        <h2>Палитра серого</h2>
        <div className='color-gray__block'>
          <div className='color-gray__block-gray'>
            <p style={{backgroundColor: '#0A2832'}} className='white-text'><span>#0A2832</span></p>
            <p style={{backgroundColor: '#37464B'}} className='white-text'><span>#37464B</span></p>
            <p style={{backgroundColor: '#738287'}}><span>#738287</span></p>
            <p style={{backgroundColor: '#8C9BA0'}}><span>#8C9BA0</span></p>
            <p style={{backgroundColor: '#AFBEC3'}}><span>#AFBEC3</span></p>
            <p style={{backgroundColor: '#C8D2D7'}}><span>#C8D2D7</span></p>
            <p style={{backgroundColor: '#D7E1E6'}}><span>#D7E1E6</span></p>
            <p style={{backgroundColor: '#E1EBF0'}}><span>#E1EBF0</span></p>
            <p style={{backgroundColor: '#F2F6F9'}}><span>#F2F6F9</span></p>
            <p style={{backgroundColor: '#FFFFFF'}}><span>#FFFFFF</span></p>
          </div>
          <div className='color-gray__block-text'>
            <p>Палитра серого содержит черный, белый и&nbsp;набор серых оттенков. Палитра серого смещена в&nbsp;сторону сине-зеленых оттенков, что придает уникальность фирменному стилю.</p>
            <p>Палитра серого является технической. Она применима при создании интерактивных компонентов и&nbsp;иерархии слоев и&nbsp;текста в&nbsp;интерфейсе.</p>
          </div>
        </div>
      </section>

      <section className='color-semantic'>
        <h2>Семантические цвета</h2>
        <p className='text-container'>Семантические цвета в&nbsp;интерфейсе облегчают интуитивное восприятие элементов. Использование устоявшихся цветовых ассоциаций позволяет мгновенно выделять статусы, акцентировать важные объекты, упрощает навигацию и&nbsp;ускоряет общее понимание интерфейса.</p>
        <div className='color-semantic__pic'>
          <div className='gray-container'>
            <svg xmlns="http://www.w3.org/2000/svg" width="195" height="192" viewBox="0 0 195 192" fill="none">
              <path d="M97.5 168C107.103 168 116.612 166.138 125.484 162.519C134.356 158.901 142.417 153.598 149.207 146.912C155.997 140.226 161.384 132.289 165.059 123.553C168.734 114.818 170.625 105.455 170.625 96C170.625 86.5448 168.734 77.1822 165.059 68.4468C161.384 59.7113 155.997 51.7741 149.207 45.0883C142.417 38.4025 134.356 33.099 125.484 29.4807C116.612 25.8623 107.103 24 97.5 24C78.106 24 59.5064 31.5857 45.7928 45.0883C32.0792 58.5909 24.375 76.9044 24.375 96C24.375 115.096 32.0792 133.409 45.7928 146.912C59.5064 160.414 78.106 168 97.5 168ZM186.875 96C186.875 144.6 146.859 184 97.5 184C48.1406 184 8.125 144.6 8.125 96C8.125 47.4 48.1406 8 97.5 8C146.859 8 186.875 47.4 186.875 96ZM85.3125 131.312L49.4487 96L60.9375 84.688L85.3125 108.688L134.062 60.688L145.551 72L85.3125 131.312Z" fill="#058C50"/>
            </svg>
          </div>
          <div className='gray-container'>
            <svg xmlns="http://www.w3.org/2000/svg" width="195" height="192" viewBox="0 0 195 192" fill="none">
              <path d="M97.5 24C87.8971 24 78.3882 25.8623 69.5163 29.4807C60.6443 33.099 52.5831 38.4025 45.7928 45.0883C39.0025 51.7741 33.6162 59.7114 29.9413 68.4468C26.2664 77.1822 24.375 86.5448 24.375 96C24.375 105.455 26.2664 114.818 29.9413 123.553C33.6162 132.289 39.0025 140.226 45.7928 146.912C52.5831 153.598 60.6443 158.901 69.5163 162.519C78.3882 166.138 87.8971 168 97.5 168C116.894 168 135.494 160.414 149.207 146.912C162.921 133.409 170.625 115.096 170.625 96C170.625 76.9044 162.921 58.5909 149.207 45.0883C135.494 31.5857 116.894 24 97.5 24ZM8.125 96C8.125 47.4 48.1406 8 97.5 8C146.859 8 186.875 47.4 186.875 96C186.875 144.6 146.859 184 97.5 184C48.1406 184 8.125 144.6 8.125 96ZM105.625 52V112H89.375V52H105.625ZM89.375 124H105.658V140.032H89.375V124Z" fill="#FF5F28"/>
            </svg>
          </div>
          <div className='gray-container'>
            <svg xmlns="http://www.w3.org/2000/svg" width="193" height="192" viewBox="0 0 193 192" fill="none">
              <path d="M96.4997 168C106.004 168 115.415 166.138 124.196 162.519C132.977 158.901 140.956 153.598 147.677 146.912C154.397 140.226 159.728 132.289 163.365 123.553C167.003 114.818 168.875 105.455 168.875 96C168.875 86.5448 167.003 77.1822 163.365 68.4468C159.728 59.7113 154.397 51.7741 147.677 45.0883C140.956 38.4025 132.977 33.099 124.196 29.4807C115.415 25.8623 106.004 24 96.4997 24C77.3046 24 58.8958 31.5857 45.3228 45.0883C31.7499 58.5909 24.1247 76.9044 24.1247 96C24.1247 115.096 31.7499 133.409 45.3228 146.912C58.8958 160.414 77.3046 168 96.4997 168ZM184.958 96C184.958 144.6 145.353 184 96.4997 184C47.6465 184 8.04132 144.6 8.04133 96C8.04133 47.4 47.6465 7.99999 96.4997 7.99999C145.353 8 184.958 47.4 184.958 96ZM88.458 140L88.458 80L104.541 80L104.541 140L88.458 140ZM104.541 68L88.4258 68L88.4258 51.968L104.541 51.968L104.541 68Z" fill="#058CD7"/>
            </svg>
          </div>
        </div>
        <div className='color-semantic__text'>
          <p>Зеленый цвет обозначает положительную обратную связь от&nbsp;интерфейса, успешность выполнения задачи.</p>
          <p>Оранжевый цвет является предупреждением о&nbsp;проблеме и&nbsp;обращает внимание на&nbsp;моменты, требующие внимания.</p>
          <p>Синий цвет указывает на&nbsp;дополнительные возможности, функции, информацию, подсказки и&nbsp;описания.</p>
        </div>
      </section>

      <section className='color-state'>
        <h2>Цвета состояний</h2>
        <p className='text-container'>Изменение цвета элементов интерфейса при переходе из&nbsp;одного состояния в&nbsp;другое дает пользователю важную обратную связь о&nbsp;результате совершенного действия. Стандартная схема изменения состояний объекта выглядит следующим образом:</p>
        <p>Hover: цвет становится светлее за счет прозрачности 80%<br />Pressed: цвет становится на один шаг темнее, чем в состоянии покоя<br /> Disabled: цвет становится светлее за счет прозрачности 50%</p>
        <div className='color-state__colors'>
          <p style={{backgroundColor: '#D7E1E6'}}><span>Default</span></p>
          <p style={{backgroundColor: '#D7E1E6'}}><span>Hover</span></p>
          <p style={{backgroundColor: '#D7E1E6'}}><span>Pressed</span></p>
          <p style={{backgroundColor: '#D7E1E6'}}><span>Disabled</span></p>
          <p style={{backgroundColor: '#058C50'}} className='white-text'><span>#058C50</span></p>
          <p style={{backgroundColor: '#37A373'}} className='white-text'><span>#37A373</span></p>
          <p style={{backgroundColor: '#047040'}} className='white-text'><span>#047040</span></p>
          <p style={{backgroundColor: '#8ECBB0'}} className='white-text'><span>#8ECBB0</span></p>
          <p style={{backgroundColor: '#058CD7'}} className='white-text'><span>#058CD7</span></p>
          <p style={{backgroundColor: '#44A9E1'}} className='white-text'><span>#44A9E1</span></p>
          <p style={{backgroundColor: '#0178BA'}} className='white-text'><span>#0178BA</span></p>
          <p style={{backgroundColor: '#82C5EB'}} className='white-text'><span>#82C5EB</span></p>
          <p style={{backgroundColor: '#FF5F28'}}><span>#FF5F28</span></p>
          <p style={{backgroundColor: '#FF7F53'}}><span>#FF7F53</span></p>
          <p style={{backgroundColor: '#E84A13'}}><span>#E84A13</span></p>
          <p style={{backgroundColor: '#FF9F7E'}}><span>#FF9F7E</span></p>
        </div>
      </section>

      <section className='color-interface'>
        <h2>Цвета в интерфейсе</h2>
        <p className='text-container'>При создании интерфейсов следует руководствоваться следующими отношениями при использовании цветов: 60%&nbsp;&mdash; палитра серого, 30%&nbsp;&mdash; основные цвета, 10%&nbsp;&mdash; второстепенные цвета.</p>
        <img src={colorInterface}  alt="color interface" />
      </section>

      <section className='color-contrast' ref={ref}>
        <h2>Цветовой контраст</h2>
        <p className='text-container'>Принципы контрастности в&nbsp;нашей дизайн-системе основаны на&nbsp;стандартах WCAG 2.0. Для основного текста минимально необходим уровень&nbsp;AA, означающий, что коэффициент контрастности должен быть не&nbsp;менее 4,5. Для крупного декоративного текста, заголовков и&nbsp;решения разного уровня творческих задач допустим уровень&nbsp;AA+ с&nbsp;коэффициент контрастности не&nbsp;менее 3.0. Следуя этим рекомендациям, мы&nbsp;обеспечиваем доступность и&nbsp;качественный пользовательский опыт.</p>
      </section>

      <Footer />
    </>
  )
}

export default ColorPalette