import React from 'react';
import { Cells } from '../../../../constans/constans';
import './CellPatternStainedGlass.css';
import Dice from '../../Dice/Dice';
import { useDispatch, useSelector } from 'react-redux';
import { putCube } from '../../../../store/actions/common';
import { CubeColors, CubeNumbers } from '../../../../constans/constans'

const CellPatternStainedGlass = ({ cell, row, orderCell, cube }) => {
  const raisedCube = useSelector((state) => state.player.raisedCube);
  const activePlayer = useSelector((state) => state.game.activePlayer);
  const pattern = useSelector((state) => state.player.stainedGlass.pattern);
  const spacedСubes = useSelector((state) => state.player.spacedСubes);
  // console.log('spacedСubes', spacedСubes);
  // console.log('pattern', pattern);
  const dispatch = useDispatch();
  // const allColors = Object.values(CubeColors) // все цвета в игре
  // const allNumbers = Object.values(CubeNumbers) // все номера кубика в игре

  // проверка пустое ли поле
  const ifEmptyPattern = () => {
    const ifEmptyArr = spacedСubes.map(el => !(el.find(item => !item === false)))
    const ifEmpty = !ifEmptyArr.includes(false)
    // const ifEmpty = !(spacedСubes[0].find(item => !item === false))
    // console.log('ifEmptyPattern', ifEmpty)
    return ifEmpty
  };

  // проверка на номер/цвет ячейки на поле
  const ifColorAndNumMatch = () => {
    if ((pattern[row][orderCell] === raisedCube.number) || (pattern[row][orderCell] === raisedCube.color) || (pattern[row][orderCell] === null)) {
      return true
    }
    return false
  }

  // проверка на номер/цвет соседних ячеек на поле (по вертикали и по горизонтали)
  const ifNeighborCellMatch = () => {
    
    // if (row > 0) {
    //   if ((pattern[row - 1][orderCell] === raisedCube.number) || (pattern[row - 1][orderCell] === raisedCube.color)) {
    //     return false
    //   }
    // }
    // if (row < 4) {
    //   if ((pattern[row + 1][orderCell] === raisedCube.number) || (pattern[row + 1][orderCell] === raisedCube.color)) {
    //     return false
    //   }
    // }

    // if (
    //   (pattern[row - 1][orderCell] === raisedCube.number) || (pattern[row - 1][orderCell] === raisedCube.color) ||
    //   (pattern[row + 1][orderCell] === raisedCube.number) || (pattern[row + 1][orderCell] === raisedCube.color) ||
    //   (pattern[row][orderCell - 1] === raisedCube.number) || (pattern[row][orderCell - 1] === raisedCube.color) ||
    //   (pattern[row][orderCell + 1] === raisedCube.number) || (pattern[row][orderCell + 1] === raisedCube.color)
    // ) {
    //   // console.log('row-1', (pattern[row - 1][orderCell] === raisedCube.number));
    //   return false
    // }

    return true
  }

  const ifAvailable = (row, orderCell) => {
    
    let availableCells
    if (ifEmptyPattern()) {
      availableCells = [
        [true, true, true, true, true],
        [true, false, false, false, true],
        [true, false, false, false, true],
        [true, true, true, true, true],
      ]
      if (availableCells[row][orderCell] && ifColorAndNumMatch()) {
        return true
      } else {
        // console.log('ifColorAndNumMatch false', availableCells[row][orderCell])
        return false
      }
    } else {
      if (ifColorAndNumMatch() && ifNeighborCellMatch()) {
        return true
      } else {
        // console.log('ifColorAndNumMatch/ifNeighborCellMatch false')
        return false
      }
    }
    
  };

  const handlePutCube = () => {
    if (!raisedCube) {
      return false;
    }
    if (ifAvailable(row, orderCell)) {
      dispatch(putCube(row, orderCell, raisedCube, activePlayer));
    } else {
      const errDiv = 'Ячейка недопступна' // добавить в состояние и потом из него выводить ошибку
    }
    
  };

  return (
    <div className="container-cell" onClick={handlePutCube}>
      {!cube ? (
        cell ? (
          <img src={Cells[cell]} alt={`${cell}`} />
        ) : (
          ''
        )
      ) : (
        <div className="dice-in-cell">
          <Dice color={cube.color} number={cube.number} size={30} />
        </div>
      )}
    </div>
  );
};

export default CellPatternStainedGlass;
