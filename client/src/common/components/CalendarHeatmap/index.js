import moment from "moment";
import { useEffect } from "react";
import { useState } from "react";

import useWindowDimensions from "hooks/useWindowSizeHook";
import "./index.scss";

const DayNames = {
  1: "Mon",
  3: "Wed",
  5: "Fri",
};

function Cell({ color }) {
  const { width } = useWindowDimensions();
  const timeLineDivWidth = Math.round(width * 0.69);
  const cellWidth = Math.round(timeLineDivWidth/77);

  let style = {
    backgroundColor: color,
    width: cellWidth,
    height: cellWidth
  };

  if (color === 'transparent') {
    style.border ='none';
  }

  return <div className="timeline-cells-cell" style={style}></div>;
}

function Month({ startDate, index }) {
  let date = moment(startDate).add(index * 7, "day");
  let monthName = date.format("MMM");

  return (
    <div className={`timeline-months-month ${monthName}`}>{monthName}</div>
  );
}

function WeekDay({ index }) {
  return <div className="timeline-weekdays-weekday">{DayNames[index]}</div>;
}

function Timeline({ range, data, colorFunc, showWeekDays = false, showMonths = false, allowMonthGap = true }) {
  let days = Math.abs(range[0].diff(range[1], "days"));
  let cells = Array.from(new Array(days));
  let weekDays = Array.from(new Array(7));
  let months = Array.from(new Array(Math.floor(days / 7)));
 
  let min = Math.min(0, ...data.map((d) => d.value));
  let max = Math.max(...data.map((d) => d.value));

  let colorMultiplier = 1 / (max - min);

  let startDate = range[0];
  const DayFormat = "DDMMYYYY";
  const [cellComponents, setCellComponents] = useState();

  useEffect(() => {
    let prevMonth = startDate.month();

    const resultCells = cells.map((_, index) => {
      let date = moment(startDate).add(index, "day");
      let dataPoint = data.find(
        (d) =>
          moment(date).format(DayFormat) ===
          moment(d.date).format(DayFormat)
      );
      let alpha = colorMultiplier * dataPoint?.value;
      let color = colorFunc(dataPoint?.value, alpha);
      let currentMonth = date._d.getMonth();
      let result = [];

      if (allowMonthGap && currentMonth!==prevMonth) {
        result = weekDays.map((_, it) => { 
          return {index, key: `${index}-${it}`, date, color: 'transparent'};
        });
        prevMonth = currentMonth;
      }

      result.push({...{key: index, index, date, color}});
      return result;
    });

    let cellComponents = [];

    for( let x of resultCells){
      if (Array.isArray(x)){
        cellComponents = [...cellComponents, ...x];
      }else{
        cellComponents.push(x);
      }
    }

    setCellComponents(cellComponents);
  }, [data]);

  return (
    <div className="timeline">
      <div className={`timeline-months${showMonths? '' : '--none'}`}>
        {months.map((_, index) => (
          <Month key={index} index={index} startDate={startDate} />
        ))}
      </div>

      <div className="timeline-body">
        <div className={`timeline-weekdays${showWeekDays? '' : '--none'}`}>
          {weekDays.map((_, index) => (
            <WeekDay key={index} index={index} startDate={startDate} />
          ))}
        </div>

        <div className="timeline-cells">
          {cellComponents && cellComponents.map((cellProperties) => <Cell  {...cellProperties} />)}
        </div>
      </div>
    </div>
  );
}

export default Timeline;
