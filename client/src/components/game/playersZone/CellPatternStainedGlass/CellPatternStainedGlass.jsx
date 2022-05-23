import React from 'react';
import { Cells } from '../../../../constans/constans';
import './CellPatternStainedGlass.css';
import Dice from '../../Dice/Dice';
import { useDispatch, useSelector } from 'react-redux';
import { putCube } from '../../../../store/actions/common';

const CellPatternStainedGlass = ({ cell, row, orderCell, cube }) => {
  const raisedCube = useSelector((state) => state.player.raisedCube);
  const activePlayer = useSelector((state) => state.game.activePlayer);
  const dispatch = useDispatch();

  const handlePutCube = () => {
    if (!raisedCube) {
      return false;
    }

    dispatch(putCube(row, orderCell, raisedCube, activePlayer));
  };

  return (
    <div className="container-cell" onClick={handlePutCube}>
      {!cube ? (
        cell ? (
          <img src={Cells[cell]} alt={`${cell}`} />
        ) : (
          ''
        )
      ) : (
        <div className="dice-in-cell">
          <Dice color={cube.color} number={cube.number} size={30} />
        </div>
      )}
    </div>
  );
};

export default CellPatternStainedGlass;
