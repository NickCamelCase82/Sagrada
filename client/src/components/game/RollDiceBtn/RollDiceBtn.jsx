import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Dice from '../Dice/Dice'
import { setDroppedСubes, removeCubes } from '../../../store/actions/game'
import classes from './RollDiceBtn.module.css';

export default function RollDiceBtn() {
  let playersNumber = 4
  let playersTurn = true // если сейчас очередь игрока

  // устанавливаем рандомное число от 1 до 6 на кубике:
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

  // оставшиеся кубики - из состояния
  const dispatch = useDispatch()
  let remainСubes = useSelector(state => state.game.cubes)
  // console.log('remainСubes', remainСubes);

  // оставшиеся цвета (массив всех цветов)
  let remainСolors = []
  for (let j = 0; j < remainСubes.length; j +=1) {
    for (let i = 1; i <= remainСubes[j].count; i +=1) {
      remainСolors.push(remainСubes[j].color);
    }
  }
  // console.log('remainСolors', remainСolors);

  // вытаскиваем из оставшихся цветов рандомный (по одному)
  const setCubeColor = () => {
    const randomColorNum = Math.floor(Math.random() * remainСolors.length) + 1
    const randomColor = remainСolors[randomColorNum - 1]
    remainСolors.splice(randomColorNum - 1, 1)
    // console.log('remainСolors2',remainСolors);
    return randomColor
  }
  
  // кинутые кубики - из состояния
  let droppedСubes = useSelector(state => state.game.droppedСubes)
  // console.log('droppedСubes', droppedСubes);
  

  const rollDice = (playersNumber) => {
    // создаем массив "рандомных" кубиков из оставшихся
    let cubes = []
    switch(playersNumber) {
      case 2:
        for (let i = 0; i < 5; i+= 1){
          let cubeNum = setCubeNum(randomSix())
          let cubeCol = setCubeColor()
          cubes.push({color: cubeCol, number: cubeNum})
        }
        break;
      case 3:
        for (let i = 0; i < 7; i+= 1){
          let cubeNum = setCubeNum(randomSix())
          let cubeCol = setCubeColor()
          cubes.push({color: cubeCol, number: cubeNum})
        }
        break;
      case 4:
        for (let i = 0; i < 9; i+= 1){
          let cubeNum = setCubeNum(randomSix())
          let cubeCol = setCubeColor()
          cubes.push({color: cubeCol, number: cubeNum})
        }
        break;
      default:
        cubes = []
    }
    // console.log('brosili', cubes);
   
    // записываем этот массив в состояние
    dispatch(setDroppedСubes(cubes));

    // удаяем из оставшихся кубиков полученные кубики
    const colorsToRemove = cubes.map((cube) => cube.color)
    dispatch(removeCubes(colorsToRemove));
    // console.log('colorsToRemove---------------',colorsToRemove);

    return cubes
  }
 

  // если сейчас очередь игрока, если кинулись кубики, если передан цвет кубика:
  return (
    <>
      {playersTurn
      ? <div className={classes.diceBtnDiv}><button onClick={() => rollDice(playersNumber)} className={classes.diceBtn}>Бросить кубики</button>
        <div className={classes.droppedСubes}>
          {droppedСubes
          ? droppedСubes.map((cube, index) => 
            cube.color
            ? <Dice color={cube.color} number={cube.number} key={index}/>
            : <></>
            )
          : <></>}
        </div>
        </div>
      : <></>
      }
      
    </>
  )
}
