import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import PropTypes from 'prop-types';
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts';
import { API } from '../../Api';

const kind = {
  1: 'Intensité',
  2: 'Vitesse',
  3: 'Force',
  4: 'Endurance',
  5: 'Energie',
  6: 'Cardio',
};

/*@function for get kind
 *
 * @param {number} indexKind
 * @returns (index of kind)
 */

const getKind = (indexKind) => {
  return kind[indexKind];
};

/*@function for  showing activity types as radar chart
 * @component
 * @param {number} userId
 * @returns (<Performance/>)
 */

const Performance = ({ userId }) => {
  const navigate = useNavigate();
  const [data, setData] = useState();
  useEffect(() => {
    if (userId) {
      API.getUserPerformance(userId)
        .then((response) => {
          setData(response.data);
        })
        .catch(() => {
          navigate('/error');
        });
    }
  }, [userId]);

  if (!data) return <div>loading</div>;

  return (
    <div className="radarChart">
      <RadarChart
        className="radar-chart"
        cx={125}
        cy={125}
        outerRadius="80%"
        width={250}
        height={220}
        data={data}
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

Performance.propTypes = {
  userId: PropTypes.number,
};
export default Performance;
