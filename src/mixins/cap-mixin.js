import React from 'react'
import {withProps} from '../utils'
import PropTypes from "prop-types";

const {func, bool, number, oneOfType, string} = PropTypes;

export default withProps({
  cap: number,
  othersGrouper: oneOfType([func, bool]), // disallow true ! only false is accepted
  othersLabel: string
})
