import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { getCfRatings } from "utils/helpers";

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
];

const formatDate = (date) => {
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  return `${day} ${monthNames[month]}, ${year}`;
}

const LeetCodeChart = ({
  data,
  startDate,
  endDate,
}) => {
  const options = {
    title: {
      text: "",
    },
    chart: {
      backgroundColor: "",
      height: "250vh",
      renderTo: "container",
    },
    credits: {
      enabled: false,
    },
    legend: {
      enabled: false,
    },
    accessibility: {
      enabled: false,
    },
    series: [
      {
        name: "",
        showInLegend: "",
        legendIndex: 0,
        marker: {
          enabled: true,
          radius: 3,
          fillColor: "rgb(255, 161, 22)"
        },
        data,
        color: "rgb(255, 161, 22, 0.8)",
      },
    ],
    xAxis: {
      title: {
        text: "",
      },
      lineColor: "none",
      tickColor: "none",
      minorGridLineColor: "none",
      tickInterval: 1, // one day
      labels: {
        enabled: true,
        formatter() {
          if (this.isFirst) {
            return formatDate(startDate);
          } else if (this.isLast) {
            return formatDate(endDate);
          } else {
            return 'Jan';
          }
        },
        align: 'left',
        rotation: 1
        // autoRotation: 0
      },
    },
    yAxis: {
      min: 0,
      max: 4000,
      tickInterval: 2,
      // tickPixelInterval: 72,
      title: "",
      accessibility: {
        enabled: false,
      },
      showFirstLabel: false,
      showLastLabel: false,
      gridLineColor: "none",
      plotBands: [
        { // mark the weekend
        color: 'gray',
        from: 0,
        to: 1200,
        thickness: 2,
        },
        { // mark the weekend
          color: 'green',
          from: 1200,
          to: 1400,
        },
        { // mark the weekend
          color: 'cyan',
          from: 1400,
          to: 1600,
        },
        { // mark the weekend
          color: 'blue',
          from: 1600,
          to: 1900,
        },
        { // mark the weekend
          color: 'violet',
          from: 1900,
          to: 2200,
        },
        { // mark the weekend
          color: 'orange',
          from: 2200,
          to: 2400,
        },
        { // mark the weekend
          color: 'red',
          from: 2400,
          to: 4000,
          thickness: '1%',
        }
     ],
    },
    tooltip: {
      
    },
  };

  return (
    <>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </>
  );
};

const CfChart = ({ contests }) => {
  if (!contests) return null;

  const data = getCfRatings(contests);
  
  const startDate = new Date(
    contests[0]?.ratingUpdateTimeSeconds * 1000
  );

  const endDate = new Date(
    contests[contests.length-1]?.ratingUpdateTimeSeconds * 1000
  );

  // const userContestDetails = contests.currentContestRating;

  return (
    <div className="cf-chart cf-section">
      <div className="cf-chart__header">
        Contest Rating
      </div>
      <LeetCodeChart
        {...{ data, startDate, endDate }}
      />
    </div>
  );
};

export default React.memo(CfChart);
