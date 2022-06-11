import React, { useEffect, useState } from 'react';

import Activity from '../../components/Activity/';
import InformationList from '../../components/Info/InformationList';
import DurationSessions from '../../components/DurationSessions';
import Performance from '../../components/Performance';
import Score from '../../components/Score';

import { useNavigate } from 'react-router';
import { API, userId } from '../../Api';

const Dashboard = () => {
  //const params = useParams();
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    API.getUser(userId)
      .then((res) => {
        setUserInfo({
          userId: res.id,
          name: res.userInfos.firstName,
          calorie: res.keyData.calorieCount,
          protein: res.keyData.proteinCount,
          glucoside: res.keyData.carbohydrateCount,
          lipid: res.keyData.lipidCount,
        });
      })
      .catch(() => {
        navigate('/error');
      });
  }, []);

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

export default Dashboard;
