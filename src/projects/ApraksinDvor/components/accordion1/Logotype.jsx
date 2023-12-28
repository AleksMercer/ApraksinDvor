import React from 'react'
import { DotLottiePlayer } from '@dotlottie/react-player'

import DownloadButton from '../tinycomp/DownloadButton'
import Footer from '../tinycomp/Footer'

/* Pic import start */
  import defaultLogo from '../../media/accordion1/logotype/default-logo.svg'
  import horizontalLogoMinSize from '../../media/accordion1/logotype/horizontal-logo-min-size.svg'
  import horizontalLogoSafeZone from '../../media/accordion1/logotype/horizontal-logo-safe-zone.svg'
  import horizontalLogo from '../../media/accordion1/logotype/horizontal-logo.svg'
  import logoColors from '../../media/accordion1/logotype/logo-colors.svg'
  import logoGridSize from '../../media/accordion1/logotype/logo-grid-size.svg'
  import logoGrid from '../../media/accordion1/logotype/logo-grid.svg'
  import logoMinSize from '../../media/accordion1/logotype/logo-min-size.svg'
  import logoSafeZone from '../../media/accordion1/logotype/logo-safe-zone.svg'
  import partnerLogo1 from '../../media/accordion1/logotype/partner-logo-1.svg'
  import partnerLogo2 from '../../media/accordion1/logotype/partner-logo-2.svg'
  import smallLogoMinSize from '../../media/accordion1/logotype/small-logo-min-size.svg'
  import smallLogoSafeZone from '../../media/accordion1/logotype/small-logo-safe-zone.svg'
  import smallLogo from '../../media/accordion1/logotype/small-logo.svg'
  import wrongLogo1 from '../../media/accordion1/logotype/wrong-logo-1.svg'
  import wrongLogo2 from '../../media/accordion1/logotype/wrong-logo-2.svg'
  import wrongLogo3 from '../../media/accordion1/logotype/wrong-logo-3.svg'
  import wrongLogo4 from '../../media/accordion1/logotype/wrong-logo-4.svg'
  import wrongLogo5 from '../../media/accordion1/logotype/wrong-logo-5.svg'
  import wrongLogo6 from '../../media/accordion1/logotype/wrong-logo-6.svg'
/* Pic import end */

// #region : Lottie

import lottieLogo from '../../media/lottie/full to short logo.lottie'


