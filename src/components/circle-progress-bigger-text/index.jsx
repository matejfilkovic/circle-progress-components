import React from 'react'
import PropTypes from 'prop-types'

import CircleProgress from '../circle-progress'

export default function CircleProgressBiggerText(props) {
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
      radius={32}
      strokeWidth={8}
      textY={38}
      textStrokeWidth={2}
      textFontSize={18}
    />
  )
}

/* eslint-disable react/require-default-props */
CircleProgressBiggerText.propTypes = {
  percentageToFill: PropTypes.number.isRequired,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  baseCircleColor: PropTypes.string,
  progressCircleColor: PropTypes.string
}
