import React, { useEffect, useState } from 'react';
import StainedGlassflip from '../StainedGlassflip/StainedGlassflip';
import './ChoiceStainedGlass.css';
import { StainedGlass } from '../../../../constans/constans';
import { useDispatch, useSelector } from 'react-redux';
import {
  setStainedGlass,
  setstainedGlassForChoiceThunk,
} from '../../../../store/actions/player';
import axios from 'axios';
import socket from '../../../../features/socket';

const ChoiceStainedGlass = () => {
  const dispatch = useDispatch();
  const lobby = useSelector((state) => state.lobby);
  const user = useSelector((state) => state.user);
  let [patternSelection, setPatternSelection] = useState(true);
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

  const handleTakeStainedGlass = async (id) => {
    // let objStainedGlass = side ? stainedGlass.pattern1 : stainedGlass.pattern2;
    // objStainedGlass = {
    //   ...objStainedGlass,
    //   id: `${stainedGlass.id}${objStainedGlass.id}`,
    // };
    // console.log('this ', objStainedGlass);

    const response = await axios.post(
      'http://localhost:3001/game/pattern/select',
      {
        gameId: lobby.id,
        playerId: user.id,
        patternId: id,
      },
      { withCredentials: true }
    );

    if (response.status === 200) {
      setPatternSelection(false);
      dispatch(setStainedGlass(id));
    }

    // dispatch(setStainedGlass(objStainedGlass));
    // dispatch(addStainedGlass(objStainedGlass));
  };

  return (
    <div className="container-choice-stained-glass">
      {patternSelection ? (
        <>
          <div>
            <StainedGlassflip
              onSelect={handleTakeStainedGlass}
              stainedGlass={patterns[0]}
            />
          </div>
          <div>
            <StainedGlassflip
              onSelect={handleTakeStainedGlass}
              stainedGlass={patterns[1]}
            />
          </div>
        </>
      ) : (
        'Идет выбор витражей'
      )}
    </div>
  );
};

export default ChoiceStainedGlass;
