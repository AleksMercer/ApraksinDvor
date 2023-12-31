import React, { useState } from 'react'

function CheckboxComp() {

  const [isChecked, setIsChecked] = useState(true)

  return (
    <div
      class={`checkbox-comp ${isChecked ? 'checked' : 'unchecked'}`}
      onClick={() => setIsChecked(!isChecked)}>
    </div>
  )
}

export default CheckboxComp