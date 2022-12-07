import React from 'react';
import moment from 'moment';
import Timeline from 'common/components/CalendarHeatmap';
import { getDateKey } from 'utils/helpers';

const LcSubmissions = ({calendarData}) => {
  if (!calendarData) {
    return <h1>No data available</h1>
  }

  const {submissionCalendar} = calendarData;
  let startDate = moment().add(-365, 'days');
  let dateRange = [startDate, moment()];
  
  let data = Array.from(new Array(365)).map((_, index) => {
    const date = moment(startDate).add(index, 'day');
    const value = submissionCalendar[getDateKey(date.toDate())] || 0;

    return {
      date,
      value
    };
  });

  return (
    <div className='lc-submissions lc-section'>
        <Timeline range={dateRange} data={data} colorFunc={(value, alpha) => value>1? '#6BCF8E' :`rgba(44, 181, 93, ${alpha===0?0:0.5})`} />
    </div>
  )
}

export default LcSubmissions

// add a feature like we can show the current streak on place where it is hovered
// recent contest participation and number of questions solved 
// list of questions that user have tried to solved but not solved