import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { SHAPE_TYPE, SIZE } from '../../core/constant';
import classNames from 'classnames';
import './button.scss';


export default function Button(props) {
  const buttonType = Object.keys(SHAPE_TYPE).includes(props.type) ? props.type : SHAPE_TYPE.rect
  const size = Object.keys(SIZE).includes(props.size) ? props.size : SIZE.big

  const classes = {
    self: [
      'neButton',
      props.className
    ],
    button: {
      [`${buttonType}`]: true,
      [`${size}`]: true
    }
  }

  function StartIcon(props) {
    if(props.startIcon) {
      return(
        <div className="startIcon">
          {props.startIcon}
        </div>
      )
    }
    return <Fragment></Fragment>
  }

  return (
    <div className={classNames(classes.self)} onClick={props.onClick}>
      <StartIcon startIcon={props.startIcon}/>
      <button
        className={classNames(classes.button)}
      >
        {props.children}
      </button>
    </div>
  )
}

Button.propTypes = {
  type: PropTypes.oneOf(Object.keys(SHAPE_TYPE)),  // button type
  size: PropTypes.oneOf(Object.keys(SIZE)),  // button size
}
