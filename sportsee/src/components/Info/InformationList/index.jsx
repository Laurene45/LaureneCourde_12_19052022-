import React from 'react';
import Informations from '../../Info/Informations';
import { ReactComponent as Calorie } from '../../../assets/icons/calorie.svg';
import { ReactComponent as Protein } from '../../../assets/icons/protein.svg';
import { ReactComponent as Lipide } from '../../../assets/icons/lipide.svg';
import { ReactComponent as Glucide } from '../../../assets/icons/glucide.svg';
import PropTypes from 'prop-types';


//affiche toutes les étiquettes calories/protéines/glucides/lipides
const InformationList = ({calorie, protein, lipid, glucoside,}) => {

  const cal = new Intl.NumberFormat('en-US',{style: 'decimal'}).format(calorie);

  return (
    <>
      <Informations
        icon={<Calorie />}
        title="Calories"
        value= {cal}
        unit="kCal"
      />
      <Informations
        icon={<Protein />}
        title="Proteins"
        value={`${protein}`}
        unit="g"
      />
      <Informations
        icon={<Glucide />}
        title="Glucide"
        value={`${glucoside}`}
        unit="g"
      />
      <Informations
        icon={<Lipide />}
        title="Lipides"
        value={`${lipid}`}
        unit="g"
      />
    </>
  );
};

InformationList.propTypes = {
  calorie: PropTypes.number,
  lipid: PropTypes.number,
  protein: PropTypes.number,
  glucoside: PropTypes.number,
  
};

export default InformationList;
