import React, {useState, useCallback, useEffect} from 'react';
import moment from 'moment';
import Timeline from 'components/CalendarHeatmap';
import { getDateKey } from 'utils/helpers';

const CfSubmissionsGraph = ({submissionsData}) => {
  let startDate = moment().add(-365, 'days');
  const defaultDateRange = [startDate, moment()];

  const [dateRange, setDateRange] = useState(defaultDateRange);
  const [ data, setData] = useState([]);
  
  const changeSubmissionGraphTimeline = useCallback(
    (e) => {
      const { value } = e.target;
      const year = parseInt(value);
      const startDate = moment(new Date(year, 0, 1));
      const endDate = moment(new Date(year, 11, 31));

      setDateRange([startDate, endDate]);
    },
    [],
  )

  useEffect(() => {
    let startDate = dateRange[0];
    let endDate = dateRange[1];

    const data = [];

    var now = startDate.clone();

    while (now.isSameOrBefore(endDate)) {
      const value = submissionsData[getDateKey(now.toDate())] || 0;
        
      data.push({
        date: moment(now),
        value,
      });
      now.add(1, 'day');
    }
    setData(data);
  }, [dateRange, submissionsData]);

  if (!submissionsData) {
    return <h1>No data available</h1>
  }
  
  const getColor = (value) => {
    if (value > 1) return '#6BCF8E';

    if (value === 0) return 'hsla(0,0%,100%,.1)';
    
    return `rgba(44, 181, 93, 0.5)`;
  };

  return (
    <div className='cf-section cf-submissions'>
        <div className="cf-submissions__header">
          <div className="cf-submissions__header--title">
          Submssions Graph
          </div>
          <div className="cf-submissions__header--year">
            <select name="year" id="" onChange={changeSubmissionGraphTimeline}>
              <option value="2022"> Current year </option>
              <option value="2021"> 2021 </option>
              <option value="2020"> 2020 </option>
            </select>
          </div>
        </div>
        {
          Array.isArray(data) && data.length>0 && (
            <Timeline allowMonthGap={true} range={dateRange} data={data} colorFunc={(value) => getColor(value)} />
          )
        }
    </div>
  );
}

export default React.memo(CfSubmissionsGraph);
