import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { selectSecondAccordion } from '../../aprashkaStore' // selectors import
import { secondAccordionSwap } from '../../aprashkaStore' // reducers import

import Footer from '../tinycomp/Footer'

/* Pic import start */

import desktop1920 from '../../media/accordion1/gridandindent/1920.webp'
import desktop1536 from '../../media/accordion1/gridandindent/1536.webp'
import desktop1440 from '../../media/accordion1/gridandindent/1440.webp'
import tablet768 from '../../media/accordion1/gridandindent/768.webp'
import mobile480 from '../../media/accordion1/gridandindent/480.webp'
import mobile375 from '../../media/accordion1/gridandindent/375.webp'
import mobile320 from '../../media/accordion1/gridandindent/320.webp'

import layout12 from '../../media/accordion1/gridandindent/layout-12.webp'
import layout16 from '../../media/accordion1/gridandindent/layout-16.webp'
import layoutContainer from '../../media/accordion1/gridandindent/layout-container.webp'

/* Pic import end */

function GridAndIndent() {

  const dispatch = useDispatch()
  const secondAccordionState = useSelector(selectSecondAccordion)

  const ref = useRef(null)
  const handleClickToScroll = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <section className='gridandindent-description'>
        <h1>Сетка и отступы</h1>
        <p>Грамотно организованное пространство интерфейса посредством сетки, единой разметки и&nbsp;системы отступов между элементами позволяет унифицировать параметры размещения объектов для быстрого прототипирования экранов и&nbsp;поддержания визуального единства.</p>
        <p>Фундаментом нашей дизайн-системы служит универсальный модуль размером 4&times;4px. Он&nbsp;задает исходные пропорции для построения всей системы интерфейса. Отступы между объектами и&nbsp;размеры сеток также кратны модулю.</p>
      </section>
     
      <section className='gridandindent-grid'>

        <section className='gridandindent-grid__description'>
          <h2>Сетка</h2>
          <p>Система сеток построена с&nbsp;учетом адаптива под разные устройства и&nbsp;содержит 7&nbsp;брейкпоинтов. Адаптив создается за&nbsp;счет уменьшения ширины колонки и&nbsp;межколонного интервала, а&nbsp;также сокращения количества колонок. Для удобства мы&nbsp;разделили экраны веб-устройств на&nbsp;3&nbsp;категории:</p>
          <ul className='mark-lists'>
            <li><span className='green-mark'></span><span>Desktop&nbsp;&mdash; экраны мониторов. Используется 12-колоночная сетка.</span></li>
            <li><span className='green-mark'></span><span>Tablet&nbsp;&mdash; экраны планшетов. Используется 12-колоночная сетка для горизонтального положения и&nbsp;8-колоночная для вертикального.</span></li>
            <li><span className='green-mark'></span><span>Mobile&nbsp;&mdash; экраны смартфонов. Используется 6-колоночная сетка.</span></li>
          </ul>
        </section>

        {/* Table start */}
        <section className='gridandindent-grid__grid-size'>
          <h3>Desktop 1920</h3>
          <p>Сетка для мониторов и ноутбуков с большим экраном.</p>

          <div className='gridandindent-grid__grid-size-table'>

            <div className='gridandindent-grid__grid-size-table-block'>
              <p>Разрешение экрана (px)</p>
              <p>Количество колонок</p>
              <p>Ширина <br />колонки (px)</p>
              <p>Ширина интервала (px)</p>
              <p>Ширина контента (px)</p>
              <p>Ширина <br />полей (px)</p>
            </div>

            <span></span>

            <div className='gridandindent-grid__grid-size-table-block size'>
              <p>1920</p>
              <p>12</p>
              <p>72</p>
              <p>24</p>
              <p>1128</p>
              <p>396</p>
            </div>

          </div>

          <img src={desktop1920}  alt='Наглядный размер сетки при 1920' />
        </section>

        <section className='gridandindent-grid__grid-size'>
          <h3>Desktop 1536</h3>
          <p>Сетка для ноутбуков и мониторов старого образца.</p>

          <div className='gridandindent-grid__grid-size-table'>

            <div className='gridandindent-grid__grid-size-table-block'>
              <p>Разрешение экрана (px)</p>
              <p>Количество колонок</p>
              <p>Ширина <br />колонки (px)</p>
              <p>Ширина интервала (px)</p>
              <p>Ширина контента (px)</p>
              <p>Ширина <br />полей (px)</p>
            </div>

            <span></span>

            <div className='gridandindent-grid__grid-size-table-block size'>
              <p>1536-1919</p>
              <p>12</p>
              <p>68</p>
              <p>20</p>
              <p>1036</p>
              <p>250-883</p>
            </div>

          </div>

          <img src={desktop1536}  alt='Наглядный размер сетки при 1536' />
        </section>

        <section className='gridandindent-grid__grid-size'>
          <h3>Desktop 1440</h3>
          <p>Сетка для горизонтальных планшетов, ноутбуков и мониторов старого образца.</p>

          <div className='gridandindent-grid__grid-size-table'>

            <div className='gridandindent-grid__grid-size-table-block'>
              <p>Разрешение экрана (px)</p>
              <p>Количество колонок</p>
              <p>Ширина <br />колонки (px)</p>
              <p>Ширина интервала (px)</p>
              <p>Ширина контента (px)</p>
              <p>Ширина <br />полей (px)</p>
            </div>

            <span></span>

            <div className='gridandindent-grid__grid-size-table-block size'>
              <p>1024-1535</p>
              <p>12</p>
              <p>64</p>
              <p>16</p>
              <p>944</p>
              <p>40-295</p>
            </div>

          </div>

          <img src={desktop1440}  alt='Наглядный размер сетки при 1440' />
        </section>

        <section className='gridandindent-grid__grid-size'>
          <h3>Tablet 768</h3>
          <p>Сетка для вертикальных планшетов.</p>

          <div className='gridandindent-grid__grid-size-table'>

            <div className='gridandindent-grid__grid-size-table-block'>
              <p>Разрешение экрана (px)</p>
              <p>Количество колонок</p>
              <p>Ширина <br />колонки (px)</p>
              <p>Ширина интервала (px)</p>
              <p>Ширина контента (px)</p>
              <p>Ширина <br />полей (px)</p>
            </div>

            <span></span>

            <div className='gridandindent-grid__grid-size-table-block size'>
              <p>768-1023</p>
              <p>8</p>
              <p>64</p>
              <p>16</p>
              <p>624</p>
              <p>72-200</p>
            </div>

          </div>

          <img src={tablet768}  alt='Наглядный размер сетки при 768' />
        </section>

        <section className='gridandindent-grid__grid-size'>
          <h3>Mobile 480</h3>
          <p>Сетка для смартфонов с большими экранами.</p>

          <div className='gridandindent-grid__grid-size-table'>

            <div className='gridandindent-grid__grid-size-table-block'>
              <p>Разрешение экрана (px)</p>
              <p>Количество колонок</p>
              <p>Ширина <br />колонки (px)</p>
              <p>Ширина интервала (px)</p>
              <p>Ширина контента (px)</p>
              <p>Ширина <br />полей (px)</p>
            </div>

            <span></span>

            <div className='gridandindent-grid__grid-size-table-block size'>
              <p>480-767</p>
              <p>6</p>
              <p>56</p>
              <p>12</p>
              <p>396</p>
              <p>42-185</p>
            </div>

          </div>

          <img src={mobile480}  alt='Наглядный размер сетки при 480' />
        </section>

        <section className='gridandindent-grid__grid-size'>
          <h3>Mobile 375</h3>
          <p>Сетка для смартфонов.</p>

          <div className='gridandindent-grid__grid-size-table'>

            <div className='gridandindent-grid__grid-size-table-block'>
              <p>Разрешение экрана (px)</p>
              <p>Количество колонок</p>
              <p>Ширина <br />колонки (px)</p>
              <p>Ширина интервала (px)</p>
              <p>Ширина контента (px)</p>
              <p>Ширина <br />полей (px)</p>
            </div>

            <span></span>

            <div className='gridandindent-grid__grid-size-table-block size'>
              <p>375-479</p>
              <p>6</p>
              <p>48</p>
              <p>8</p>
              <p>328</p>
              <p>24-75</p>
            </div>

          </div>

          <img src={mobile375}  alt='Наглядный размер сетки при 375' />
        </section>

        <section className='gridandindent-grid__grid-size'>
          <h3>Mobile 320</h3>
          <p>Сетка для смартфонов с маленькими экранами.</p>

          <div className='gridandindent-grid__grid-size-table'>

            <div className='gridandindent-grid__grid-size-table-block'>
              <p>Разрешение экрана (px)</p>
              <p>Количество колонок</p>
              <p>Ширина <br />колонки (px)</p>
              <p>Ширина интервала (px)</p>
              <p>Ширина контента (px)</p>
              <p>Ширина <br />полей (px)</p>
            </div>

            <span></span>

            <div className='gridandindent-grid__grid-size-table-block size'>
              <p>320-374</p>
              <p>6</p>
              <p>40</p>
              <p>8</p>
              <p>280</p>
              <p>20-47</p>
            </div>

          </div>

          <img src={mobile320}  alt='Наглядный размер сетки при 320' />
        </section>
        {/* Table end */}

      </section>
     
      <section className='gridandindent-layout'>

        <section className='gridandindent-layout__description'>
          <h2>Разметка</h2>
          <p>Мы&nbsp;продумали гибкую разметку, основанную на&nbsp;12&nbsp;колонках. Вы&nbsp;можете разместить контент на&nbsp;всю ширину рабочей области, а&nbsp;также разбить на&nbsp;половины, трети, четверти и&nbsp;шестые. Использование этой структуры обеспечивает согласованный ритм интерфейса.</p>
          <img src={layout12}  alt='12 колонок' />
        </section>

        <section className='gridandindent-layout__adaptive'>
          <h3>Адаптивная разметка</h3>
          <p>При адаптации интерфейса под разные разрешения экранов происходит трансформация разметочной сетки для оптимального отображения контента. Если на&nbsp;широких экранах используется 12-колоночная разметка, то&nbsp;при уменьшении экрана количество колонок сначала сокращается до&nbsp;8, а&nbsp;затем до&nbsp;6&nbsp;колонок. При этом разметка контента динамически изменяется.</p>
          <img src={layout16}  alt='Адаптивная разметка' />
        </section>

        <section className='gridandindent-layout__container'>
          <h3>Разметка в контейнере</h3>
          
          <div className='gridandindent-layout__container-block'>
            <div className='gridandindent-layout__container-block-pic'>
              <img src={layoutContainer}  alt='Разметка в контейнере' />
              <span>Пример использования разметки внутренней сетки в&nbsp;контейнере для экрана шириной 1920&nbsp;px</span>
            </div>

            <div className='gridandindent-layout__container-block-text'>
              <p>Контейнеры всегда строятся по&nbsp;основной сетке и&nbsp;имеют одинаковую структуру. Контейнер имеет внутренние отступы со&nbsp;всех сторон. Для каждого размера экрана определен <span className={'link-underline'} onClick={handleClickToScroll}>конкретный внутренний отступ контейнера</span>.</p>
              <p>Сетка внутри контейнера может быть в&nbsp;1, 2, 4, 6&nbsp;и&nbsp;8&nbsp;колонок в&nbsp;соответствии с&nbsp;разметкой основной сетки. При этом интервал между колонками внутренней сетки контейнера должен быть равен интервалу основной сетки. При создании контейнеров следует стремиться к&nbsp;более простой структуре и&nbsp;располагать контент по&nbsp;сетке из&nbsp;1-2&nbsp;колонок.</p>
            </div>
          </div>
        </section>

      </section>
     
      <section className='gridandindent-indent'>

        <section className='gridandindent-indent__description'>
          <h2>Отступы</h2>
          <p>Отступы между элементами интерфейса позволяют лучше организовать информацию, группировать взаимосвязанные объекты и&nbsp;разделять независимые компоненты. За&nbsp;счет чего создается смысловая иерархия и&nbsp;логическая структура в&nbsp;макете.</p>
          <p>Мы&nbsp;разработали систему отступов, чтобы избежать хаоса при разработке макетов. Использование ограниченного набора отступов поможет вам создавать структурированные макеты быстрее.</p>
          <p>В&nbsp;нашей системе есть правила для вертикальных и&nbsp;горизонтальных отступов, а&nbsp;также <NavLink to="../Breadcrumbs" onClick={() => !secondAccordionState && dispatch(secondAccordionSwap())} className={'link-underline'}>отступы для каждого компонента</NavLink>. Размер отступов изменяется в&nbsp;зависимости от&nbsp;разрешения экрана, но&nbsp;при этом все отступы кратны 4&nbsp;пикселям.</p>
        </section>

        <section className='gridandindent-indent__vertical'>
          <h3>Вертикальные отступы</h3>
          <p>Вертикальные отступы между элементами при адаптиве меняются по&nbsp;следующим правилам:</p>
          <div className='gridandindent-indent__vertical-table'>
            <div>
              <p className='gray'>Mobile</p>
              <span></span>
              <p>4px</p>
              <p>8px</p>
              <p>12px</p>
              <p>16px</p>
              <p>20px</p>
              <p>24px</p>
              <p>32px</p>
              <p>48px</p>
              <p>56px</p>
              <p>96px</p>
            </div>

            <div>
              <p className='gray'>Tablet</p>
              <span></span>
              <p>4px</p>
              <p>8px</p>
              <p>12px</p>
              <p>16px</p>
              <p>20px</p>
              <p>28px</p>
              <p>36px</p>
              <p>52px</p>
              <p>64px</p>
              <p>112px</p>
            </div>

            <div>
              <p className='gray'>Desktop</p>
              <span></span>
              <p>8px</p>
              <p>12px</p>
              <p>16px</p>
              <p>20px</p>
              <p>24px</p>
              <p>32px</p>
              <p>40px</p>
              <p>60px</p>
              <p>80px</p>
              <p>140px</p>
            </div>
          </div>
        </section>

        <section className='gridandindent-indent__horizontal'>
          <h3>Горизонтальные отступы</h3>
          <p>Горизонтальные отступы напрямую зависят от&nbsp;интервала между колонками в&nbsp;основной сетке. При создании адаптива они изменяяются по&nbsp;следующим правилам:</p>
          <div className='gridandindent-indent__horizontal-table'>
            <div>
              <p className='gray'>Mobile 375</p>
              <p className='gray'>Mobile 480</p>
              <p className='gray'>Tablet 768</p>
              <p className='gray'>Desktop 1440</p>
              <p className='gray'>Desktop 1536</p>
              <p className='gray'>Desktop 1920</p>
            </div>

            <span></span>

            <div>
              <p>8px</p>
              <p>12px</p>
              <p>16px</p>
              <p>16px</p>
              <p>20px</p>
              <p>24px</p>
            </div>
          </div>
        </section>

        <section className='gridandindent-indent__container' ref={ref}>
          <h3>Отступы в контейнере</h3>
          <p>Внутренние отступы контейнера (от&nbsp;каждой из&nbsp;сторон) при адаптиве меняются по&nbsp;следующим правилам:</p>
          <div className='gridandindent-indent__container-table'>
            <div>
              <p className='gray'>Mobile</p>
              <p className='gray'>Tablet</p>
              <p className='gray'>Desktop 1440</p>
              <p className='gray'>Desktop 1920</p>
            </div>

            <span></span>

            <div>
              <p>16px</p>
              <p>20px</p>
              <p>24px</p>
              <p>32px</p>
            </div>
          </div>
        </section>

      </section>

      <Footer />
    </>
  )
}

export default GridAndIndent