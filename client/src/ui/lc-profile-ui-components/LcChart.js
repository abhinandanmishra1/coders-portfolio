import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { getRatings } from 'utils/helpers';

// https://api.highcharts.com/highcharts/

const LeetCodeChart = ({data, startYear, currentYear}) => {
  const options = {
    title: {
      text: ''
    },
    chart: {
      backgroundColor: 'rgb(38, 38, 38)',
      height: '200vh',
      marginLeft: 10,
      renderTo: 'container',
    },
    credits: {
      enabled: false,
    },
    legend: {
      enabled: false,
    },
    series: [{
      name: '',
      showInLegend: '',
      legendIndex: 0,
      marker: {
        enabled: false,
      },
      data,
      color: 'rgb(255, 161, 22)'
    }],
    xAxis: {
      title: {
        text: ''
      },
      tickInterval: 0,
      showFirstLabel: true,
      showLastLabel: true,
      lineColor: 'none',
      tickColor: 'none',
      minorGridLineColor: 'none',
      labels: {
        formatter() {
          if(this.isFirst) {
              return startYear
          } else if(this.isLast) {
              return currentYear
          } else {
            return ''
          }
        }
      }
    },
    yAxis: {
      tickInterval: 0,
      tickPixelInterval: 0,
      labels: {
        formatter: function() {
            return this.value + ' %';
        }
      },
      title: '',
      accessibility : {
        enabled: false,
      },
      showFirstLabel: false,
      showLastLabel: false,
      gridLineColor: 'none',
    },
  }

  return (
    <HighchartsReact
    highcharts={Highcharts}
    options={options}
  />
  )
};

const LcChart = ({contests}) => {
  if (!contests || !contests.contestHistory) return null;
  const data = getRatings(contests.contestHistory);
  const startYear = new Date(contests.contestHistory[0]?.contest?.startTime*1000).getFullYear();
  const currentYear = new Date().getFullYear();

  return (
    <div className='lc-chart lc-section'>
      <LeetCodeChart {...{data, startYear, currentYear}} />
    </div>
  )
}

export default LcChart