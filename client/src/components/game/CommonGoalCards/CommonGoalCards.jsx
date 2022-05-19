import React from 'react';
import './CommonGoalCards.css';
import { CommonGoals } from '../../../constans/constans';
import { randomCommonGoals } from '../../../features/gameFeatures';
import Сarousel from '../../Сarousel/Сarousel';

const CommonGoalCards = () => {
  return (
    // <div className="container-common-goals">
    //   {randomCommonGoals(3, CommonGoals).map((card) => {
    //     return <CommonGoal card={card} key={card.id} />;
    //   })}
    // </div>
    <Сarousel arrayCommonGoals={randomCommonGoals(3, CommonGoals)} />
  );
};

export default CommonGoalCards;
