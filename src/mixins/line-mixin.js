import React from 'react'
import {withProps} from '../utils'
import PropTypes from "prop-types";

const {arrayOf, bool, func, number, oneOfType, shape, string} = PropTypes;

export default withProps({
  dashStyle: arrayOf(number),
  defined: func,
  dotRaidus: number,
  interpolate: string,
  renderArea: bool,
  renderDataPoints : oneOfType([
    bool,
    shape({
      fillOpacity: number,
      strokeOpacity: number,
      radius: number
    })
  ]),
  tension: number,
  xyTipsOn: bool
})
