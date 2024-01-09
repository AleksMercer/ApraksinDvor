import React from 'react'
import Footer from '../tinycomp/Footer'

/* Pic import start */

import dividerUseage from '../../media/accordion2/divider/divider-useage.webp'
import dividerBuild from '../../media/accordion2/divider/divider-build.webp'

/* Pic import end */

function Divider() {
  return (
    <>
      <section className='divider-description'>
        <h1>Divider</h1>
        <p>Разделители используются для разграничения разделов контента или групп элементов интерфейса. Визуально они выглядят как горизонтальные или вертикальные линии.</p>
      </section>

      <section className='divider-useage'>
        <h2>Использование</h2>
        <p>Разделители разграничивают контент на&nbsp;четкие группы.</p>
        <p>Рекомендуется использовать разделители так, чтобы они были заметны, но&nbsp;не&nbsp;отвлекали внимание. Применение разделителей оправдано, если элементы нельзя разделить с&nbsp;помощью пробелов. Чрезмерное использование разделителей стоит избегать, они должны объединять элементы в&nbsp;логические группы, а&nbsp;не&nbsp;разделять каждый элемент.</p>
        <img src={dividerUseage}  alt="использование divider на примере" />
      </section>

      <section className='divider-build'>
        <h2>Принципы построения </h2>

        <div className='divider-build__container'>
          <img src={dividerBuild}  alt="построение divider" />
          
          <div className='divider-build__container-text'>
            <p>Компонент разделителя состоит из&nbsp;горизонтальной или вертикальной линии с&nbsp;фиксированной толщиной 1,5&nbsp;px.</p>
            <p>Горизонтальные и&nbsp;вертикальные отступы могут варьироваться в&nbsp;зависимости от&nbsp;контекста применения, минимальный размер отступа составляет 24&nbsp;px.</p>
          </div>
        </div>
      </section>
    
      <Footer />
    </>
  )
}

export default Divider