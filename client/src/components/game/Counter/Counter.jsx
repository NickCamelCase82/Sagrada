import React from 'react';
import classes from './Counter.module.css';
// import img from '../../../img/roundtrack.png';
import Dice from '../Dice/Dice';
import { useSelector } from 'react-redux';

const Counter = () => {
  // достаю раунд из состояния
  const rounds = useSelector((state) => state.game.rounds);

  const roundsTemplate = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // данные для счетчика в зависимости от раунда и уже имеющихся кубиков в прошлых раундах
  // let counterCells = []
  // for (let i = 0; i < 10; i+=1) {
  //   if (!round.cubes[i]) {
  //     counterCells[i] =  <div className={classes.dice} >
  //                       <span className={classes.dot}>{i + 1}</span>
  //                     </div>
  //   } else {
  //     counterCells[i] = <Dice color={round.cubes[i].color} number={round.cubes[i].number} key={i}/>
  //   }
  // }

  return (
    <>
      <div className={classes.containerRoundCounter}>
        {/* <img src={img} alt="sagrada-img" className={classes.counterImg} /> */}
      </div>
      <div className={classes.roundCubes}>
        {/* {counterCells} */}
        {roundsTemplate.map((round, index) => {
          const roundCube = rounds[index];
          return roundCube ? (
            <Dice
              color={roundCube.color}
              number={roundCube.number}
              key={index}
            />
          ) : (
            <div className={classes.dice}>
              <span className={classes.dot}>{round}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Counter;
