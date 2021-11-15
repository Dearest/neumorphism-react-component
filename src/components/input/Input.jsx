import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { SHAPE_TYPE, SIZE } from '../../core/constant';
import classNames from 'classnames/bind';
import styles from './input.scss';
let classWithStyle = classNames.bind(styles);

export default function Input(props) {
  const type = Object.keys(SHAPE_TYPE).includes(props.type) ? props.type : SHAPE_TYPE.rect
  const size = Object.keys(SIZE).includes(props.size) ? props.size : SIZE.big
  const classes = {
    input: {
      neInput: true,
      [`${type}`] : true,
      [`${size}`]: true,
    }
  }

  const [value, setValue] = useState(props.value || '')

  const handleChange = (event) => {
    setValue(event.target.value)
    props.onChange(event)
  }

  return (
    <div className={props.className}>
      <input
        className={classWithStyle(classes.input)}
        placeholder={props.placeholder}
        value={value}
        onChange={ handleChange }
      />
    </div>
  )
}

Input.propTypes = {
  type: PropTypes.oneOf(Object.keys(SHAPE_TYPE)),
  size: PropTypes.oneOf(Object.keys(SIZE)),
}