function Logotype() {

  return (
    <>
      <section className='logo-description'>
        <h1>Логотип</h1>
        <p>Для логотипа Апраксина двора был разработан акцидентный шрифт, в&nbsp;основе которого лежит план самого комплекса. Повторяющиеся прямоугольные формы стали базисом для шрифта. Такой подход позволил нам создать неразрывную связь между новым логотипом и&nbsp;историей этого уникального места.</p>
        <DotLottiePlayer
          src={lottieLogo}
          autoplay
          loop
        />
      </section>

      <section className='logo-main'>
        <h2>Основной логотип</h2>

        <div className='logo-main__block'>

          <div className='gray-container'>
            <img src={defaultLogo}  alt="black-logo" />
          </div>

          <div className='logo-main__block-text'>
            <p>Основной логотип используется в&nbsp;приоритетном порядке на&nbsp;всех основных коммуникационных носителях Апраксина двора.</p>
            <p>При размещении логотипа на&nbsp;носителе стоит учитывать, какое расположение лучше всего уравновешивает композицию.</p>
            <p>Приоритетные расположения логотипа на&nbsp;носителях: левый верхний угол и&nbsp;нижний правый угол. Допускается выравнивание логотипа по&nbsp;центру носителя, когда на&nbsp;нем необходимо сделать акцент.</p>
            <p>Допускается масштабирование логотипа для разных носителей без изменения его пропорций, с&nbsp;учетом охранного поля и&nbsp;минимального размера.</p>
            <p>Как правило, достаточно разместить один логотип на&nbsp;одном носителе, но&nbsp;для решения отдельных задач можно использовать логотип несколько раз.</p>
          </div>
        </div>

        <DownloadButton picture={defaultLogo} />
      </section>

      <section className='logo-build'>
        <h2>Построение логотипа</h2>
        <p>Логотип построен по&nbsp;сетке с&nbsp;модулем M=4&times;4px и&nbsp;образует прямоугольник со&nbsp;сторонами 23M&times;25M. Высота букв&nbsp;7M, а&nbsp;межстрочное расстояние 2M. Стандартное межбуквенное расстояние равно&nbsp;M, но&nbsp;в&nbsp;логотипе для каждой пары букв скорректирован кернинг. Все штрихи букв по&nbsp;ширине равны&nbsp;M.</p>
        <div className='logo-build__pic'>
          <img src={logoGrid}  alt="logo grid" />
          <img src={logoGridSize}  alt="logo size" />
        </div>
      </section>

      <section className='logo-safeandsize'>

        <div className='logo-safeandsize__name'>
          <h2>Охранное поле</h2>
          <h2>Минимальный размер</h2>
        </div>

        <div className='logo-safeandsize__text'>
          <p>Охранное поле логотипа&nbsp;&mdash; это минимальное пустое пространство вокруг логотипа, которое необходимо соблюдать при размещении логотипа на&nbsp;различных носителях. Охранное поле равно высоте букв.</p>
          <p>Минимальный размер логотипа&nbsp;&mdash; это тот наименьший размер, при котором логотип сохраняет узнаваемость и&nbsp;читаемость. Не&nbsp;рекомендуется использовать значения ниже установленных.</p>
        </div>

        <div className='logo-safeandsize__pic'>
          <div className='gray-container'>
            <img src={logoSafeZone}  alt="logo safe zone" />
          </div>          
          <div className='gray-container'>
            <img src={logoMinSize}  alt="logo min size" />
          </div>
        </div>
      </section>

      <section className='logo-horizontal'>
        <h2>Горизонтальный логотип</h2>
        <p>Горизонтальная версия логотипа используется в&nbsp;случаях, когда невозможно или нецелесообразно использовать основной логотип. Например, для размещения на&nbsp;узких и&nbsp;вытянутых по&nbsp;горизонтали носителях.</p>

        <div className='gray-container'>
          <img src={horizontalLogo}  alt="logo horizontal" />
          <img src={horizontalLogoSafeZone}  alt="logo horizontal safe zone" />
          <img src={horizontalLogoMinSize}  alt="logo horizontal min size" />
        </div>

        <DownloadButton picture={horizontalLogo} />
      </section>

      <section className='logo-short'>  
        <h2>Сокращенный логотип</h2>
        <p>Сокращенная версия логотипа используется в&nbsp;случаях, когда нет возможности разместить полную версию логотипа, например, на&nbsp;носителях маленького размера.</p>

        <div className='gray-container'>
          <img src={smallLogo}  alt="logo small" />
          <img src={smallLogoSafeZone}  alt="logo small safe zone" />
          <img src={smallLogoMinSize}  alt="logo small min size" />
        </div>

        <DownloadButton picture={smallLogo} />
      </section>

      <section className='logo-partner'>
        <h2>С логотипами партнеров</h2>
        <p>Возможно два варианта размещения нескольких логотипов рядом: по&nbsp;горизонтали и&nbsp;по&nbsp;вертикали. При этом рекомендуемое расстояние между логотипами равно удвоенной высоте букв. Используйте выравнивание по&nbsp;центру. Соблюдайте охранные поля логотипов. Учитывайте визуальный вес каждого логотипа при определении их&nbsp;размеров относительно друг друга.</p>
        
        <div className="logo-partner__pics">
          <div className='gray-container'>
            <img src={partnerLogo1}  alt="logo horizontal" />
          </div>
          <div className='gray-container'>
            <img src={partnerLogo2}  alt="logo vertical" />
          </div>
        </div>
      </section>

      <section className='logo-colors'>
        <h2>Цветовые варианты</h2>
        <p>Приоритетными вариантами являются черный логотип на&nbsp;белом фоне и&nbsp;его инверсия. При этом допускаются различные варианты размещения логотипа на&nbsp;цветном фоне, когда это необходимо для решения технических или творческих задач.</p>
        <img src={logoColors}  alt="different logos" />
      </section>

      <section className='logo-wrong'>
        <h2>Неправильное использование</h2>

        <div className='logo-wrong__different-var'>

          <div className='logo-wrong__different-var-example'>
            <div className='gray-container'>
              <img src={wrongLogo1}  alt="one of the options of logo" />
            </div>
            <p>Не изменяйте логотип</p>
          </div>

          <div className='logo-wrong__different-var-example'>
            <div className='gray-container'>
              <img src={wrongLogo2}  alt="one of the options of logo" />
            </div>
            <p>Не деформируйте форму</p>
          </div>

          <div className='logo-wrong__different-var-example'>
            <div className='gray-container'>
              <img src={wrongLogo3}  alt="one of the options of logo" />
            </div>
            <p>Не поворачивайте</p>
          </div>

        </div>

        <div className='logo-wrong__different-var'>

          <div className='logo-wrong__different-var-example'>
            <div className='gray-container'>
              <img src={wrongLogo4}  alt="one of the options of logo" />
            </div>
            <p>Не добавляйте обводку</p>
          </div>

          <div className='logo-wrong__different-var-example'>
            <div className='gray-container'>
              <img src={wrongLogo5}  alt="one of the options of logo" />
            </div>
            <p>Не добавляйте эффекты</p>
          </div>

          <div className='logo-wrong__different-var-example'>
            <div className='gray-container'>
              <img src={wrongLogo6}  alt="one of the options of logo" />
            </div>
            <p>Не используйте как маску</p>
          </div>

        </div>

      </section>

      <Footer />
    </>
  )
}

export default Logotype