import React from 'react';

const LineChart = require("react-chartjs").Line;



const Chart = React.createClass({


  render: function() {
    return <LineChart data={this.props.city} options={this.props.value} width="600" height="250"/>

  }
});

export default Chart
