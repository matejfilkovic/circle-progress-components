import React from 'react'
import ReactDOM from 'react-dom'

import CircleProgressBiggerText from 'components/circle-progress-bigger-text'
import CircleProgressSmallerText from 'components/circle-progress-smaller-text'
import CircleProgressThinBorder from 'components/circle-progress-thin-border'

import './index.scss'

ReactDOM.render((
  <div className="main-container">
    <div className="circle-progress">
      <CircleProgressBiggerText
        percentageToFill={56}
        text="56"
      />
    </div>
    <div className="circle-progress">
      <CircleProgressSmallerText
        percentageToFill={76}
        text="76"
      />
    </div>
    <div className="circle-progress">
      <CircleProgressThinBorder
        percentageToFill={84}
        text="84"
      />
    </div>
  </div>
), document.getElementById('app'))
