import React from 'react'
import Footer from '../tinycomp/Footer'

/* Pic import start */

import breadcrumbsUsage from '../../media/accordion2/breadcrumbs/breadcrumbs-usage.svg'
import breadcrumbsMenu from '../../media/accordion2/breadcrumbs/breadcrumbs-menu.svg'
import breadcrumbsBuild from '../../media/accordion2/breadcrumbs/breadcrumbs-build.svg'
import breadcrumbsTable from '../../media/accordion2/breadcrumbs/breadcrumbs-table.svg'

/* Pic import end */

function Breadcrumbs() {
  return (
    <>
      <section className='breadcrumbs-description'>
        <h1>Breadcrumbs</h1>
        <p>Хлебные крошки показывают пользователям их&nbsp;текущее местоположение относительно информационной архитектуры и&nbsp;позволяют им&nbsp;быстро переместиться на&nbsp;более высокий уровень или к&nbsp;предыдущему шагу.</p>
      </section>

      <section className='breadcrumbs-useage'>
        <h2>Использование</h2>
        <p>Хлебные крошки эффективны на&nbsp;страницах, которые содержат большое количество контента, организованного в&nbsp;иерархию более чем из&nbsp;двух уровней. Они занимают мало места, но&nbsp;при этом дают контекст о&nbsp;месте пользователя в&nbsp;навигационной иерархии. Хлебные крошки размещаются в&nbsp;верхней левой части страницы под заголовком и&nbsp;навигацией, но&nbsp;над заголовком страницы.</p>
        <p>Хлебные крошки всегда являются второстепенным элементом навигации и&nbsp;не&nbsp;должны полностью заменять основную навигацию. Их&nbsp;не&nbsp;следует использовать на&nbsp;страницах с&nbsp;навигацией, состоящей из&nbsp;одного уровня, так как это создаст ненужный беспорядок.</p>
        <img src={breadcrumbsUsage}  alt="пример использования" />
      </section>

      <section className='breadcrumbs-content'>

        <div className='breadcrumbs-content__link'>
          <h2>Содержание</h2>
          <h3>Ссылка на страницу</h3>
          <p>Рекомендуется начинать навигационную цепочку с&nbsp;родительской страницы самого высокого уровня в&nbsp;иерархии и&nbsp;постепенно двигаться вглубь информационной архитектуры по&nbsp;мере продвижения пользователя по&nbsp;цепочке навигации. Такой подход поможет отобразить полный путь от&nbsp;корневой страницы до&nbsp;текущего местоположения и&nbsp;обеспечит логическую связность навигационной цепочки для пользователя.</p>
          <p>Текущая страница всегда располагается последним пунктом в&nbsp;навигационной цепочке и&nbsp;не&nbsp;является интерактивной ссылкой.</p>
          <p>Каждая ссылка на&nbsp;страницу должна быть короткой и&nbsp;четко отражать местоположение или объект, на&nbsp;который она ссылается. Все ссылки в&nbsp;навигационной цепочке (кроме текущей страницы) должны быть интерактивными и&nbsp;ссылаться на&nbsp;соответствующие страницы.</p>
        </div>

        <div className='breadcrumbs-content__menu'>
          <h3>Дополнительное меню</h3>

          <div className='breadcrumbs-content__menu-container'>
            <img src={breadcrumbsMenu}  alt="принципы построения" />

            <div className='breadcrumbs-content__menu-container-text'>
              <p>При ограниченном пространстве рекомендуется использовать дополнительное меню для сокращения навигационной цепочки.</p>
              <p>В&nbsp;хлебных крошках должны отображаться первая и&nbsp;две последние ссылки, а&nbsp;промежуточные скрываются в&nbsp;выпадающем меню. Такой подход позволяет уместить цепочку в&nbsp;одну строку, не&nbsp;теряя иерархию навигации. Хлебные крошки не&nbsp;должны переноситься на&nbsp;несколько строк, чтобы не&nbsp;нарушать компактность компонента.</p>
            </div>
          </div>
        </div>
      </section>

      <section className='breadcrumbs-build'>
        <h2>Принципы построения</h2>
        <div className='breadcrumbs-build__container'>
          <img src={breadcrumbsBuild}  alt="принципы построения" />

          <div className='breadcrumbs-build__container-text'>
            <p>Для правильного визуального восприятия хлебных крошек важно соблюдать отступы от&nbsp;окружающих элементов интерфейса.</p>
            <p>Между пунктом и&nbsp;разделителем следует соблюдать отступ в&nbsp;8&nbsp;px для визуального разделения пунктов. Рекомендуется соблюдать вертикальный отступ от&nbsp;других элементов интерфейса равный 32&nbsp;px, чтобы хлебные крошки воспринимались как отдельный визуальный элемент.</p>
          </div>
        </div>
      </section>

      <section className='breadcrumbs-state'>
        <h2>Состояния</h2>
        <p>Хлебные крошки имеют разные состояния, которые четко отличаются друг от&nbsp;друга визуально и&nbsp;помогают пользователю понять текущий статус элемента.</p>
        <p>Цвет текста пунктов хлебеных крошек изменяется в&nbsp;зависимости от&nbsp;состояния в&nbsp;соответствии со&nbsp;стандартной цветовой палитрой дизайн-системы.</p>
        <img src={breadcrumbsTable}  alt="таблица состояний" />
      </section>
    
      <Footer />
    </>
  )
}

export default Breadcrumbs