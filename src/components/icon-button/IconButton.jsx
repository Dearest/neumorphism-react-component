import classNames from 'classnames'
import { SHAPE_TYPE, SIZE } from '../../core/constant'
import React from 'react'
import './icon-button.scss'

export default function IconButton(props) {
  const shapeType = Object.keys(SHAPE_TYPE).includes(props.type) ? props.type : SHAPE_TYPE.rect
  const size = Object.keys(SIZE).includes(props.size) ? props.size : SIZE.big
  const classes = {
    self: ['neIconButton', shapeType, props.className, size],
    icon: ['neIconButtonInside', props.iconClassName]
  }
  return (
    <div className={classNames(classes.self)}>
      <div className={classNames(classes.icon)} onClick={props.onClick}>
        {props.icon}
      </div>
    </div>
  )
}
