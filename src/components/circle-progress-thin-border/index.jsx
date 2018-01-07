import React from 'react'
import PropTypes from 'prop-types'

import CircleProgress from '../circle-progress'

export default function CircleProgressThinBorder(props) {
  const {
    percentageToFill,
    text,
    baseCircleColor,
    progressCircleColor
  } = props

  return (
    <CircleProgress
      percentageToFill={percentageToFill}
      text={text}
      baseCircleColor={baseCircleColor}
      progressCircleColor={progressCircleColor}
      radius={31.25}
      strokeWidth={5}
      textY={37.5}
      textStrokeWidth={2}
      textFontSize={18}
    />
  )
}

/* eslint-disable react/require-default-props */
CircleProgressThinBorder.propTypes = {
  percentageToFill: PropTypes.number.isRequired,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  baseCircleColor: PropTypes.string,
  progressCircleColor: PropTypes.string
}
