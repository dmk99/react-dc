import React from 'react'
import {withProps} from '../utils'
import PropTypes from "prop-types";

const {bool, number, string} = PropTypes;

export default withProps({
  cx: number,
  cy: number,
  drawPaths: bool,
  emptyTitle: string,
  externalLabels: number,
  externalRadiusPadding: number,
  innerRadius: number,
  minAngleForLabel: number,
  radius: number,
  slicesCap: number
})
