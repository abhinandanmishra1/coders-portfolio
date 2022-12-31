import React, {useState} from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useSelector } from "react-redux"

// https://api.highcharts.com/highcharts/

const LeetCodeHistogram = ({ data, ratingsRanges, topPercentages, rating, topPercentage }) => {
  const [ subtitleText, setSubtitleText ] = useState(topPercentage);
  const options = {
    chart: {
      renderTo: "container",
      type: "column",
      backgroundColor: "rgb(38, 38, 38)",
      lineWidth: 0,
      height: "250vh",
    },
    xAxis: {
      categories: [],
      labels: {
        enabled: false,
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
      headerFormat: "",
      pointFormat: "",
      enabled: false,
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
      text: subtitleText,
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
            mouseOver: function (event) {
              if (event && event.target){
                setSubtitleText(topPercentages[event.target.x]);
              }
            },
            mouseOut: function (event) {
              if (event && event.target){
                setSubtitleText(topPercentage);
              }
            },
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

const LcHistogram = () => {
  const { contestRatings, contestRatingHistogram } = useSelector( store => store.leetcode);
  const { contestRatingHistogram: contests} = contestRatingHistogram || {};
  const { rating, topPercentage } = contestRatings?.currentContestRating || {};
  
  if (!contests || !topPercentage || !rating) return null;

  const data = contests.map((contest) => {
    const column = {y: contest.userCount};
    const userRating = Math.round(rating);
    if ( userRating>=contest.ratingStart && userRating<contest.ratingEnd) {
      column.color = "rgb(255, 161, 22)";
    }
    return column;
  });

  const ratingsRanges = contests.map((contest) => {
    const { ratingStart, ratingEnd } = contest;
    return {
      ratingStart,
      ratingEnd
    };
  });

  const topPercentages = contests.map((contest) => `${contest.topPercentage.toFixed(2)}%`);

  return (
    <div className="lc-histogram lc-section">
      <LeetCodeHistogram {...{ data, ratingsRanges, topPercentages, rating, topPercentage: `${topPercentage}%` }} />
    </div>
  );
};

export default LcHistogram;
