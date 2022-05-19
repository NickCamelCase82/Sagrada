import React from 'react';
import classes from './Counter.module.css';
import img from '../../../img/roundtrack.png';
import Dice from '../Dice/Dice';

const Counter = () => {
  return (
    <>
      <div className={classes.containerRoundCounter}>
        <img src={img} alt="sagrada-img" className={classes.counterImg} />
        <div className={classes.roundCubes}>
          <Dice color={'blue'} number={'one'}/>
          <Dice color={'red'} number={'three'}/>
          <Dice color={'purple'} number={'four'}/>
          <Dice color={'green'} number={'six'}/>
          <Dice color={'yellow'} number={'five'}/>
        </div>
      </div>
      
    </>
  );
};

export default Counter;
