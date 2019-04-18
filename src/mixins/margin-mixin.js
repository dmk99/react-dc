import React from 'react'
import {withProps} from '../utils'
import PropTypes from "prop-types";

export default withProps({
  margins: PropTypes.shape({
    left: PropTypes.number.isRequired,
    right: PropTypes.number.isRequired,
    top: PropTypes.number.isRequired,
    bottom: PropTypes.number.isRequired
  })
})
