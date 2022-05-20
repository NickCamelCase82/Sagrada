import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Dice from '../Dice/Dice'
import { setDroppedСubes } from '../../../store/actions/game'
import classes from './RollDiceBtn.module.css';

export default function RollDiceBtn() {
  let playersNumber = 2
  let playersTurn = true // если сейчас очередь игрока

  // Returns a random integer from 1 to 6:
  const randomSix = () => Math.floor(Math.random() * 6) + 1;
  const setCubeNum = (cubeNum) => {
    switch(cubeNum) {
      case 1:
        return 'one'
      case 2:
        return 'two'
      case 3:
        return 'three'
      case 4:
        return 'four'
      case 5:
        return 'five'
      case 6:
        return 'six'
      default:
        return ''
    }
  }
  const randomFive = () => Math.floor(Math.random() * 5) + 1;
  const setCubeColor = (colorNum) => {
    switch(colorNum) {
      case 1:
        return 'blue'
      case 2:
        return 'purple'
      case 3:
        return 'green'
      case 4:
        return 'red'
      case 5:
        return 'yellow'
      default:
        return ''
    }
  }

  const dispatch = useDispatch()
  let droppedСubes = useSelector(state => state.game.droppedСubes)
  // console.log('droppedСubes', droppedСubes);
  

  const rollDice = (playersNumber) => {
    let cubes = []
    switch(playersNumber) {
      case 2:
        for (let i = 0; i < 5; i+= 1){
          let cubeNum = setCubeNum(randomSix())
          let cubeCol = setCubeColor(randomFive())
          cubes.push({color: cubeCol, number: cubeNum})
        }
        break;
      case 3:
        for (let i = 0; i < 7; i+= 1){
          let cubeNum = setCubeNum(randomSix())
          let cubeCol = setCubeColor(randomFive())
          cubes.push({color: cubeCol, number: cubeNum})
        }
        break;
      case 4:
        for (let i = 0; i < 9; i+= 1){
          let cubeNum = setCubeNum(randomSix())
          let cubeCol = setCubeColor(randomFive())
          cubes.push({color: cubeCol, number: cubeNum})
        }
        break;
      default:
        cubes = []
    }
    // console.log('brosili', cubes);
   
    dispatch(setDroppedСubes(cubes))
    return cubes
  }
 

  return (
    <>
      {playersTurn
      ? <div className={classes.diceBtnDiv}><button onClick={() => rollDice(playersNumber)} className={classes.diceBtn}>Бросить кубики</button>
        <div className={classes.droppedСubes}>
          {droppedСubes
          ? droppedСubes.map((cube, index) => 
              <Dice color={cube.color} number={cube.number} key={index}/>
            )
          : <></>}
        </div>
        </div>
      : <></>
      }
      
    </>
  )
}
