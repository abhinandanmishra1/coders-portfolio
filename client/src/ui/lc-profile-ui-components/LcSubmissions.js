import React, { useCallback, useEffect, useState } from 'react';
import moment from 'moment';
import Timeline from 'components/CalendarHeatmap';
import { getDateKey } from 'utils/helpers';
import { useDispatch, useSelector } from 'react-redux';
import { loadUserProfileCalendar } from 'stores/leetcodeProfile';

const LcSubmissions = () => {
  const { userProfileCalendar } = useSelector(store => store.leetcode);
  
  const {submissionCalendar, activeYears} = userProfileCalendar || {};
  
  const dispatch = useDispatch();
  let startDate = moment().add(-365, 'days');
  const defaultDateRange = [startDate, moment()];
  const [dateRange, setDateRange] = useState(defaultDateRange);
  const [ data, setData] = useState([]);
  const { profile } = useSelector(store => store.user);
  const { leetcodeUsername } = profile;


  const changeSubmissionGraphTimeline = useCallback(
    (e) => {
      const { value } = e.target;
      const year = parseInt(value);
      dispatch(loadUserProfileCalendar(leetcodeUsername, year));

      const startDate = moment(new Date(year, 0, 1));
      const endDate = moment(new Date(year, 11, 31));

      setDateRange([startDate, endDate]);
    },
    [dispatch, leetcodeUsername],
  );
  
  useEffect(() => {
    if (submissionCalendar) {
      let startDate = dateRange[0];
      let endDate = dateRange[1];
  
      const data = [];
  
      var now = startDate.clone();
  
      while (now.isSameOrBefore(endDate)) {
        const value = submissionCalendar[getDateKey(now.toDate())] || 0;
        
        data.push({
          date: moment(now),
          value,
        });
        now.add(1, 'day');
      }
  
      setData(data);
    }
  }, [dateRange, submissionCalendar, dispatch]);

  if (!submissionCalendar) {
    return <h1>No data available</h1>
  };

  const getColor = (value) => {
    if (value > 1) return '#6BCF8E';

    if (value === 0) return 'hsla(0,0%,100%,.1)';
    
    return `rgba(44, 181, 93, 0.5)`;
  }

  return (
    <div className='lc-submissions lc-section'> 
        <div className="cf-submissions__header">
          <div className="cf-submissions__header--title">
          Submssions Graph
          </div>
          <div className="cf-submissions__header--year">
            <select name="year" id="" onChange={changeSubmissionGraphTimeline}>
              {
                activeYears.reverse().map((year, index) => {
                  return (
                    <option key={index} value={year}> {year} </option>
                  )
                }
                ).reverse()
              }
            </select>
          </div>
        </div>
        <Timeline range={dateRange} data={data} colorFunc={(value) => getColor(value)} />
    </div>
  )
}

export default LcSubmissions;

// add a feature like we can show the current streak on place where it is hovered
// recent contest participation and number of questions solved 
// list of questions that user have tried to solved but not solved