import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import { API } from '../../Api';
import PropTypes from 'prop-types';



/** @function  for showing score to pie chat
 * 
 * @component
 * @param {number } userId
 * @returns( <Score/>)
 */

const Score = ({userId}) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    if (userId)
      API.getUser(userId).then((res) => {
        setData(res.score || res.todayScore);
      });
  }, [userId]);

  return (
    <div className="score">
      <header className="score-header">
        <h1>Score</h1>
      </header>
      <div className="score-chart">
        <PieChart width={250} height={240}>
          <Pie
            data={[{ value: data }, { value: 1 - data }]}
            dataKey="value"
            innerRadius={70}
            outerRadius={80}
            startAngle={90}
            endAngle={450}
            fill="transparent"
            stroke="transparent"
          >
            <Cell fill="#FF0000" />
            <Cell fill="white" />
          </Pie>
        </PieChart>
        <div className="score-info">
          <div className="score-value">{data * 100}%</div>
          <div className="score-text">de votre objectif</div>
          
        </div>
      </div>
    </div>
  );
};

Score.propTypes = {
  userId: PropTypes.number,
};

export default Score;
