import React, { useEffect } from 'react';
import './CommonGoalCards.css';
import { CommonGoals } from '../../../constans/constans';
import { randomCommonGoals } from '../../../features/gameFeatures';
import Сarousel from '../../Сarousel/Сarousel';
import { useDispatch, useSelector } from 'react-redux';
import { setCommonGoals } from '../../../store/actions/game';

const CommonGoalCards = () => {
  const dispatch = useDispatch();
  const stateCommonGoals = useSelector((state) => state.game.commonGoals);

  // console.log(goals);
  useEffect(() => {
    console.log('1');
    if (stateCommonGoals.length === 0) {
      console.log('2');
      console.log('asdsadd');
      const goals = randomCommonGoals(3, CommonGoals);
      dispatch(setCommonGoals(goals));
    }
  }, []);

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
