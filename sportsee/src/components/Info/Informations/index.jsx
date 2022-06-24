import React from 'react';
import PropTypes from 'prop-types';

/** @function informations
 *
 * @component
 * @param {element} icon svg
 * @param {number} value
 * @param {string} title
 * @param {string} unit
 * @returns (<Informations/>)
 */

const Informations = ({ value, title, icon, unit }) => {
  return (
    <div className="information">
      <div className="svg">{icon}</div>
      <div>
        <span className="info-value">
          {' '}
          {value} {unit}
        </span>
        <span className="info-title"> {title}</span>
      </div>
    </div>
  );
};

Informations.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired,
};

export default Informations;
