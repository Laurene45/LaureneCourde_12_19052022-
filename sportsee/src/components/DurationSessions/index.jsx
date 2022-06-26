import React, { useContext } from 'react';
import { UserContext } from '../../utils/ApiContext';
import { LineChart, XAxis, Tooltip, Line } from 'recharts';

const days = {
  1: 'L',
  2: 'M',
  3: 'M',
  4: 'J',
  5: 'V',
  6: 'S',
  7: 'D',
};

/** @function get day
 *
 * @param {number} indexDay
 * @returns {string} (letter of day)
 */

const getDay = (indexDay) => {
  return days[indexDay];
};

/** @function for showing duration session to line chart
 *
 * @component
 * @return (<DurationSessions/>)
 */

const DurationSessions = () => {
  const { userDurationSession } = useContext(UserContext);

  return (
    <div className="duration-session">
      <header className="durationSessions__header">
        <h1>Durée moyenne des sessions</h1>
      </header>
      <LineChart
        className="duration-chart"
        id="durationChart"
        width={250}
        height={240}
        data={userDurationSession}
        margin={{
          top: 50,
          right: 0,
          left: 5,
          bottom: 0,
        }}
      >
        <Line
          className="line-information"
          type="monotone"
          dataKey="sessionLength"
          stroke="white"
          dot={false}
          activeDot={{ r: 3 }}
        />

        <XAxis
          dataKey="day"
          stroke="white"
          tickLine={false}
          dy={1}
          tickFormatter={getDay}
        />

        <Tooltip
          content={(pointInfo) => {
            if (!pointInfo.active) return null;
            const pointData = userDurationSession.find((x) => x.day === pointInfo.label);

            return <div className="tool">{pointData.sessionLength} min</div>;
          }}
          cursor={{
            stroke: 'rgba(0, 0, 0, 0.1)',
            strokeWidth: 50,
            height: '1000px',
          }}
        />
      </LineChart>
    </div>
  );
};

export default DurationSessions;
