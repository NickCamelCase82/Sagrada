import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Dice from '../Dice/Dice';
import { setDroppedСubes, removeCubes } from '../../../store/actions/game';
import classes from './RollDiceBtn.module.css';
import uniqid from 'uniqid';
import { setRaisedCube } from '../../../store/actions/player';
import { removeDroppedСube } from '../../../store/actions/game';
import ActivePlayerCaption from '../Game/ActivePlayerCaption/ActivePlayerCaption';

export default function RollDiceBtn() {
  const raisedСube = useSelector((state) => state.player.raisedСube);
  // оставшиеся кубики - из состояния
  let remainСubes = useSelector((state) => state.game.cubes);

  const dispatch = useDispatch();
  let playersTurn = true; // если сейчас очередь игрока

  // оставшиеся цвета (массив всех цветов)
  let remainСolors = [];
  for (let j = 0; j < remainСubes.length; j += 1) {
    for (let i = 1; i <= remainСubes[j].count; i += 1) {
      remainСolors.push(remainСubes[j].color);
    }
  }
  // console.log('remainСolors', remainСolors);

  // вытаскиваем из оставшихся цветов рандомный (по одному)

  // кинутые кубики - из состояния
  let droppedСubes = useSelector((state) => state.game.droppedСubes);
  // console.log('droppedСubes', droppedСubes);

  const handleTakeСube = (cube) => {
    if (!playersTurn) {
      return false;
    }

    dispatch(setRaisedCube(cube));
    if (!raisedСube) {
      dispatch(removeDroppedСube(cube));
    }
  };

  if (!droppedСubes) return null;

  // если сейчас очередь игрока, если кинулись кубики, если передан цвет кубика:
  return (
    <>
      <div className={classes.diceBtnDiv}>
        <div className={classes.droppedСubes}>
          <ActivePlayerCaption />
          {droppedСubes.map((cube, index) => (
            <div
              className={classes.containerReserveCube}
              key={index}
              onClick={() =>
                handleTakeСube({
                  color: cube.color,
                  number: cube.number,
                })
              }
            >
              <Dice color={cube.color} number={cube.number} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
