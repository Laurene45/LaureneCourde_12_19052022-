import React, { useState, useEffect } from 'react';
import { createContext } from 'react';
import PropTypes from 'prop-types';
import { API, userId } from '../Api';
import Error from '../pages/Error';

/**
 * Defines methods to get user data
 *
 * @param UserContext create the context
 */

// create Context
export const UserContext = createContext({userInfo : null});

export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setIsLoading] = useState(true);
  const [userActivity, setUserActivity] = useState(null);
  const [userDurationSession, setUserDurationSession] = useState(null);
  const [userPerformance, setUserPerformance] = useState (null);
  const [userScore, setUserScore] = useState (null);
  const [error, setError] = useState (null);


  // @ functions au chargement des données users  + graphiques
  const loadUserInfo = () => {
    // 1er construction
    /*API.getUser(userId).then((res) => {
      setUserInfo({
        userId: res.id,
        name: res.userInfos.firstName,
        calorie: res.keyData.calorieCount,
        protein: res.keyData.proteinCount,
        glucoside: res.keyData.carbohydrateCount,
        lipid: res.keyData.lipidCount,
      });

    });*/

    return API.getUser(userId);
  };

  const loadActivity = () =>  {
    //1ere construction 
    /*API.getUserActivity(userId).then((response) => {
      setUserActivity(response.sessions);
    });*/

    return API.getUserActivity(userId);
  };

  const loadDurationSession = () => {
    //1er construction
    /*API.getUserAverageSessions(userId).then((response) => {
      setData(response.sessions);
    });*/

    return API.getUserAverageSessions(userId);
  };
  
  const loadPerformance = () => {
    //1er construction
    /*API.getUserPerformance(userId).then((response) => {
          setData(response.data);
        })*/

    return API.getUserPerformance(userId);
  };

  const loadScore = () => {
    //1er construction 
    /*API.getUser(userId).then((res) => {
        setData(res.score || res.todayScore);
      });*/

    return API.getUser(userId);
  };

  // Charge les données
  useEffect(() => {
    Promise.all ([
      loadUserInfo(),
      loadActivity(),
      loadDurationSession(),
      loadPerformance(),
      loadScore(),

    ])

    // Affiche les données
    .then((data) => {
      const userInfo = data[0]; 
      const userActivity = data[1];
      const userDurationSession = data[2];
      const userPerformance = data[3];
      const userScore = data[4];
    
    
      setUserInfo({
        userId: userInfo.id,
        name: userInfo.userInfos.firstName,
        calorie: userInfo.keyData.calorieCount,
        protein: userInfo.keyData.proteinCount,
        glucoside: userInfo.keyData.carbohydrateCount,
        lipid: userInfo.keyData.lipidCount,
        score : userInfo.score,
        todayScore : userInfo.todayScore,
      
      });

      setUserActivity(userActivity.sessions);

      setUserDurationSession(userDurationSession.sessions);

      setUserPerformance(userPerformance.data);

      setUserScore(userScore.data || userInfo.score || userInfo.todayScore );
 
      })

    .catch ((error) => {
        console.log(error);
        setError(error);
      })
  
    .finally(() => {
      setIsLoading(false);
    });

  }, []);

  if (!userInfo && !loading) return <div>{<Error />}</div>;
  if (!userInfo && loading) return <div>Loading</div>;


  return (
    <UserContext.Provider value={{ userInfo, userActivity, userDurationSession, userPerformance, userScore, error }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.object,
};
