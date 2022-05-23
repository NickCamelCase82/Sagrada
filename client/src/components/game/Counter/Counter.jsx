import React from 'react';
import classes from './Counter.module.css';
// import img from '../../../img/roundtrack.png';
import Dice from '../Dice/Dice';
import { useSelector } from 'react-redux';

const Counter = () => {
  // достаю раунд из состояния
  const round = useSelector(state => state.game.round)

  // данные для счетчика в зависимости от раунда и уже имеющихся кубиков в прошлых раундах
  let counterCells = []
  for (let i = 0; i < 10; i+=1) {
    if (!round.cubes[i]) {
      counterCells[i] =  <div className={classes.dice} >
                        <span className={classes.dot}>{i + 1}</span>
                      </div>
    } else {
      counterCells[i] = <Dice color={round.cubes[i].color} number={round.cubes[i].number} key={i}/>
    }
  }
  

  return (
    <>
      <div className={classes.containerRoundCounter}>
        {/* <img src={img} alt="sagrada-img" className={classes.counterImg} /> */}
        
      </div>
      <div className={classes.roundCubes}>
        {counterCells}
      </div>
      
    </>
  );
};

export default Counter;
