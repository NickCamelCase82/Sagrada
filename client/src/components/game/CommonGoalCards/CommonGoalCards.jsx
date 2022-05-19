import React from 'react';
import './CommonGoalCards.css';
import { CommonGoals } from '../../../constans/constans';
import { randomCommonGoals } from '../../../features/gameFeatures';

import colorDiagonals from '../../../img/common-goals/ColorDiagonals.jpg';
import colorVariety from '../../../img/common-goals/ColorVariety.jpg';
import columnColorVariety from '../../../img/common-goals/ColumnColorVariety.jpg';
import Сarousel from '../../Сarousel/Сarousel';

const CommonGoalCards = () => {
  console.log(randomCommonGoals(3, CommonGoals));
  return (
    // <div className="container-common-goals">
    //   {randomCommonGoals().map((card) => {
    //     return <CommonGoal card={card} key={card.id} />;
    //   })}
    // </div>
    <Сarousel arrayCommonGoals={randomCommonGoals(3, CommonGoals)} />
  );
};

export default CommonGoalCards;
