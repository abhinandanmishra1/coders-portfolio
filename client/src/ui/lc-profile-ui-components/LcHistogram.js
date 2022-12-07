import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { getRatings } from 'utils/helpers';

// https://api.highcharts.com/highcharts/

const LeetCodeHistogram = ({data, startYear, currentYear}) => {
  const options = {
    chart: {
        renderTo: 'container',
        type: 'column',
        backgroundColor: 'rgb(38, 38, 38)',
        lineWidth: 0,
        height: '200vh',
    },
    xAxis: {
        categories: [],
        labels: {
            enabled: false,
        },
        lineColor: 'none'
    },
    yAxis: {
        title: {
            enabled: false
        },
        gridLineColor: 'none',
        labels: {
            enabled: false,
        }
    },
    tooltip: {
        headerFormat: '',
        pointFormat: '',
        enabled: false
    },
    title: {
        text: '',
    },
    subtitle: {
        text: ''
    },
    legend: {
        enabled: false
    },
    minPointLength: 1,
    plotOptions: {
        series: {
            pointPadding: 0.07,
            groupPadding: 0.04,
        },
        threshold: 1
    },
    series: [{
        data,
        color: 'hsla(0,0%,100%,.1)',
        borderColor: 'rgb(38, 38, 38)',
        borderRadius: 3,
        minHeight: 1111,
        depth: 30,
        states: {
            hover : {
                color: 'rgb(255, 161, 22)',
                animation: {
                    duration: 2500
                }
            },
        },
        point: {
            events: {
                mouseOver: function (event) {
                    console.log(event)
                },
            }
        },
        threshold: 1
    }],
    credits: {
        enabled: false,
    }
};

  return (
    <HighchartsReact
        highcharts={Highcharts}
        options={options}
  />
  )
};

const LcHistogram = ({contests}) => {
  if (!contests) return null;
  
  const data = contests.map((contest) => contest.userCount);

  return (
    <div className='lc-histogram lc-section'>
      <LeetCodeHistogram {...{data}}/>
    </div>
  )
}

export default LcHistogram;