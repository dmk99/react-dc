import React from 'react'
import dc from 'dc'
import BaseChart from './base-chart'
import coordinateGridMixin from '../mixins/coordinate-grid-mixin'
import stackMixin from '../mixins/stack-mixin'
import lineMixin from '../mixins/line-mixin'
import PropTypes from "prop-types";

const {arrayOf, bool, func, number, oneOfType, shape, string} = PropTypes;

@stackMixin
@coordinateGridMixin
@lineMixin
export default class LineChart extends BaseChart{
  static displayName = 'LineChart';

  componentDidMount(){
    this.chart = dc.lineChart(this.chart);
    this.configure();
    this.chart.render();
  }
}
