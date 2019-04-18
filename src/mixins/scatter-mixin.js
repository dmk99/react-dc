import React from 'react'
import {withProps} from '../utils'
import PropTypes from "prop-types";

const {bool, func, number, oneOfType, string} = PropTypes;

export default withProps({
  emptySize: number,
  excludedColor: number,
  excludedOpacity: number,
  excludedSize: number,
  existenceAccesor: func,
  highlightedSize: number,
  symbol: oneOfType([func, string]),
  symbolSize: number
})
