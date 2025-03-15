import React, { useState } from 'react'

import Footer from '../tinycomp/Footer'

/* Pic import start */

import build from '../../media/accordion2/switchbutton/switchbtn-build.png'
import content from '../../media/accordion2/switchbutton/switchbtn-content.png'
import group from '../../media/accordion2/switchbutton/switchbtn-group.png'
import state from '../../media/accordion2/switchbutton/switchbtn-state.png'

/* Pic import end */

function SwitchButton() {

  const [isOn, setIsOn] = useState(true)
  const [isOff, setIsOff] = useState(true)

  return (
    <>
      <section className='switchbutton-description'>
        <h1>Switch button</h1>
        <p>Switch button позволяет быстрого переключиться между двумя взаимоисключающими состояниями или опциями. Обычно используются для включения/выключения указанного параметра.</p>
      </section>

      <section className='switchbutton-usage'>
        <h2>Использование</h2>
        
        <div className='switchbutton-usage__container'>
          <div className='gray-container'>
            <div className='gray-container-block'>
              <p className='gray-container-block-weight'>Получение уведомлений</p>

              <div className='switch-block'>
                <div
                  className={`switch-button ${isOn ? 'checked' : 'unchecked'}`}
                  onClick={() => setIsOn(!isOn)}
                ><span></span></div>
                <p>О новых мероприятиях</p>
              </div>

              <div className='switch-block'>
                <div
                  className={`switch-button ${isOff ? 'unchecked' : 'checked'}`}
                  onClick={() => setIsOff(!isOff)}
                ><span></span></div>
                <p>О скидках и акциях</p>
              </div>
            </div>
          </div>

          <p>Switch button используется для переключения между состояниями конкретной опции, например, для включения и&nbsp;выключения уведомлений. Состояние переключателя отображает текущее состояние опции. Он&nbsp;заменяет чекбоксы в&nbsp;случае двойного выбора.</p>
        </div>
      </section>

      <section className='switchbutton-content'>
        <h2>Содержание</h2>

        <div className='switchbutton-content__container'>
          <img src={content}  alt="Из чего состоят переключатели" />

          <div className='switchbutton-content__container-text' >
            <p className='text'>Переключатели могут использоваться как самостоятельный компонент, так и&nbsp;в&nbsp;группе. Для группы переключателей можно добавить общий заголовок, поясняющий их&nbsp;назначение.</p>
            <div>
              <p>1.</p>
              <p className='mark-text'><span>Заголовок группы </span>(опционально). Описывает группу параметров и&nbsp;заменяет повторяющиеся слова в&nbsp;метке каждой радиокнопки. Текст заголовка начинается с&nbsp;заглавной буквы.</p>
            </div>
            <div>
              <p>2.</p>
              <p className='mark-text'><span>Текст переключателя. </span>Описывает опцию. Текст метки начинается с&nbsp;заглавной буквы и&nbsp;должен четко и&nbsp;кратко описывать назначение переключателя.</p>
            </div>
            <div>
              <p>3.</p>
              <p className='mark-text'><span>Переключатель. </span>Обозначает текущее состояние компонента. Содержит иконки включения и&nbsp;выключения при соответствующих состояниях. Состояние по&nbsp;умолчанию&nbsp;&mdash; Off.</p>
            </div>
          </div>
        </div>
      </section>

      <section className='switchbutton-build'>
        <section className='switchbutton-build__container'>
          <h2>Принципы построения </h2>

          <div className='switchbutton-build__container-block'>
            <img src={build}  alt="Из чего состоит переключатель" />

            <div className='switchbutton-build__container-block-text'>
              <p>Переключатель имеет размер 24&times;48&nbsp;px.<br />Горизонтальный отступ от&nbsp;переключателя до&nbsp;метки составляет 16&nbsp;px.</p>
            </div>
          </div>
        </section>

        <section className='switchbutton-build__container'>
          <h3>Группа переключателей</h3>

          <div className='switchbutton-build__container-block'>
            <img src={group}  alt="Как работать с группой переключателей" />

            <div className='switchbutton-build__container-block-text'>
              <p>В&nbsp;группе переключателей расстояние между заголовком группы и&nbsp;опциями составляет 24&nbsp;px.</p>
              <p>Рекомендуется соблюдать отступ от&nbsp;других элементов интерфейса не&nbsp;менее 32&nbsp;px.</p>
            </div>
          </div>
        </section>
      </section>

      <section className='switchbutton-state'>
        <h2>Состояния</h2>
        <img src={state}  alt="Состояния переключателей" />
      </section>

      <Footer />
    </>
  )
}

export default SwitchButton