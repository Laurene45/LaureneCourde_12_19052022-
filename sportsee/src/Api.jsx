import axios from 'axios';
//import mockData from './data/mockData';

axios.defaults.baseURL = 'http://localhost:3000';

const getData = (url) => axios.get(url).then((response) => response.data.data);

// MockData :
/*const getData = (url) => { 
  const splitUrl = url.split('/');
  return new Promise(resolve => {

    switch(splitUrl[splitUrl.length - 1])
  {
    case 'performance': resolve (mockData.performance);

    case 'activity': resolve (mockData.activity);

    case 'average-sessions' : resolve (mockData.average);

    default : resolve (mockData.user);
  }

  });
  
 };*/


// userID
export const userId = 12;


export const API = {
  /**@function get user info from api
   *
   * @param {number} userId
   * @returns {Object} (user info)
   */

  getUser: (userId) => {
    const url = `/user/${userId}`;
    return getData(url);
  },

  /**@function get user performance
   *
   * @param {number} userId
   * @returns {object} (user performance)
   */

  getUserPerformance: (userId) => {
    const url = `user/${userId}/performance`;
    return getData(url);
  },

  /**@function get user activity
   *
   * @param {number} userId
   * @returns {object}( user activity)
   */

  getUserActivity: (userId) => {
    const url = `user/${userId}/activity`;
    return getData(url);
  },

  /**@function get user average sessions
   *
   * @param {number} userId
   * @returns {object}( user average sessions)
   */

  getUserAverageSessions: (userId) => {
    const url = `user/${userId}/average-sessions`;
    return getData(url);
  },
};
