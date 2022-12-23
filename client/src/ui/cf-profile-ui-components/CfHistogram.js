import React, {useState} from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

// https://api.highcharts.com/highcharts/

const CodeforcesHistogram = ({ data, categories}) => {
  const options = {
    chart: {
      renderTo: "container",
      type: "column",
      lineWidth: 0,
      height: "250vh",
    },
    xAxis: {
      categories,
      labels: {
        enabled: true,
      },
      lineColor: "none",
    },
    yAxis: {
      title: {
        enabled: false,
      },
      gridLineColor: "none",
      labels: {
        enabled: false,
      },
    },
    tooltip: {
      enabled: true,
      formatter: function () {
        return this.y + " Problems Solved";
       },
       distance: 32
    },
    title: {
      text: "Top",
      align: "left",
      style: {
        color: "hsla(0,0%,100%,.4)",
        fontSize: "1.2rem"
      }
    },
    subtitle: {
      text: '',
      align: "left",
      style: {
        color: "#ffffff",
        fontSize: "2rem"
      }
    },
    legend: {
      enabled: false,
    },
    minPointLength: 1,
    plotOptions: {
      series: {
        pointPadding: 0.07,
        groupPadding: 0.04,
      },
      threshold: 1,
    },
    series: [
      {
        data,
        color: "hsla(0,0%,100%,.1)",
        borderColor: "rgb(38, 38, 38)",
        borderRadius: 3,
        minHeight: 1111,
        depth: 30,
        states: {
          hover: {
            color: "rgb(255, 161, 22)",
            animation: {
              duration: 2500,
            },
          },
        },
        point: {
          events: {
          },
        },
        threshold: 1,
      },
    ],
    credits: {
      enabled: false,
    },
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

const CfHistogram = ({ problemRatingsCount }) => {
  if (!problemRatingsCount || problemRatingsCount.length===0) return null;

  const problemSolved = problemRatingsCount.filter(problem => problem.rating && problem.problemsCount);
  const data = problemSolved.map((problem) => {
    const column = {y: problem.problemsCount, color: 'blue'};
    return column;
  });

  const categories = problemSolved.map((problem) => {
    return problem.rating;
  });


//   const topPercentages = contests.map((contest) => `${contest.topPercentage.toFixed(2)}%`);

  return (
    <div className="cf-histogram cf-section">
      <div className="cf-histogram__header">
        Problem Ratings
      </div>
      <CodeforcesHistogram {...{ data,categories}} />
    </div>
  );
};

export default React.memo(CfHistogram);
