import React from 'react';
import classes from './Counter.module.css';
// import img from '../../../img/roundtrack.png';
import Dice from '../Dice/Dice';

const Counter = () => {
  // round будет в пропсе скорее всего
  let round = {
    number: 1,
    cubes: [
      {color: 'blue', number: 'one'},
      {color: 'red', number: 'three'},
      {color: 'purple', number: 'four'},
      {color: 'green', number: 'six'},
      {color: 'yellow', number: 'five'},
    ],
  }

  let htmlText = []
  for (let i = 0; i < 10; i+=1) {
    if (!round.cubes[i]) {
      htmlText[i] =  <div className={classes.dice} >
                                    <span className={classes.dot}>{i + 1}</span>
                                  </div>
    } else {
      htmlText[i] = <Dice color={round.cubes[i].color} number={round.cubes[i].number} key={i}/>
    }
  }
  

  return (
    <>
      <div className={classes.containerRoundCounter}>
        {/* <img src={img} alt="sagrada-img" className={classes.counterImg} /> */}
        <div className={classes.roundCubes}>
          {htmlText}
          
        </div>
      </div>
      
    </>
  );
};

export default Counter;
