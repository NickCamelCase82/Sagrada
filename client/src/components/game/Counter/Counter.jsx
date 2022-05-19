import React from 'react';
import classes from './Counter.module.css';
import img from '../../../img/roundtrack.png';

const Counter = () => {
  return (
    <>
      <div className={classes.containerRoundCounter}>
        <img src={img} alt="sagrada-img" className={classes.counterImg} />
      </div>
    </>
  );
};

export default Counter;
