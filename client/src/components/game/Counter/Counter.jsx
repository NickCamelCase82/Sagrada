import React from 'react'
import classes from './Counter.module.css';
import img from '../../../img/roundtrack.png';

export default function Counter() {
  return (
    <>
      <img src={img} alt="sagrada-img" className={classes.counterImg} />
    </>
  )
}
