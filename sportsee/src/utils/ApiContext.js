import React, { useState } from 'react';
import { createContext } from 'react';
import PropTypes from 'prop-types';

/**
 * Defines methods to get datas and share into differents components
 *
 * @param dataContext create the context
 */

export const dataContext = createContext();

const ApiContext = ({ children }) => {
  /**
   * data used to feed components.
   * @param data categories
   * @return arrays - arrays to feed components in the context
   */
  
  const [userInfo, setUserInfo] = useState();
  const [activity, setActivity] = useState();
  const [averageSessions, setAverageSessions] = useState();
  const [performance, setPerformance] = useState();

  return (
    <div>
      <dataContext.Provider value={{ userInfo, setUserInfo, activity, setActivity, averageSessions, setAverageSessions, performance, setPerformance }}>
        {children}
      </dataContext.Provider>
    </div>
  );
};

ApiContext.propTypes = {
  children: PropTypes.object,
};

export default ApiContext;
