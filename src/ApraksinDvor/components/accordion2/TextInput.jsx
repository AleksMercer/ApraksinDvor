import React, { useState, useRef } from 'react'

import Footer from '../tinycomp/Footer'

/* Pic import start */

import usage from '../../media/accordion2/input/inputs-usage.png'
import components from '../../media/accordion2/input/inputs-components.png'
import mask from '../../media/accordion2/input/inputs-mask.png'
import build1 from '../../media/accordion2/input/inputs-build1.png'
import build2 from '../../media/accordion2/input/inputs-build2.png'
import group1 from '../../media/accordion2/input/inputs-group1.png'
import group2 from '../../media/accordion2/input/inputs-group2.png'
import group3 from '../../media/accordion2/input/inputs-group3.png'
import table1 from '../../media/accordion2/input/inputs-table1.png'
import table2 from '../../media/accordion2/input/inputs-table2.png'

/* Pic import end */


function TextInput() {

  const [text, setText] = useState('') 
  const [areaText, setAreaText] = useState('')

  const inputFocus = useRef(null)
  const textareaFocus = useRef(null)

  const inputOnFocus = () => {
    inputFocus.current.classList.add('focused');
  }
  const inputOnBlur = () => {  
    inputFocus.current.classList.remove('focused');
  }

  const areaOnFocus = () => {
    textareaFocus.current.classList.add('focused');
  }
  const areaOnBlur = () => {  
    textareaFocus.current.classList.remove('focused');
  }

  return (
    <>
      <section className='textinput-description'>
        <h1>Text inputs</h1>
        <p>Поля текстового ввода позволяют пользователю вводить текстовую информацию в&nbsp;свободной форме. Поле ввода по&nbsp;умолчанию предназначено для коротких однострочных текстовых фрагментов.</p>
      </section>

      <section className='textinput-usage'>
        <section className='textinput-usage-description'>
          <h2>Использование</h2>
          <div className='textinput-usage-description__container'>
            <img src={usage}  alt="Описание использования" />

            <div className='textinput-usage-description__container-text'>
              <p>Поле ввода текста следует использовать, когда пользователю необходимо ввести уникальную информацию, которую невозможно предугадать с&nbsp;помощью предустановленных параметров. Также текстовый ввод подходит, если требуется ввести запоминающиеся данные, которые можно вводить быстрее в&nbsp;свободной форме по&nbsp;сравнению с&nbsp;использованием более сложных элементов управления.</p>
              <p>Избегайте применения текстового поля ввода, если пользователь может ввести значение только из&nbsp;предопределенного закрытого списка. Это может привести к&nbsp;ошибке. В&nbsp;таких случаях лучше использовать элементы управления выбором, например, раскрывающийся список, переключатели или радиокнопки.</p>
            </div>
          </div>
        </section>

        <section className='textinput-usage-input'>
          <h3>Текстовое поле</h3>
          <div className='textinput-usage-input__container'>
            <div className='gray-container'>

              <div className={text.length === 0 ? 'text-input' : 'text-input marked'}  ref={inputFocus}>
                <input
                  autoComplete="off" 
                  type='text'
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  onFocus={inputOnFocus}
                  onBlur={inputOnBlur}
                  maxLength={20}
                />
                <span>Метка</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M6 4V1.5H8V4H16V1.5H18V4H22V22H2V4H6ZM4 6V9H20V6H4ZM20 11H4V20H20V11Z" fill="#738287"/>
                </svg>
              </div>

              <div className='additional-info'>
                <span>Вспомогательный текст</span>
                <span>{text.length}/20</span>
              </div>
            </div>

            <p>Текстовое поле ввода предназначено для ввода короткого однострочного текста, например, адрес электронной почты, номер телефона.</p>
          </div>
        </section>

        <section className='textinput-usage-input'>
          <h3>Текстовая область</h3>
          <div className='textinput-usage-input__container'>
            <div className='gray-container'>

              <div className='text-area' ref={textareaFocus}>
                <textarea
                  autoComplete="off" 
                  value={areaText}
                  maxLength={120}
                  onChange={(e) => setAreaText(e.target.value)}
                  onFocus={areaOnFocus}
                  onBlur={areaOnBlur}
                />

                <div className='mark-num'>
                  <span>Метка</span>
                  <span>{areaText.length}/120</span>
                </div>
              </div>  
              
              <div className='additional-info'>
                <span>Вспомогательный текст</span>
              </div>       
            </div>

            <div className='textinput-usage-input__container-text'> 
              <p>Текстовая область ввода позволяет пользователю вводить более объемный многострочный текст. Рекомендуется использовать текстовую область, когда подразумевается ввод больших объемов данных, например, отзыв, сообщение.</p>
              <p>В&nbsp;отличие от&nbsp;текстового поля, область позволяет вводить несколько абзацев текста.</p>
            </div>
          </div>
        </section>
      </section>

      <section className='textinput-content'>
        <section className='textinput-content-components'>
          <h2>Содержание</h2>
          <h3>Компоненты полей ввода</h3>

          <div className='textinput-content-components__text' >
            <p className='text'>Поля ввода могут иметь разное визуальное наполнение в&nbsp;зависимости от&nbsp;контекста применения. Поле ввода может включать следующие компоненты:</p>
            <div>
              <p>1.</p>
              <p className='mark-text'><span>Метка поля ввода. </span>Помогает пользователям понять, какую информацию следует вводить в&nbsp;текстовое поле. Поля ввода всегда должны иметь метки (исключением является использование маски).</p>
            </div>
            <div>
              <p>2.</p>
              <p className='mark-text'><span>Введенный текст. </span>Текст, вводимый пользователем в&nbsp;поле.</p>
            </div>
            <div>
              <p>3.</p>
              <p className='mark-text'><span>Активная иконка </span>(опционально). Используется для дополнительных функций, например отображения и&nbsp;скрытия пароля. Рекомендуется использовать иконку с&nbsp;подходящим к&nbsp;полю ввода значением.</p>
            </div>
            <div>
              <p>4.</p>
              <p className='mark-text'><span>Вспомогательная иконка </span>(опционально). Используется для привлечения внимания к&nbsp;вспомогательному тексту. Рекомендуется использовать только для отображения ошибки, предупреждения или корректно введенного текста.</p>
            </div>
            <div>
              <p>5.</p>
              <p className='mark-text'><span>Вспомогательный текст </span>(опционально). Соответствующая информация, которая помогает пользователю правильно заполнить поле. Его часто используют для объяснения правильного формата данных.</p>
            </div>
            <div>
              <p>6.</p>
              <p className='mark-text'><span>Счетчик символов </span>(опционально). Отображает количество введенных символов и&nbsp;их&nbsp;лимит. Рекомендуется использовать при необходимости контроля длины вводимого текста.</p>
            </div>
            <p className='text'>Каждый опциональный элемент должен применяться по&nbsp;необходимости, чтобы не&nbsp;перегружать интерфейс поля ввода.</p>
          </div>

          <img src={components}  alt="Компоненты" />
        </section>

        <section className='textinput-content-mask'>
          <h3>Маска ввода</h3>

          <div className='textinput-content-mask__container'>
            <img src={mask}  alt="Описание использования" />

            <div className='textinput-content-mask__container-text'>
              <p>Маску ввода совместно с&nbsp;меткой рекомендуется использоваться во&nbsp;всех случаях, когда данные имеют стандартизированный формат.</p>
              <p>Маску ввода без метки допускается использовать, когда она может однозначно передать информацию о&nbsp;необходимых данных для ввода. Маску без метки рекомендуется использовать совместно с&nbsp;иконкой, например, для поля ввода даты.</p>
            </div>
          </div>
        </section>
      </section>

      <section className='textinput-build'>
        <section className='textinput-build-description'>
          <h2>Принципы построения</h2>
          <p>Текстовые поля строятся в&nbsp;соответствии с&nbsp;изображением, представленным ниже.</p>
          <img src={build1}  alt="Принципы построения" />
          <p>Текстовые области строятся в&nbsp;соответствии с&nbsp;изображением, представленным ниже.</p>
          <img src={build2}  alt="Принципы построения" />
          <p>Ширина поля должна соответствовать ожидаемому количеству информации. Размер поля подсказывает пользователю в&nbsp;какой форме от&nbsp;него ждут информацию, помогает убедиться в&nbsp;правильности заполнения поля. В&nbsp;рамках одной формы используйте 1&nbsp;или 2&nbsp;вариаций ширины для полей. Большее количество вариантов ширины полей сделает форму неаккуратной и&nbsp;сложной в&nbsp;быстром считывании и&nbsp;использовании.</p>
        </section>

        <section className='textinput-build-vertical'>
          <h3>Вертикальная группа полей ввода</h3>
          <p>Соблюдение отступов полей ввода сделает форму структурированной и&nbsp;удобной для заполнения. При размещении полей ввода текста в&nbsp;вертикальную группу следует соблюдать следующие отступы:</p>
          
          <ul className='mark-lists'> 
            <li><span className='green-mark'></span><span>При использовании полей ввода без вспомогательного текста и&nbsp;счетчика числа символов&nbsp;&mdash; 24&ndash;36&nbsp;px между полями и&nbsp;по&nbsp;32&nbsp;px или более от&nbsp;группы полей.</span></li>
            <li><span className='green-mark'></span><span>При использовании полей ввода со&nbsp;вспомогательным текстом и&nbsp;счетчиком числа символов&nbsp;&mdash; 36&nbsp;px между полями и&nbsp;по&nbsp;32&nbsp;px или более по&nbsp;слева, справа и&nbsp;сверху и&nbsp;24&nbsp;px или более снизу от&nbsp;группы полей.</span></li>
          </ul>

          <div className='textinput-build-vertical__container'>
            <img src={group1}  alt="Вертикальная группа" />
            <img src={group2}  alt="Вертикальная группа" />
          </div>
        </section>

        <section className='textinput-build-horizontal'>
          <h3>Горизонтальная группа полей ввода</h3>
          <div className='textinput-build-horizontal__container'>
            <img src={group3}  alt="Горизонтальная группа" />

            <div className='textinput-build-horizontal__container-text'>
              <p>Горизонтальную группу из&nbsp;нескольких полей ввода рекомендуется использовать в&nbsp;больших формах для логически связанных полей, если ширина каждого поля в&nbsp;группе соответствует ожидаемому количеству информации.</p>
              <p>В&nbsp;горизонтальной группе допускается использовать не&nbsp;более 3&nbsp;полей ввода. Не&nbsp;рекомендуется горизонтально группировать поля, не&nbsp;связанные по&nbsp;смыслу.</p>
              <p>При размещении полей ввода текста в&nbsp;вертикальную группу следует соблюдать отступы 24&nbsp;px между полями и&nbsp;по&nbsp;32&nbsp;px или более от&nbsp;группы полей.</p>
            </div>
          </div>
        </section>
      </section>

      <section className='textinput-state'>
        <h2>Состояния</h2>
        <p>Текстовые поля имеют разные состояния, которые четко отличаются друг от&nbsp;друга визуально и&nbsp;помогают пользователю понять текущий статус поля.</p>
        <p>Поля ввода текста могут находиться в&nbsp;следующих состояниях:</p>
        <ul className='mark-lists'> 
          <li><span className='green-mark'></span><span>Empty — поле ввода без заполненного значения. Используется стандартный фон серого цвета Gray 0. Текст метки окрашен в цвет Gray 6 и расположен по центру поля ввода по вертикали.</span></li>
          <li><span className='green-mark'></span><span>Hover — пустое поле ввода при наведении на него указателя мыши. Фон поля ввода меняется на оттенок Gray 1</span></li>
          <li><span className='green-mark'></span><span>Focus — активное поле ввода, в котором находится курсор. Оно обрамляется цветной рамкой, лейбл уменьшается в размере и смещается в верхнюю часть поля. Вводимый текст имеет черный цвет Black.</span></li>
          <li><span className='green-mark'></span><span>Fill — поле ввода с введенным значением. Стиль поля ввода аналогичен состоянию Empty, за исключением позиции и цвета метки и введенного текста.</span></li>
          <li><span className='green-mark'></span><span>Fill-hover — заполненное поле ввода при наведении на него указателя мыши. Фон поля ввода меняется на оттенок Gray 1.</span></li>
          <li><span className='green-mark'></span><span>Disabled — неактивное поле. Фон на два тона светлее базового, вспомогательный текст не меняется, счетчик символов всегда скрыт.</span></li>
        </ul>

        <img src={table1}  alt="Таблица с компонентами" />
        <img src={table2}  alt="Таблица с компонентами" />
      </section>

      <Footer />
    </>
  )
}

export default TextInput