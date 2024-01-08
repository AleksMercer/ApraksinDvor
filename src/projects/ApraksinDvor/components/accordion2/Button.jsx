import React from 'react'
import Footer from '../tinycomp/Footer'

/* Pic import start */

import usage from '../../media/accordion2/buttons/btn-usage.svg'
import triangel from '../../media/accordion2/buttons/btn-triangel.svg'
import big from '../../media/accordion2/buttons/btn-big.svg'
import mid from '../../media/accordion2/buttons/btn-mid.svg'
import little from '../../media/accordion2/buttons/btn-little.svg'
import content from '../../media/accordion2/buttons/btn-content.svg'
import textMark from '../../media/accordion2/buttons/btn-text-mark.svg'
import icon from '../../media/accordion2/buttons/btn-icon.svg'
import horizontal from '../../media/accordion2/buttons/btn-horizontal.svg'
import vertical from '../../media/accordion2/buttons/btn-vertical.svg'
import table from '../../media/accordion2/buttons/btn-table.svg'
import left from '../../media/accordion2/buttons/btn-left.svg'
import right from '../../media/accordion2/buttons/btn-right.svg'

/* Pic import end */


function Button() {
  return (
    <>
      <section className='buttons-description'>
        <h1>Button</h1>
        <p>Кнопки используются для запуска действий. Они передают пользователю призывы к&nbsp;действию и&nbsp;позволяют пользователям взаимодействовать со&nbsp;страницами различными способами. Текст на&nbsp;кнопке однозначно сообщает какое действие произойдет после нажатия.</p>
      </section>

      <section className='buttons-usage'>
        <h2>Использование</h2>
        <div className='buttons-usage__container'>
          <img src={usage}  alt="Использование кнопок" />
          <div className='buttons-usage__container-text'>
            <p>Используйте кнопки, чтобы сообщать о&nbsp;действиях, которые могут выполнять пользователи. На&nbsp;каждой странице должна быть только одна первичная кнопка, а&nbsp;все оставшиеся должны быть представлены в&nbsp;виде кнопок с&nbsp;меньшим акцентом.</p>
            <p>Не&nbsp;используйте кнопки в&nbsp;качестве элементов навигации. Вместо этого используйте ссылки когда желаемое действие&nbsp;&mdash; перевести пользователя на&nbsp;новую страницу.</p>
          </div>
        </div>
      </section>

      <section className='buttons-options'>
        <section className='buttons-options__description'>
          <h2>Варианты кнопок</h2>
          <p>Каждая кнопка имеет определенную функцию, и&nbsp;ее&nbsp;дизайн должен подсказывать пользователю, как она работает. Поэтому очень важно последовательно реализовывать различные варианты кнопок в&nbsp;разных продуктах, чтобы они сообщали пользователю о&nbsp;правильных действиях.</p>
          <p>Не&nbsp;обязательно использовать кнопки в&nbsp;порядке степени значимости. Например, второстепенную кнопку не&nbsp;всегда нужно размещать второй по&nbsp;счету в&nbsp;макете. Однако важно установить визуальную иерархию между кнопками в&nbsp;интерфейсе.</p>
          <img src={triangel}  alt="варианты кнопок" />
        </section>

        <section className='buttons-options__button'>
          <h3>Основная кнопка</h3>
          <div className='buttons-options__button-container'>
            <div className='gray-container buttons-options__button-container-main'>
              <button>
                Основная кнопка
              </button>              
            </div>

            <div className='buttons-options__button-container-text'>
              <p>Самая заметная кнопка для ключевого действия на&nbsp;экране. Используется, чтобы привлечь внимание к&nbsp;основному действию. Основная кнопка также обозначает стартовое действие, продолжение шага последовательного сценария или завершение работы с&nbsp;формой.</p>
              <p>Основные кнопки используются как самостоятельно, так и&nbsp;в&nbsp;случаях, когда пользователю предлагается выбрать одно действие из&nbsp;нескольких альтернативных.</p>
              <p>На&nbsp;одной странице рекомендуется использовать только одну основную кнопку (не&nbsp;считая возможных модальных окон). Исключение&nbsp;&mdash; основные кнопки с&nbsp;одинаковым действием в&nbsp;ряду однородных, равнозначных элементов.</p>
            </div>
          </div>
        </section>

        <section className='buttons-options__button'>
          <h3>Второстепенная кнопка</h3>
          <div className='buttons-options__button-container'>
            <div className='gray-container buttons-options__button-container-minor'>
                <button>
                  Второстепенная кнопка
                </button>
            </div>

            <div className='buttons-options__button-container-text'>
              <p>Привлекает меньше внимания, чем основная кнопка, используется для второстепенных действий на&nbsp;странице. Эти кнопки выполняют действия, которые не&nbsp;так важны в&nbsp;данном сценарии.</p>
              <p>Второстепенные кнопки могут использоваться только вместе с&nbsp;основной кнопкой, когда пользователю предлагается выбор из&nbsp;альтернативных действий. При этом у&nbsp;основной кнопки результативное действие (&laquo;Сохранить&raquo;, &laquo;Купить&raquo;, &laquo;Продолжить&raquo;), а&nbsp;у&nbsp;второстепенной&nbsp;&mdash; контр-результативное (&laquo;Отмена&raquo;, &laquo;Сбросить&raquo;, &laquo;Вернуться назад&raquo;).</p>
            </div>
          </div>
        </section>

        <section className='buttons-options__button'>
          <h3>Третьестепенная кнопка</h3>
          <div className='buttons-options__button-container'>
            <div className='gray-container buttons-options__button-container-tertiary'>
                <button>
                  Третьестепенная кнопка
                </button>
            </div>

            <p>Имеет меньшую степень значимости, чем второстепенная кнопка. Используется как в&nbsp;паре с&nbsp;основной кнопкой, так и&nbsp;вместе с&nbsp;основной и&nbsp;второстепенной. Например, при пошаговом выполнении, призрачная кнопка может быть объединена с&nbsp;набором основных и&nbsp;второстепенных кнопок, где основная кнопка для продвижения вперед, второстепенная для &laquo;Назад&raquo;, а&nbsp;третьестепенная для &laquo;Отмена&raquo;.</p>
          </div>
        </section>

        <section className='buttons-options__danger'>
          <h3>Опасная кнопка</h3>
          <p>Для действий, которые могут иметь разрушительный эффект на&nbsp;данные пользователя (например, удалить). Опасная кнопка имеет три варианта: основная, второстепенная и&nbsp;призрачная.</p>
          <div className='gray-container buttons-options__danger-btn'>
            <button>Опасная кнопка</button>
            <button>Опасная кнопка</button>
            <button>Опасная кнопка</button>
          </div>
        </section>
      </section>

      <section className='buttons-size'>
        <section className='buttons-size__description'>
          <h2>Размер кнопок</h2>
          <p>Кнопки названы в&nbsp;соответствии с&nbsp;их&nbsp;размером и&nbsp;использованием.Кнопки каждого размера имеют фиксированную высоту и&nbsp;горизонтальные отступы, ширина кнопки определяется размером текста на&nbsp;кнопке и&nbsp;минимальными отступами. Горизонтальные отступы можно увеличить, если это делает кнопку более пропорциональной остальным элементам интерфейса. Уменьшать отступы не&nbsp;рекомендуется. Ниже представлены рекомендации для вариантов использования каждого размера.</p>
        </section>

        <section className='buttons-size__button'>
          <h3>Большая кнопка</h3>
          <div className='buttons-size__button-container'>
            <img src={big}  alt="Большая кнопка" />
            <p>Используется там, где требуется привлечь внимание пользователя, побудить его выполнить предлагаемое действие. Чаще всего это маркетинговые блоки, баннеры, CTA маркетинговых лендингов и&nbsp;страниц с&nbsp;обилием пустого пространства, короткими текстами и&nbsp;единственным доступным пользователю действием. Большая кнопка применяется только самостоятельно в&nbsp;варианте основной кнопки.</p>
          </div>
        </section>

        <section className='buttons-size__button'>
          <h3>Средняя кнопка</h3>
          <div className='buttons-size__button-container'>
            <img src={mid}  alt="Средняя кнопка" />
            <p>Используется в&nbsp;большинстве случаев. Высота кнопки совпадает с&nbsp;высотой полей ввода, дропдаунов и&nbsp;прочих элементов интерфейса. Применяйте кнопки этого размера в&nbsp;интерфейсах и&nbsp;формах.</p>
          </div>
        </section>

        <section className='buttons-size__button'>
          <h3>Маленькая кнопка</h3>
          <div className='buttons-size__button-container'>
            <img src={little}  alt="Маленькая кнопка" />
            <p>Компактна и&nbsp;легка. Используйте эту кнопку, чтобы предложить пользователю выполнить действие в&nbsp;непосредственной близости к&nbsp;объекту взаимодействия, в&nbsp;ограниченном пространстве или плотном интерфейсе.</p>
          </div>
        </section>
      </section>

      <section className='buttons-content'>
        <section className='buttons-content__description'>
          <h2>Содержание</h2>

          <div className='buttons-content__description-container'>
            <img src={content}  alt="Содержание" />
            <div className='buttons-content__description-container-text'>
              <p className='text'>Кнопки могут иметь разное визуальное наполнение в&nbsp;зависимости от&nbsp;контекста применения:</p>

              <div>
                <p>1.</p>
                <p className='mark-text'><span>Текстовая метка.</span> Сообщает о&nbsp;действии, которое будет выполнено при взаимодействии с&nbsp;кнопкой.</p>
              </div>
              <div>
                <p>2.</p>
                <p className='mark-text'><span>Иконка слева</span> (опционально). Усиливает ассоциацию с&nbsp;выполняемым действием.</p>
              </div>
              <div>
                <p>3.</p>
                <p className='mark-text'><span>Иконка справа</span> (опционально). Усиливает ассоциацию с&nbsp;выполняемым действием.</p>
              </div>
              <div>
                <p>4.</p>
                <p className='mark-text'><span>Только иконка.</span> Если текстовая метка не&nbsp;используется, должен присутствовать значок, обозначающий действие кнопки.</p>
              </div>
              
              <p className='text'>По&nbsp;умолчанию содержимое кнопки выравнивается по&nbsp;центру.</p>
            </div>
          </div>
        </section>

        <section className='buttons-content__text-mark'>
          <h3>Кнопка с текстовой меткой</h3>
          <p>Рекомендуется использовать короткие и&nbsp;понятные фразы, описывающие действие кнопки. Например, &laquo;Сохранить&raquo;, &laquo;Купить&raquo;, &laquo;Поделиться&raquo; и&nbsp;т.д. Текст должен быть лаконичным, но&nbsp;достаточно информативным, чтобы пользователь сразу понимал результат нажатия кнопки.</p>
          <img src={textMark}  alt="Кнопка с текстовой меткой" />
        </section>

        <section className='buttons-content__iconmark-button'>
          <h3>Кнопка с иконкой и текстовой меткой</h3>
          <p>Используйте иконку на&nbsp;кнопке, чтобы привлечь к&nbsp;ней больше внимания или передать больше информации, придать больший смысл. Не&nbsp;используйте две иконки одновременно. На&nbsp;странице с&nbsp;большим количеством кнопок иконки будут добавлять лишний визуальный шум, ставьте иконки только на&nbsp;самые важные кнопки.</p>
          <p>Размер контейнера иконки равен высоте строки текста, в&nbsp;зависимости от&nbsp;размера кнопки.</p>
          <div className='buttons-content__iconmark-button-container'>
            <img src={left}  alt="Кнопка с иконкой слева" />
            <img src={right}  alt="Кнопка с иконкой справа" />
          </div>
        </section>

        <section className='buttons-content__icon-button'>
          <h3>Кнопка с иконкой</h3>
          
          <div className='buttons-content__icon-button-container'>
            <img src={icon}  alt="Кнопка с иконкой" />

            <div className='buttons-content__icon-button-container-text'>
              <p>Кнопка-иконка используется для целевых и&nbsp;не&nbsp;основных действий. Применяется в&nbsp;интерфейсе в&nbsp;случаях, когда ограниченное пространство не&nbsp;позволяет использовать полноценную кнопку или кнопку с&nbsp;иконкой.</p>
              <p>Иконка должна быть предельно понятной и&nbsp;знакомой пользователю, чтобы однозначно ассоциироваться с&nbsp;нужным действием.</p>
            </div>
          </div>
        </section>
      </section>

      <section className='buttons-build'>
        <section className='buttons-build__description'>
          <h2>Принципы построения</h2>
          <p>Для правильного визуального восприятия кнопок важно соблюдать отступы от&nbsp;окружающих элементов интерфейса. Это помогает выделить кнопки и&nbsp;сделать их&nbsp;более заметными для пользователя.</p>
          <p>Рекомендуется соблюдать вертикальный и&nbsp;горизонтальный отступы от&nbsp;других элементов интерфейса 24&nbsp;px или более, чтобы кнопки или группы кнопок воспринимались пользователями как отдельные элементы или их&nbsp;группы.</p>
        </section>
        
        <section className='buttons-build__position'>
          <div className='buttons-build__position-horizontal'>
            <h3>Горизонтальная<br/> группа кнопок</h3>
            <p>При размещении нескольких кнопок рядом друг с&nbsp;другом по&nbsp;горизонтали, рекомендуется соблюдать отступ 24&nbsp;px между кнопками. Ширина кнопок может быть как различной, так и&nbsp;равно наибольшей кнопке в&nbsp;группе.</p>
            <img src={horizontal}  alt="Горизонтальная группа кнопок" />
          </div>

          <div className='buttons-build__position-vertical'>
            <h3>Вертикальная<br/> группа кнопок</h3>
            <p>При расположении кнопок в&nbsp;столбец по&nbsp;вертикали рекомендуется соблюдать отступ 16&nbsp;или 24&nbsp;px между кнопками. Ширину кнопок рекомендуется задавать равной наиболее широкой кнопке в&nbsp;группе.</p>
            <img src={vertical}  alt="Вертикальная группа кнопок" />
          </div>
        </section>
      </section>

      <section className='buttons-state'>
        <h2>Состояния</h2>
        <p>Кнопки имеют разные состояния, которые четко отличаются друг от&nbsp;друга визуально и&nbsp;помогают пользователю понять текущий статус кнопки.</p>
        <p>В&nbsp;состоянии по&nbsp;умолчанию кнопка выглядит стандартно в&nbsp;соответствии со&nbsp;своим типом. При наведении курсора фон кнопки изменяется, давая обратную связь о&nbsp;том, что элемент интерактивный. При нажатии фон темнеет, имитируя физическое воздействие. В&nbsp;отключенном состоянии кнопка выглядит блеклой и&nbsp;неактивной, нажатия не&nbsp;регистрируются.</p>
        <p>Такие изменения визуального стиля информируют пользователя о&nbsp;доступности и&nbsp;реакции кнопки на&nbsp;его действия.</p>
        <img src={table}  alt="Таблица с разными кнопками" />
      </section>

      <Footer />
    </>
  )
}

export default Button