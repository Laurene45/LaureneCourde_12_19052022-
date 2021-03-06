import React, { useState, useEffect } from 'react';
import { createContext } from 'react';
import PropTypes from 'prop-types';
import { API, userId } from '../Api';
import Error from '../pages/Error';

/** Defines methods to get user data
 *
 * @param UserContext create the context
 */

// create Context
export const UserContext = createContext({ userInfo: null });

export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setIsLoading] = useState(true);
  const [userActivity, setUserActivity] = useState(null);
  const [userDurationSession, setUserDurationSession] = useState(null);
  const [userPerformance, setUserPerformance] = useState(null);
  const [userScore, setUserScore] = useState(null);
  const [error, setError] = useState(null);

  // functions load users data + graphs
  const loadUserInfo = () => {
    return API.getUser(userId);
  };

  const loadActivity = () => {
    return API.getUserActivity(userId);
  };

  const loadDurationSession = () => {
    return API.getUserAverageSessions(userId);
  };

  const loadPerformance = () => {
    return API.getUserPerformance(userId);
  };

  const loadScore = () => {
    return API.getUser(userId);
  };

  // load data
  useEffect(() => {
    // Promesse renvoyant résultat. Utilisé pour traitement asynchrone
    Promise.all([
      loadUserInfo(),
      loadActivity(),
      loadDurationSession(),
      loadPerformance(),
      loadScore(),
    ])

      // show data 
      // renvoie 2 arguments : echec ou résolu
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
          score: userInfo.score,
          todayScore: userInfo.todayScore,
        });

        setUserActivity(userActivity.sessions);

        setUserDurationSession(userDurationSession.sessions);

        setUserPerformance(userPerformance.data);

        setUserScore(userScore.data || userInfo.score || userInfo.todayScore);
      })

      // renvoie une erreur que si la promesse est rejetée
      .catch((error) => {
        console.log(error);
        setError(error);
      })

      //exécute du code une fois que la promesse a été traitée, quel que soit le résultat. 
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (error && !loading) return <div>{<Error />}</div>;
  if (loading) return <div>Loading</div>;

  return (
    <UserContext.Provider
      value={{
        userInfo,
        userActivity,
        userDurationSession,
        userPerformance,
        userScore,
        error,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.object,
};
