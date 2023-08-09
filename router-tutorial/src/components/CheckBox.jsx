import React from 'react'
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md'
import style from './CheckBox.module.css'

const CheckBox = ({ children, checked, ...rest }) => {
  return (
    <div className={style.checkbox}>
      <label>
        <input type="checkbox" checked={checked}{...rest} />
        <div className={style.icon}>
          {checked ? <MdCheckBox className={style.checked} /> : <MdCheckBoxOutlineBlank />}
        </div>
      </label>
      <span>{children}</span>
    </div>
  )
}

export default CheckBox