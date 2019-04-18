import React from 'react'
import {withProps} from '../utils'
import PropTypes from "prop-types";

const {bool, number} = PropTypes;

export default withProps({
  alwaysUseRounding: bool,
  barPadding: number,
  centerBar: bool,
  gap: number,
  outerPadding: number
})
