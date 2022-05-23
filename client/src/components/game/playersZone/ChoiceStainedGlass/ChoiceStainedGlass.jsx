import React, { useEffect } from 'react';
import StainedGlassflip from '../StainedGlassflip/StainedGlassflip';
import './ChoiceStainedGlass.css';
import { StainedGlass } from '../../../../constans/constans';
import { useDispatch, useSelector } from 'react-redux';
import { setstainedGlassForChoiceThunk } from '../../../../store/actions/player';

const ChoiceStainedGlass = () => {
  const dispatch = useDispatch();
  const stainedGlassChoice = useSelector(
    (state) => state.player.stainedGlassChoice
  );
  // console.log('lalal ', stainedGlassWindows);

  // useEffect(() => {
  // dispatch(setstainedGlassForChoiceThunk(1, StainedGlass));
  // }, []);

  if (!stainedGlassChoice?.length) {
    return null;
  }

  const patterns = StainedGlass.filter(({ id }) =>
    stainedGlassChoice.includes(id)
  );

  return (
    <div className="container-choice-stained-glass">
      <div>
        <StainedGlassflip stainedGlass={patterns[0]} />
      </div>
      <div>
        <StainedGlassflip stainedGlass={patterns[1]} />
      </div>
    </div>
  );
};

export default ChoiceStainedGlass;
