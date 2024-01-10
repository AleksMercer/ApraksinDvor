import React from 'react'
import Footer from '../tinycomp/Footer'
import CheckboxComp from '../tinycomp/CheckboxComp'

/* Pic import start */

import checkboxContents from '../../media/accordion2/checkboxes/checkbox-contents.webp'
import checkboxTable from '../../media/accordion2/checkboxes/checkbox-table.webp'
import horizontal from '../../media/accordion2/checkboxes/group1.webp'
import vertical from '../../media/accordion2/checkboxes/group2.webp'
import checkboxBuild from '../../media/accordion2/checkboxes/checkbox-build.webp'

/* Pic import end */

function Checkbox() {

  return (
    <>
      <section className='checkbox-description'>
        <h1>Checkbox</h1>
        <p>Чекбоксы позволяют пользователю выбрать несколько пунктов из&nbsp;списка вариантов или сделать выбор между двумя состояниями или свойствами. Клик по&nbsp;тексту или чекбоксу приводит к&nbsp;выбору пункта. Повторный клик приводит к&nbsp;отмене выбора.</p>
      </section>

      <section className='checkbox-usage'>
        <h2>Использование</h2>

        <div className='checkbox-usage__text'>
          <p>Одиночный чекбокс используется для включения или отключения определенных функций, параметров и&nbsp;настроек, а&nbsp;также для выражение согласия или несогласия с&nbsp;каким-либо условием.</p>
          <p>Группа чекбоксов используется, когда можно выбрать любое количество вариантов. Рекомендуемое максимальное количество вариантов ответа для одной группы чекбоксов&nbsp;&mdash; не&nbsp;более&nbsp;7.</p>
        </div>
        
        <div className='checkbox-usage__checkboxes'>

          <div className='gray-container'>

             <div className='checkbox-usage__checkboxes-comp'>
              <CheckboxComp />
              <p>По Пушкинской карте</p>
            </div>

          </div>

          <div className='gray-container'>
            <div className='checkbox-usage__checkboxes-container'>

              <p>Тип мероприятия</p>

              <div className='checkbox-usage__checkboxes-comp'>
                <CheckboxComp />
                <p>Выставки</p>
              </div>

              <div className='checkbox-usage__checkboxes-comp'>
                <CheckboxComp />
                <p>Концерты</p>
              </div>

              <div className='checkbox-usage__checkboxes-comp'>
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
            <p className='text'>Компонент чекбокса состоит из&nbsp;набора переключателей с&nbsp;текстовыми метками. При использовании чекбоксов в&nbsp;группе, можно добавить общий заголовок, поясняющий их&nbsp;назначение и&nbsp;связь.</p>
            <div>
              <p>1.</p>
              <p className='mark-text'><span>Заголовок группы </span>(опционально). Описывает группу параметров и&nbsp;заменяет повторяющиеся слова в&nbsp;метке каждого чекбокса. Текст заголовка начинается с&nbsp;заглавной буквы.</p>
            </div>
            <div>
              <p>2.</p>
              <p className='mark-text'><span>Метка чекбокса. </span>Описывает варианты выбора. Текст метки начинается с&nbsp;заглавной буквы и&nbsp;должен четко и&nbsp;кратко описывать эффект от&nbsp;выбора чекбокса.</p>
            </div>
            <div>
              <p>3.</p>
              <p className='mark-text'><span>Переключатель чекбокса. </span>Обозначает текущее состояние компонента. Состояние по&nbsp;умолчанию&nbsp;&mdash; Unselected.</p>
            </div>
          </div>
        </div>
      </section>

      <section className='checkbox-principles'>
        <section className='checkbox-principles__description'>
          <h2>Принципы построения</h2>

          <div className='checkbox-principles__description-container'>
            <img src={checkboxBuild}  alt="Принципы построения" />
            <p>Переключатель чекбокса имеет размер 22&times;22&nbsp;px и&nbsp;помещен в&nbsp;контейнер размером 24&times;24&nbsp;px. Горизонтальный отступ от&nbsp;переключателя до&nbsp;метки составляет 16&nbsp;px.</p>
          </div>
        </section>

        <section className='checkbox-principles__group'>
          <h3>Группы чекбоксов</h3>
          <p>Группа чекбоксов может располагаться вертикально и&nbsp;горизонтально.</p>
          <p>В&nbsp;вертикальной группе расстояние между заголовком группы и&nbsp;вариантами выбора составляет 24&nbsp;px.</p>
          <p>В&nbsp;горизонтальной группе следует соблюдать отступ 24&nbsp;px от&nbsp;заголовка группы и&nbsp;48&nbsp;px между вариантами выбора. Использовать горизонтальную группу допустимо только при 2&nbsp;вариантах выбора.</p>
          <p>Рекомендуется соблюдать отступ от&nbsp;других элементов интерфейса не&nbsp;менее 32&nbsp;px.</p>
          <div className='checkbox-principles__group-container'>
            <img src={horizontal}  alt="Заголовок горизонтальной группы" />
            <img src={vertical}  alt="Метка вертикальной группы" />
          </div>
        </section>
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