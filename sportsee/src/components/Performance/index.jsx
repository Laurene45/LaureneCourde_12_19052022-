import React, { useContext } from 'react';
import { UserContext } from '../../utils/ApiContext';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts';

const kind = {
  1: 'Intensité',
  2: 'Vitesse',
  3: 'Force',
  4: 'Endurance',
  5: 'Energie',
  6: 'Cardio',
};

/** @function for get kind
 *
 * @param {number} indexKind
 * @returns (index of kind)
 */

const getKind = (indexKind) => {
  return kind[indexKind];
};

/** @function for showing activity types as radar chart
 *
 * @component
 * @param {number} userId
 * @returns (<Performance/>)
 */

const Performance = () => {
  const { userPerformance } = useContext(UserContext);

  return (
    <div className="radarChart">
      <RadarChart
        className="radar-chart"
        cx={125}
        cy={125}
        outerRadius="80%"
        width={250}
        height={220}
        data={userPerformance}
        stroke="#FFFFFF"
      >
        <PolarGrid radialLines={false} d={0} />

        <PolarAngleAxis
          stroke="white"
          dataKey="kind"
          domain={[0, 150]}
          axisLine={false}
          tickLine={false}
          tickFormatter={getKind}
        />

        <Radar dataKey="value" stroke="none" fill="red" fillOpacity={0.6} />
      </RadarChart>
    </div>
  );
};

export default Performance;
