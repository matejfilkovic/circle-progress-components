import React from 'react'
import PropTypes from 'prop-types'

import CircleProgress from '../circle-progress'

export default function CircleProgressSmallerText(props) {
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
      radius={74}
      strokeWidth={16}
      textY={82}
      textStrokeWidth={3}
      textFontSize={28}
    />
  )
}

/* eslint-disable react/require-default-props */
CircleProgressSmallerText.propTypes = {
  percentageToFill: PropTypes.number.isRequired,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  baseCircleColor: PropTypes.string,
  progressCircleColor: PropTypes.string
}
