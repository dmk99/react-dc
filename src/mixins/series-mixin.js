import React from 'react'
import {withProps} from '../utils'
import PropTypes from "prop-types";

const {func} = PropTypes;

export default withProps({
  chart: func,
  seriesAccessor: func.isRequired,
  seriesSort: func,
  valueSort: func
})
