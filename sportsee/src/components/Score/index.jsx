import React, { useContext } from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import { UserContext } from '../../utils/ApiContext';



/** @function  for showing score to pie chat
 * 
 * @component
 * @returns( <Score/>)
 */

const Score = () => {

  const {userScore} = useContext(UserContext);
  

  return (
    <div className="score">
      <header className="score-header">
        <h1>Score</h1>
      </header>
      <div className="score-chart">
        <PieChart width={250} height={240}>
          <Pie
            data={[{ value: userScore }, { value: 1 - userScore }]}
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
          <div className="score-value">{userScore * 100}%</div>
          <div className="score-text">de votre objectif</div>
          
        </div>
      </div>
    </div>
  );
};


export default Score;
