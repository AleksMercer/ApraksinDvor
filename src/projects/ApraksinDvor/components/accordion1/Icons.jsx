import React from 'react'
import Footer from '../tinycomp/Footer'

/* Pic import start */

import commerce from '../../media/accordion1/icons/commerce-icons.svg'
import control from '../../media/accordion1/icons/control-icons.svg'
import place from '../../media/accordion1/icons/place-icons.svg'
import nav from '../../media/accordion1/icons/nav-icons.svg'
import user from '../../media/accordion1/icons/user-icons.svg'
import contrast from '../../media/accordion1/icons/icons-contrast.svg'
import size from '../../media/accordion1/icons/icons-size.svg'
import lineAndFilling from '../../media/accordion1/icons/lineAndFilling.svg'
import rounding from '../../media/accordion1/icons/rounding.svg'
import textAndIcons from '../../media/accordion1/icons/textAndIcons.svg'
import grid1 from '../../media/accordion1/icons/grid-icons-1.svg'
import grid2 from '../../media/accordion1/icons/grid-icons-2.svg'
import grid3 from '../../media/accordion1/icons/grid-icons-3.svg'

/* Pic import end */

function Icons() {
  return (
    <>
      <section className='icons-description'>
        <h1>Иконка</h1>
        <p>Иконки в&nbsp;нашей дизайн-системе обеспечивают визуальное выделение ключевых элементов интерфейса, улучшая сканируемость и&nbsp;навигацию по&nbsp;экрану, и&nbsp;служат для быстрой передачи смысла и&nbsp;назначения компонентов. А&nbsp;также несут эстетическую функцию, дополняя стиль интерфейса, поддерживая бренд и&nbsp;передавая его характер.</p>
        <p>Для удобства мы&nbsp;разделили все иконки системы на&nbsp;несколько наборов, которые при необходимости могут дополняться новыми элементами.</p>
      </section>
      
      <section className='icons-pack'>
        <h2>Наборы иконок</h2>

        <div className='icons-pack__container'>
          <div className='icons-pack__container-block'> {/* серый блок и картинка с иконками разные пикчи, надо убрать стрелки */}
            <div className='gray-container'>
              <img src={control}  alt='шесть иконок' />
            </div>
            <h4>Управление</h4>
            <p>Это самый большой и&nbsp;основной набор иконок, необходимый для визуализации возможностей управления интерфейсом.</p>
          </div>
          
          <div className='icons-pack__container-block'>
            <div className='gray-container'>
              <img src={nav}  alt='шесть иконок' />
            </div>
            <h4>Навигация</h4>
            <p>Набор иконок для организации навигации в&nbsp;интерфейсе, а&nbsp;также для создания карты пространства Апраксина двора.</p>
          </div>

          <div className='icons-pack__container-block'>
            <div className='gray-container'>
              <img src={user}  alt='шесть иконок' />
            </div>
            <h4>Пользователь</h4>
            <p>Набор иконок для визуализации элементов, относящихся к&nbsp;личным данным пользователя и&nbsp;управлению ими.</p>
          </div>

          <div className='icons-pack__container-block'>
            <div className='gray-container'>
              <img src={commerce}  alt='шесть иконок' />
            </div>
            <h4>Коммерция</h4>
            <p>Набор для визуализации элементов интерфейса, связанных с&nbsp;покупкой и&nbsp;оплатой.</p>
          </div>

          <div className='icons-pack__container-block'>
            <div className='gray-container'>
              <img src={place}  alt='шесть иконок' />
            </div>
            <h4>Места</h4>
            <p>Набор используется для создания карт и&nbsp;других навигационных материалов.</p>
          </div>
        </div>

      </section>

      <section className='icons-size'>
        <h2>Размеры</h2>
        <p>Мы&nbsp;создали систему размеров иконок. Стандартным является размер 24&times;24px, используйте эти иконки в&nbsp;большинстве случаев.</p>
        <p>Более крупный или мелкий масштаб иконок используется только в&nbsp;особых случаях для решения специфических задач интерфейса. При разработке интерфейса и&nbsp;его отдельных компонентов стоит учитывать, что иконки более крупного масштаба применимы в&nbsp;сочетании с&nbsp;заголовками или крупным основным текстом, а&nbsp;иконки мелкого масштаба следует использовать с&nbsp;вспомогательным текстом.</p>
        <img src={size}  alt='Размеры иконок' />
      </section>

      <section className='icons-text'>
        <h2>Иконка и текст</h2>
        <div className='icons-text__container'>
          <img src={textAndIcons}  alt='Размеры с иконкой с надписью' />
          <p>При использовании рядом с&nbsp;текстом иконки должны быть выровнены по&nbsp;центру по&nbsp;вертикали. Также стоит соблюдать отступ от&nbsp;иконки до&nbsp;текста. Для иконок с&nbsp;размерами 16&times;16, 24&times;24, 28&times;28&nbsp;px этот отступ равен 12&nbsp;px. Для самой крупной иконки минимальный размер отступа равен 16&nbsp;px, а&nbsp;для самой маленькой 8&nbsp;px.</p>
        </div>
      </section>

      <section className='icons-color'>
        <h2>Цвет</h2>
        <div className='icons-color__container'>
          <img src={contrast}  alt='Проверка цветового контраста' />
          <p>К&nbsp;иконкам применимы все фирменные цвета нашей дизайн-системы. При этом важно, чтобы иконка и&nbsp;сопровождающий ее&nbsp;текст были одинакового цвета, и&nbsp;соблюдались <span>принципы цветового контраста</span>.</p>
        </div>
      </section>

      <section className='icons-design'>
        <section className='icons-design__description'>
          <h2>Проектирование иконок</h2>
          <p>Мы&nbsp;разработали рекомендации по&nbsp;проектированию универсальных иконок, что помогает достичь единообразия в&nbsp;нашей дизайн-системе.</p>
        </section>

        <section className='icons-design__grid'>
          <h3>Сетка</h3>
          <p>Все иконки строятся по&nbsp;модульной сетке 24&times;24&nbsp;px. Это и&nbsp;является размером универсального контейнера, в&nbsp;котором размещается иконка и&nbsp;размера которого она не&nbsp;может превышать.</p>
          <p>Внутри контейнера выделяется рабочая область 22&times;22&nbsp;px, где размещаются непосредственно изображения. Минимальный отступ рабочего поля от&nbsp;границы модуля составляет 1&nbsp;px с&nbsp;каждой стороны.</p>
          <img src={grid1}  alt='Сетка иконка' />
          <p>Помимо модульной сетки, мы&nbsp;разработали вспомогательную сетку. Это сетка направляющих, созданная для выравнивания визуального веса между разными по&nbsp;форме иконками. В&nbsp;нашем случае есть четыре основные формы: круг, квадрат, вертикальный и&nbsp;горизонтальный прямоугольники.</p>
          <img src={grid2}  alt='Сетка иконка' />
          <p>Если иконка не&nbsp;является одним из&nbsp;четырех примитивов, то&nbsp;она строится по&nbsp;направляющим повернутым под углами от&nbsp;0&deg;&nbsp;до&nbsp;90&deg;&nbsp;с шагом 5&deg;. Мы&nbsp;не&nbsp;рекомендуем при построении использовать в&nbsp;одной иконке более 3&nbsp;разных направлений.</p>
          <img src={grid3}  alt='Сетка иконка' />
        </section>

        <section className='icons-design__line'>
          <h3>Линия и заливка</h3>
          <div className='icons-design__line-container'>
            <img src={lineAndFilling}  alt='Линия и заливка' />
            <div>
              <p>В&nbsp;наборах есть линейные иконки и&nbsp;иконки с&nbsp;заливкой. Однако в&nbsp;большинстве случаев используются линейные варианты. Иконки с&nbsp;заливкой имеют больший контраст и&nbsp;могут перетягивать на&nbsp;себя внимание, поэтому они используются для решения отдельных задач. Например, для того чтобы показать активное состояние компонента.</p>
              <p>Для создания иконок используется линия толщиной 2px без скругления на&nbsp;концах. Допустимо два способа позиционирования линии: Inside для замкнутого контура и&nbsp;Center для открытого контура. Внутреннее позиционирование для замкнутых контуров упрощает процесс редактирования, так как рамка выделения объекта в&nbsp;таком случае проходит по&nbsp;границе контура.</p>
              <p>При этом бывают случаи, когда в&nbsp;линейных иконках используются элементы с&nbsp;заливкой. Как правило, это те&nbsp;случаи, когда элемент внутри иконки слишком маленького размера.</p>
            </div>
          </div>
        </section>

        <section className='icons-design__rounding'>
          <h3>Скругления</h3>
          <div className='icons-design__rounding-container'>
            <img src={rounding}  alt='Линия и заливка' />
            <p>Мы&nbsp;не&nbsp;используем скругления в&nbsp;иконках и&nbsp;в&nbsp;графике, потому что фирменный стиль Апрасина двора основан на&nbsp;четкой геометрии и&nbsp;прямых углах. При этом иконка может состоять из&nbsp;окружности или строиться на&nbsp;окружностях.</p>
          </div>
        </section>

        <section className='icons-design__associativity'>
          <h3>Ассоциативность и простота</h3>
          <p>При проектировании иконок следует использовать привычные метафорические образы, не&nbsp;требующих домысливания. Чем привычнее образ, тем быстрее пользователь улавливает значение иконки, что критически важно в&nbsp;интерфейсе.</p>
          <p>Используйте иконку для одного конкретного действия или объекта. Такая однозначность способствует запоминанию связок &laquo;иконка-действие&raquo;, что увеличивает скорость навигации пользователя в&nbsp;интерфейсе.</p>
          <p>При проектировании придерживайтесь лаконичности. Иконка, как правило, имеет небольшой размер, и&nbsp;добавление лишних мелких элементов в&nbsp;графику сильно снижает ее&nbsp;читаемость.</p>
        </section>
      </section>

      <Footer />
    </>
  )
}

export default Icons