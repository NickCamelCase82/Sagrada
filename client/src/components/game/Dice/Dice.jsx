import React from 'react';
import classes from './Dice.module.css';

export default function Dice(props) {
  let color;

  switch (props.color) {
    case 'blue':
      color = 'rgb(71, 197, 255)';
      break;
    case 'purple':
      color = 'rgb(186, 65, 220)';
      break;
    case 'green':
      color = 'rgb(53, 148, 43)';
      break;
    case 'red':
      color = 'rgb(224, 9, 9)';
      break;
    case 'yellow':
      color = 'rgb(237, 237, 57)';
      break;
    default:
      color = 'black';
  }

  switch (props.number) {
    case 1:
      return (
        <>
          <div
            className={[classes.dice, classes.firstFace].join(' ')}
            style={{
              backgroundColor: color,
              width: `${props.size}px`,
              height: `${props.size}px`,
            }}
          >
            <span className={classes.dot}> </span>
          </div>
        </>
      );
    case 2:
      return (
        <>
          <div
            className={[classes.dice, classes.secondFace].join(' ')}
            style={{
              backgroundColor: color,
              width: `${props.size}px`,
              height: `${props.size}px`,
            }}
          >
            <span className={classes.dot}> </span>
            <span className={classes.dot}> </span>
          </div>
        </>
      );
    case 3:
      return (
        <>
          <div
            className={[classes.dice, classes.thirdFace].join(' ')}
            style={{
              backgroundColor: color,
              width: `${props.size}px`,
              height: `${props.size}px`,
            }}
          >
            <span className={classes.dot}></span>
            <span className={classes.dot}></span>
            <span className={classes.dot}></span>
          </div>
        </>
      );
    case 4:
      return (
        <>
          <div
            className={[classes.dice, classes.fourthFace].join(' ')}
            style={{
              backgroundColor: color,
              width: `${props.size}px`,
              height: `${props.size}px`,
            }}
          >
            <div className={classes.column}>
              <span className={classes.dot}></span>
              <span className={classes.dot}></span>
            </div>
            <div className={classes.column}>
              <span className={classes.dot}></span>
              <span className={classes.dot}></span>
            </div>
          </div>
        </>
      );
    case 5:
      return (
        <>
          <div
            className={[classes.dice, classes.fifthFace].join(' ')}
            style={{
              backgroundColor: color,
              width: `${props.size}px`,
              height: `${props.size}px`,
            }}
          >
            <div className={classes.column}>
              <span className={classes.dot}></span>
              <span className={classes.dot}></span>
            </div>
            <div className={classes.column}>
              <span className={classes.dot}></span>
            </div>
            <div className={classes.column}>
              <span className={classes.dot}></span>
              <span className={classes.dot}></span>
            </div>
          </div>
        </>
      );
    case 6:
      return (
        <>
          <div
            className={[classes.dice, classes.sixthFace].join(' ')}
            style={{
              backgroundColor: color,
              width: `${props.size}px`,
              height: `${props.size}px`,
            }}
          >
            <div className={classes.column}>
              <span className={classes.dot}></span>
              <span className={classes.dot}></span>
              <span className={classes.dot}></span>
            </div>
            <div className={classes.column}>
              <span className={classes.dot}></span>
              <span className={classes.dot}></span>
              <span className={classes.dot}></span>
            </div>
          </div>
        </>
      );
    default:
      return (
        <>
          <p>Неверные параметры кубика</p>
        </>
      );
  }
}
