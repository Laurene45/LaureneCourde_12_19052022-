
import Activity from '../../components/Activity/';
import InformationList from '../../components/Info/InformationList';
import DurationSessions from '../../components/DurationSessions';
import Performance from '../../components/Performance';
import Score from '../../components/Score';
import React, { useContext,} from 'react';
import { UserContext } from '../../utils/ApiContext';
import PropTypes from 'prop-types';

/** @function for showing  dashboard  to page
 * 
 * @component
 * @param UserContext
 * @param {number} userId
 * @returns (<Dashboard/>)
 */


const Dashboard = () => {
  
  const {userInfo} = useContext(UserContext); 
  
  return (
    <section className="main-container">
      <div className="profile">
        <h1>
          Bonjour <span>{userInfo?.name}</span>
        </h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </div>

      <div className="container">
        <article className="container-chart">
          <Activity userId={userInfo?.userId} />
          <div className="cards-info">
            <DurationSessions userId={userInfo?.userId} />
            <Performance userId={parseInt(userInfo?.userId)} />
            <Score userId={userInfo?.userId} />
          </div>
        </article>

        <article className="container-information">
          <InformationList
            calorie={userInfo?.calorie}
            protein={userInfo?.protein}
            glucoside={userInfo?.glucoside}
            lipid={userInfo?.lipid}
          />
        </article>
      </div>
    </section>
    
  );
};

Dashboard.propTypes = {
  userId: PropTypes.number,
};

export default Dashboard;