import React, { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { getRatings } from "utils/helpers";
import knightBadge from "assets/images/knight.png";
import guardianBadge from "assets/images/guardian.png";
import { useSelector } from "react-redux";

// https://api.highcharts.com/highcharts/

const getBadgeImage = (badgeName) => {
  const badge = {
    Knight: knightBadge,
    Guardian: guardianBadge,
  };

  return (
    <>
     {
      <img
      src={badge[badgeName]}
      alt={badgeName}
      className="lc-chart__details--img"
    />
     }
    </>
  )
}

const LeetCodeChart = ({
  data,
  startYear,
  currentYear,
  userContestDetails,
}) => {
  const badgeName = userContestDetails?.badge?.name || null;
  const {
    attendedContestsCount,
    rating,
    globalRanking,
    topPercentage,
    totalParticipants,
  } = userContestDetails;

  const [count, setCount] = useState(attendedContestsCount);
  const [contestRating, setContestRating] = useState(Math.round(rating));

  const options = {
    title: {
      text: "",
    },
    chart: {
      backgroundColor: "rgb(38, 38, 38)",
      height: "200vh",
      marginLeft: 10,
      renderTo: "container",
    },
    accessibility: {
      enabled: false,
    },
    credits: {
      enabled: false,
    },
    legend: {
      enabled: false,
    },
    series: [
      {
        name: "",
        showInLegend: "",
        legendIndex: 0,
        marker: {
          enabled: false,
        },
        data,
        color: "rgb(255, 161, 22)",
      },
    ],
    xAxis: {
      title: {
        text: "",
      },
      tickInterval: 0,
      showFirstLabel: true,
      showLastLabel: true,
      lineColor: "none",
      tickColor: "none",
      minorGridLineColor: "none",
      labels: {
        formatter() {
          if (this.isFirst) {
            return startYear;
          } else if (this.isLast) {
            return currentYear;
          } else {
            return "";
          }
        },
      },
    },
    yAxis: {
      tickInterval: 0,
      tickPixelInterval: 0,
      labels: {
        formatter: function () {
          return this.value + " %";
        },
      },
      title: "",
      accessibility: {
        enabled: false,
      },
      showFirstLabel: false,
      showLastLabel: false,
      gridLineColor: "none",
    },
    tooltip: {
      enabled: false,
    },
  };

  return (
    <>
      <div className="lc-chart__details">
        <div className="lc-chart__details--rating">
          <div className="lc-chart__details--text">Contest Rating</div>
          <div className="lc-chart__details--contest-rating">
            {contestRating}
          </div>
        </div>
        {badgeName && (
          <div className="lc-chart__details--level">
            {getBadgeImage(badgeName)}
            <div className="lc-chart__details--badge-level">
              <div className="lc-chart__details--text">Level</div>
              <div className="lc-chart__details--level-name">{badgeName}</div>
            </div>
          </div>
        )}
        <div className="lc-chart__details--ranking">
          <div className="lc-chart__details--text">Global Ranking</div>
          <div className="lc-chart__details--global">
            {globalRanking}
            <span>/{totalParticipants}</span>
          </div>
        </div>
        <div className="lc-chart__details--solved">
          <div className="lc-chart__details--text">Attended</div>
          <div className="lc-chart__details--count">{count}</div>
        </div>
      </div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </>
  );
};

const LcChart = () => {
  const { contestRatings: contests} = useSelector(store => store.leetcode);

  if (!contests || !contests.contestHistory) return null;

  const data = getRatings(contests.contestHistory);
  
  const startYear = new Date(
    contests.contestHistory[0]?.contest?.startTime * 1000
  ).getFullYear();

  const currentYear = new Date().getFullYear();
  const userContestDetails = contests.currentContestRating;
  if (!userContestDetails) return null;

  return (
    <div className="lc-chart lc-section">
      <LeetCodeChart
        {...{ data, startYear, currentYear, userContestDetails }}
      />
    </div>
  );
};

export default LcChart;
