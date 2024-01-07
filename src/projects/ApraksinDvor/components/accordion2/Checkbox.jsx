import React from 'react'
import Footer from '../tinycomp/Footer'
import CheckboxComp from '../tinycomp/CheckboxComp'

/* Pic import start */

import checkboxContents from '../../media/accordion2/checkboxes/checkbox-contents.svg'
import principles1 from '../../media/accordion2/checkboxes/principles1.svg'
import principles2 from '../../media/accordion2/checkboxes/principles2.svg'
import checkboxTable from '../../media/accordion2/checkboxes/checkbox-table.svg'

/* Pic import end */

function Checkbox() {

  return (
    <>
      <section className='checkbox-description'>
        <h1>Checkbox</h1>
        <p>Чекбоксы позволяют пользователю выбрать несколько пунктов из&nbsp;списка вариантов или сделать выбор между двумя состояниями или свойствами. Клик по&nbsp;тексту или чекбоксу приводит к&nbsp;выбору пункта. Повторный клик приводит к&nbsp;отмене выбора.</p>
      </section>

      <section className='checkbox-useage'>
        <h2>Использование</h2>

        <div className='checkbox-useage__text'>
          <p>Одиночный чекбокс используется для включения или отключения определенных функций, параметров и&nbsp;настроек, а&nbsp;также для выражение согласия или несогласия с&nbsp;каким-либо условием.</p>
          <p>Группа чекбоксов используется, когда можно выбрать любое количество вариантов. Рекомендуемое максимальное количество вариантов ответа для одной группы чекбоксов&nbsp;&mdash; не&nbsp;более&nbsp;7.</p>
        </div>
        
        <div className='checkbox-useage__checkboxes'>

          <div className='gray-container'>

             <div className='checkbox-useage__checkboxes-comp'>
              <CheckboxComp />
              <p>По Пушкинской карте</p>
            </div>

          </div>

          <div className='gray-container'>
            <div className='checkbox-useage__checkboxes-container'>

              <p>Тип мероприятия</p>

              <div className='checkbox-useage__checkboxes-comp'>
                <CheckboxComp />
                <p>Выставки</p>
              </div>

              <div className='checkbox-useage__checkboxes-comp'>
                <CheckboxComp />
                <p>Концерты</p>
              </div>

              <div className='checkbox-useage__checkboxes-comp'>
                <CheckboxComp />
                <p>Лекции</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className='checkbox-contents'>
        <h2>Содержание</h2>

        <div className='checkbox-contents__container'>
          <img src={checkboxContents}  alt="checkbox contents" />

          <div className='checkbox-contents__container-text'>
            <p>
              <span>1. Заголовок списка</span><br />
              Для большей ясности добавляйте к&nbsp;группе заголовок. Заголовок начинается с&nbsp;заглавной буквы. Заголовок должен быть сформулирован кратко.
            </p>
            <p>
              <span>2. Метка чекбокса</span><br />
              По&nbsp;умолчанию чекбокс в&nbsp;состоянии Unselected. Размер контейнера метки 24&times;24px.
            </p>
            <p>
              <span>3. Лейбл чекбокса</span><br />
              Каждый чекбокс должен справа иметь лейбл, начинающийся с&nbsp;заглавной буквы. Длина лейбла должна быть не&nbsp;более одной строки.
            </p>
          </div>
        </div>
      </section>

      <section className='checkbox-principles'>
        <h2>Принципы построения</h2>
        <p>Группа чекбоксов может располагаться вертикально и&nbsp;горизонтально, при этом сохраняются их&nbsp;принципы построения.</p>
        
        <div className='checkbox-principles__container'>
          <img src={principles1}  alt="checkbox contents" />
          <img src={principles2}  alt="checkbox contents" />
        </div>
      </section>

      <section className='checkbox-state'>
        <h2>Состояния</h2>
        <img src={checkboxTable}  alt="checkbox table" />
      </section>

      <Footer />
    </>
  )
}

export default Checkbox