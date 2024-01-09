import React, { useState } from 'react';
import Footer from '../tinycomp/Footer'

/* Pic import start */

import radiobuttonContents from '../../media/accordion2/radiobutton/content.webp'
import radiobuttonTable from '../../media/accordion2/radiobutton/table.webp'
import horizontal from '../../media/accordion2/radiobutton/horizontal.webp'
import vertical from '../../media/accordion2/radiobutton/vertical.webp'
import radiobuttonBuild from '../../media/accordion2/radiobutton/build.webp'

/* Pic import end */

function RadioButton() {

  const [selected, setSelected] = useState(null);

  return (
    <>
      <section className='radiobutton-description'>
        <h1>Radio button</h1>
        <p>Радиокнопка позволяет пользователю выбрать один вариант из&nbsp;ограниченного набора опций. Радиокнопки группируются для выбора одного элемента из&nbsp;группы. При этом активной может быть только одна радиокнопка, когда пользователь выбирает новый элемент, предыдущий выбор автоматически отменяется.</p>      
      </section>

      <section className='radiobutton-useage'>
        <h2>Использование</h2>

        <div className='radiobutton-useage__container'>

          <div className='gray-container'>

            <div className='gray-container__radiobuttons'>
              <p>Способ доставки</p>
              <label>
                <input
                  type="radio"
                  value="option1"
                  checked={selected === "option1"}
                  onChange={() => setSelected("option1")}
                />
                <p>Самовывоз</p>
              </label>
              <label>
                <input
                  type="radio"
                  value="option2"
                  checked={selected === "option2"}
                  onChange={() => setSelected("option2")}
                />
                <p>Доставка на дом</p>
              </label>
              <label>
                <input
                  type="radio"
                  value="option3"
                  checked={selected === "option3"}
                  onChange={() => setSelected("option3")}
                />
                <p>Доставка в пункт выдачи</p>
              </label>
            </div>

          </div>

          <div className='radiobutton-useage__container-text'>
            <p>Радиокнопки применяются для перехода от&nbsp;одного параметра к&nbsp;другому. Часто они могут применяться как механизм фильтрации.</p>
            <p>Используйте радиокнопки, а&nbsp;не&nbsp;чекбоксы, когда нужен выбор строго одного элемента из&nbsp;нескольких вариантов. Это поможет избежать ошибок ввода.</p>
          </div>
        </div>
      </section>

      <section className='radiobutton-contents'>
        <h2>Содержание</h2>

        <div className='radiobutton-contents__container'>
          <img src={radiobuttonContents}  alt="radiobutton contents" />

          <div className='radiobutton-contents__container-text'>
            <p className='text'>Компонент радиокнопки состоит из&nbsp;набора переключателей с&nbsp;текстовыми метками. Радиокнопки должны располагаться в&nbsp;группе&nbsp;&mdash; отдельные переключатели не&nbsp;используются. Для группы радиокнопок можно добавить общий заголовок, поясняющий их&nbsp;назначение и&nbsp;связь.</p>
            <div>
              <p>1.</p>
              <p className='mark-text'><span>Заголовок группы </span>(опционально). Описывает группу параметров и&nbsp;заменяет повторяющиеся слова в&nbsp;метке каждой радиокнопки. Текст заголовка начинается с&nbsp;заглавной буквы.</p>
            </div>
            <div>
              <p>2.</p>
              <p className='mark-text'><span>Текст подписи. </span>Описывает варианты выбора. Текст метки начинается с&nbsp;заглавной буквы и&nbsp;должен четко и&nbsp;кратко описывать эффект от&nbsp;выбора радиокнопки.</p>
            </div>
            <div>
              <p>3.</p>
              <p className='mark-text'><span>Переключатель радиокнопки. </span>Обозначает текущее состояние компонента. Состояние по&nbsp;умолчанию&nbsp;&mdash; Unselected.</p>
            </div>
          </div>
        </div>
      </section>

      <section className='radiobutton-principles'>
        <section className='radiobutton-principles__description'>
          <h2>Принципы построения</h2>

          <div className='radiobutton-principles__description-container'>
            <img src={radiobuttonBuild}  alt="Принципы построения" />
            <p>Переключатель радиокнопки имеет размер 24&times;24&nbsp;px. Горизонтальный отступ от&nbsp;переключателя до&nbsp;метки составляет 16&nbsp;px.</p>
          </div>
        </section>

        <section className='radiobutton-principles__group'>
          <h3>Группы радиокнопок</h3>
          <p>Группа радиокнопок может располагаться вертикально и&nbsp;горизонтально.</p>
          <p>В&nbsp;вертикальной группе расстояние между заголовком группы и&nbsp;вариантами выбора составляет 24&nbsp;px.</p>
          <p>В&nbsp;горизонтальной группе следует соблюдать отступ 24&nbsp;px от&nbsp;заголовка группы и&nbsp;48&nbsp;px между вариантами выбора. Использовать горизонтальную группу допустимо только при 2&nbsp;вариантах выбора.</p>
          <p>Рекомендуется соблюдать отступ от&nbsp;других элементов интерфейса не&nbsp;менее 32&nbsp;px.</p>
          <div className='radiobutton-principles__group-container'>
            <img src={vertical}  alt="Заголовок вертикальной группы" />
            <img src={horizontal}  alt="Заголовок горизонтальной группы" />
          </div>
        </section>
      </section>

      <section className='radiobutton-state'>
        <h2>Состояния</h2>
        <img src={radiobuttonTable}  alt="radiobutton table" />
      </section>

      <Footer />
    </>
  )
}

export default RadioButton