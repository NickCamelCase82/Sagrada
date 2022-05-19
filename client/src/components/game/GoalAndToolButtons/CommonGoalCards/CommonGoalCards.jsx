import React from 'react';
import './CommonGoalCards.css';
import Сarousel from '../../../Сarousel/Сarousel';
import { useSelector } from 'react-redux';

const CommonGoalCards = () => {
  const stateCommonGoals = useSelector((state) => state.game.commonGoals);

  console.log(stateCommonGoals);

  return (
    // <div className="container-common-goals">
    //   {goals.map((card) => {
    //     return <CommonGoal card={card} key={card.id} />;
    //   })}
    // </div>
    <Сarousel arrayCommonGoals={stateCommonGoals} />
  );
};

export default CommonGoalCards;
