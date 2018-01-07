import React from 'react'
import PropTypes from 'prop-types'

export default class CircleProgress extends React.Component {
  constructor(props) {
    super(props)

    const {
      radius,
      strokeWidth
    } = this.props

    this.radius = radius - (strokeWidth / 2)
    this.circumference = 2 * this.radius * Math.PI
    this.strokeDashoffset = this.circumference

    this.state = {
      strokeDashoffset: this.circumference
    }
  }

  componentDidMount() {
    const {
      percentageToFill
    } = this.props

    // In order to trigger a css transition
    // we need to use a hack like this :(.
    setTimeout(
      () => this.setStrokeDashoffset(percentageToFill),
      300
    )
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.percentageToFill !== this.props.percentageToFill) {
      this.setStrokeDashoffset(nextProps.percentageToFill)
    }
  }

  setStrokeDashoffset(percentageToFill) {
    this.setState({
      strokeDashoffset: this.circumference * (1 - (percentageToFill / 100))
    })
  }

  render() {
    const {
      baseCircleColor,
      progressCircleColor,
      text,
      radius,
      strokeWidth,
      textY,
      textStrokeWidth,
      textFontSize
    } = this.props

    return (
      <svg width="100%" height="100%" viewBox={`0 0 ${2 * radius} ${2 * radius}`}>
        <g>
          <circle
            cx={radius}
            cy={radius}
            r={this.radius}
            strokeWidth={strokeWidth}
            stroke={baseCircleColor}
            fill="none"
          />
          <circle
            style={{ transition: 'stroke-dashoffset 1s' }}
            cx={radius}
            cy={radius}
            r={radius - (strokeWidth / 2)}
            strokeWidth={strokeWidth}
            transform={`rotate(-90, ${radius}, ${radius})`}
            stroke={progressCircleColor}
            fill="none"
            strokeLinecap="round"
            strokeDashoffset={this.state.strokeDashoffset}
            strokeDasharray={this.circumference}
          />
          <text
            x="50%"
            y={textY}
            textAnchor="middle"
            stroke={progressCircleColor}
            strokeWidth={textStrokeWidth}
            fontSize={textFontSize}
          >
            {text}
          </text>
        </g>
      </svg>
    )
  }
}

CircleProgress.propTypes = {
  baseCircleColor: PropTypes.string,
  progressCircleColor: PropTypes.string,
  percentageToFill: PropTypes.number.isRequired,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  radius: PropTypes.number.isRequired,
  strokeWidth: PropTypes.number.isRequired,
  textY: PropTypes.number.isRequired,
  textStrokeWidth: PropTypes.number.isRequired,
  textFontSize: PropTypes.number.isRequired
}

CircleProgress.defaultProps = {
  baseCircleColor: '#d9d9d9',
  progressCircleColor: '#1d345d',
  text: ''
}
