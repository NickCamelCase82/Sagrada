import React from 'react';
import { Cells } from '../../../../constans/constans';
import './CellPatternStainedGlass.css';
import Dice from '../../Dice/Dice';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
// import { putCube } from '../../../../store/actions/common';

const CellPatternStainedGlass = ({ cell, row, orderCell, cube }) => {
  const raisedCube = useSelector((state) => state.player.raisedCube);
  const activePlayer = useSelector((state) => state.game.activePlayer);

  const lobby = useSelector((state) => state.lobby);

  // const handlePutCube = () => {
  //   if (!raisedCube) {
  //     return false;
  //   }
  //   if (ifAvailable(row, orderCell)) {
  //     dispatch(putCube(row, orderCell, raisedCube, activePlayer));
  //   } else {
  //     const errText = 'Ячейка недоступна'; // добавить в состояние и потом из него выводить ошибку
  //     console.log(errText);
  //   }
  // };

  // const handlePutCube = async () => {
  //   if (!raisedCube) {
  //     return false;
  //   }

  //   console.log('click');

  //   await axios.post(
  //     'http://localhost:3001/game/cube/stained_glass',
  //     {
  //       gameId: lobby.id,
  //       cell: [row, orderCell],
  //       cube: raisedCube,
  //     },
  //     {
  //       withCredentials: true,
  //     }
  //   );
  // };
  // dispatch(putCube(row, orderCell, raisedCube, activePlayer));

  const handlePutCube = async () => {
    if (!raisedCube) {
      return false;
    }

    console.log('click');

    // if (ifAvailable(row, orderCell)) {
    await axios.post(
      'http://localhost:3001/game/cube/stained_glass',
      {
        gameId: lobby.id,
        cell: [row, orderCell],
        cube: raisedCube,
      },
      {
        withCredentials: true,
      }
    );
    // } else {
    //   const errText = 'Ячейка недоступна'; // добавить в состояние и потом из него выводить ошибку
    //   console.log(errText);
    // }
  };

  const pattern = useSelector((state) => state.player.stainedGlass.pattern);
  const spacedСubes = useSelector((state) => state.player.spacedСubes);
  const dispatch = useDispatch();

  // проверка пустое ли поле
  const ifEmptyPattern = () => {
    const ifEmptyArr = spacedСubes.map(
      (el) => !el.find((item) => !item === false)
    );
    const ifEmpty = !ifEmptyArr.includes(false);
    return ifEmpty;
  };

  // проверка на номер/цвет ячейки на поле
  const ifColorAndNumMatch = () => {
    if (
      pattern[row][orderCell] === raisedCube.number ||
      pattern[row][orderCell] === raisedCube.color ||
      pattern[row][orderCell] === null
    ) {
      return true;
    }
    return false;
  };

  // проверка есть ли соседняя ячейка
  const ifNeighborCellExist = () => {
    if (row === 0) {
      if (
        spacedСubes[row][orderCell - 1] ||
        spacedСubes[row][orderCell + 1] ||
        spacedСubes[row + 1][orderCell - 1] ||
        spacedСubes[row + 1][orderCell] ||
        spacedСubes[row + 1][orderCell + 1]
      ) {
        return true;
      } else {
        return false;
      }
    }
    if (
      spacedСubes[row - 1][orderCell - 1] ||
      spacedСubes[row - 1][orderCell] ||
      spacedСubes[row - 1][orderCell + 1] ||
      spacedСubes[row][orderCell - 1] ||
      spacedСubes[row][orderCell + 1] ||
      spacedСubes[row + 1][orderCell - 1] ||
      spacedСubes[row + 1][orderCell] ||
      spacedСubes[row + 1][orderCell + 1]
    ) {
      // console.log('есть соседняя ячейка');
      return true;
    }
    // console.log('нет соседних ячеек');
    return false;
  };

  // проверка на номер/цвет соседних ячеек на поле (по вертикали и по горизонтали)
  const ifNeighborCellMatch = () => {
    const rowLength = spacedСubes.length - 1;
    const columnLength = spacedСubes[0].length - 1;

    if (
      row < rowLength &&
      row > 0 &&
      orderCell > 0 &&
      orderCell < columnLength
    ) {
      // если ставим кубик внутрь поля (не по периметру)
      if (
        spacedСubes[row - 1][orderCell]?.number === raisedCube.number ||
        spacedСubes[row - 1][orderCell]?.color === raisedCube.color ||
        spacedСubes[row + 1][orderCell]?.number === raisedCube.number ||
        spacedСubes[row + 1][orderCell]?.color === raisedCube.color ||
        spacedСubes[row][orderCell - 1]?.number === raisedCube.number ||
        spacedСubes[row][orderCell - 1]?.color === raisedCube.color ||
        spacedСubes[row][orderCell + 1]?.number === raisedCube.number ||
        spacedСubes[row][orderCell + 1]?.color === raisedCube.color
      ) {
        // console.log('если ставим кубик внутрь поля (не по периметру)');
        return false;
      } else {
        return true;
      }
    }
    if (row === 0 && orderCell > 0 && orderCell < columnLength) {
      // если ставим кубик на первую линию на внутренние ячейки
      if (
        spacedСubes[row + 1][orderCell]?.number === raisedCube.number ||
        spacedСubes[row + 1][orderCell]?.color === raisedCube.color ||
        spacedСubes[row][orderCell - 1]?.number === raisedCube.number ||
        spacedСubes[row][orderCell - 1]?.color === raisedCube.color ||
        spacedСubes[row][orderCell + 1]?.number === raisedCube.number ||
        spacedСubes[row][orderCell + 1]?.color === raisedCube.color
      ) {
        // console.log('ставим кубик на первую линию на внутренние ячейки');
        return false;
      } else {
        return true;
      }
    }
    if (row === rowLength && orderCell > 0 && orderCell < columnLength) {
      // если ставим кубик на последнюю линию на внутренние ячейки
      if (
        spacedСubes[row - 1][orderCell]?.number === raisedCube.number ||
        spacedСubes[row - 1][orderCell]?.color === raisedCube.color ||
        spacedСubes[row][orderCell - 1]?.number === raisedCube.number ||
        spacedСubes[row][orderCell - 1]?.color === raisedCube.color ||
        spacedСubes[row][orderCell + 1]?.number === raisedCube.number ||
        spacedСubes[row][orderCell + 1]?.color === raisedCube.color
      ) {
        // console.log('ставим кубик на последнюю линию на внутренние ячейки');
        return false;
      } else {
        return true;
      }
    }
    if (orderCell === 0 && row > 0 && row < rowLength) {
      // если ставим кубик на первый столбик на внутренние ячейки
      if (
        spacedСubes[row + 1][orderCell]?.number === raisedCube.number ||
        spacedСubes[row + 1][orderCell]?.color === raisedCube.color ||
        spacedСubes[row - 1][orderCell]?.number === raisedCube.number ||
        spacedСubes[row - 1][orderCell]?.color === raisedCube.color ||
        spacedСubes[row][orderCell + 1]?.number === raisedCube.number ||
        spacedСubes[row][orderCell + 1]?.color === raisedCube.color
      ) {
        // console.log('ставим кубик на первый столбик на внутренние ячейки');
        return false;
      } else {
        return true;
      }
    }
    if (orderCell === columnLength && row > 0 && row < rowLength) {
      // если ставим кубик на последний столбик на внутренние ячейки
      if (
        spacedСubes[row + 1][orderCell]?.number === raisedCube.number ||
        spacedСubes[row + 1][orderCell]?.color === raisedCube.color ||
        spacedСubes[row - 1][orderCell]?.number === raisedCube.number ||
        spacedСubes[row - 1][orderCell]?.color === raisedCube.color ||
        spacedСubes[row][orderCell - 1]?.number === raisedCube.number ||
        spacedСubes[row][orderCell - 1]?.color === raisedCube.color
      ) {
        // console.log('ставим кубик на последний столбик на внутренние ячейки');
        return false;
      } else {
        return true;
      }
    }
    if (orderCell === 0 && row === 0) {
      // если ставим кубик на левую ячейку сверху
      if (
        spacedСubes[row + 1][orderCell]?.number === raisedCube.number ||
        spacedСubes[row + 1][orderCell]?.color === raisedCube.color ||
        spacedСubes[row][orderCell + 1]?.number === raisedCube.number ||
        spacedСubes[row][orderCell + 1]?.color === raisedCube.color
      ) {
        // console.log('ставим кубик на левую ячейку сверху');
        return false;
      } else {
        return true;
      }
    }
    if (orderCell === columnLength && row === 0) {
      // если ставим кубик на правую ячейку сверху
      if (
        spacedСubes[row + 1][orderCell]?.number === raisedCube.number ||
        spacedСubes[row + 1][orderCell]?.color === raisedCube.color ||
        spacedСubes[row][orderCell - 1]?.number === raisedCube.number ||
        spacedСubes[row][orderCell - 1]?.color === raisedCube.color
      ) {
        // console.log('ставим кубик на правую ячейку сверху');
        return false;
      } else {
        return true;
      }
    }
    if (orderCell === 0 && row === rowLength) {
      // если ставим кубик на левую ячейку снизу
      if (
        spacedСubes[row - 1][orderCell]?.number === raisedCube.number ||
        spacedСubes[row - 1][orderCell]?.color === raisedCube.color ||
        spacedСubes[row][orderCell + 1]?.number === raisedCube.number ||
        spacedСubes[row][orderCell + 1]?.color === raisedCube.color
      ) {
        // console.log('ставим кубик на левую ячейку снизу');
        return false;
      } else {
        return true;
      }
    }
    if (orderCell === 0 && row === rowLength) {
      // если ставим кубик на правую ячейку снизу
      if (
        spacedСubes[row - 1][orderCell]?.number === raisedCube.number ||
        spacedСubes[row - 1][orderCell]?.color === raisedCube.color ||
        spacedСubes[row][orderCell - 1]?.number === raisedCube.number ||
        spacedСubes[row][orderCell - 1]?.color === raisedCube.color
      ) {
        // console.log('ставим кубик на правую ячейку снизу');
        return false;
      } else {
        return true;
      }
    }
    return true;
  };

  const ifAvailable = (row, orderCell) => {
    let availableCells;
    if (ifEmptyPattern()) {
      availableCells = [
        [true, true, true, true, true],
        [true, false, false, false, true],
        [true, false, false, false, true],
        [true, true, true, true, true],
      ];
      if (availableCells[row][orderCell] && ifColorAndNumMatch()) {
        return true;
      } else {
        // console.log('ifColorAndNumMatch false', availableCells[row][orderCell])
        return false;
      }
    }
    if (
      ifNeighborCellExist() &&
      ifColorAndNumMatch() &&
      ifNeighborCellMatch()
    ) {
      return true;
    }
    return false;
  };

  // const handlePutCube = () => {
  //   if (!raisedCube) {
  //     return false;
  //   }
  //   if (ifAvailable(row, orderCell)) {
  //     dispatch(putCube(row, orderCell, raisedCube, activePlayer));
  //   } else {
  //     const errText = 'Ячейка недоступна'; // добавить в состояние и потом из него выводить ошибку
  //     console.log(errText);
  //   }

  //   // >>>>>>> dev
  // };
  // const pattern = useSelector((state) => state.player.stainedGlass.pattern);
  // const spacedСubes = useSelector((state) => state.player.spacedСubes);
  // const dispatch = useDispatch();

  // // проверка пустое ли поле
  // const ifEmptyPattern = () => {
  //   const ifEmptyArr = spacedСubes.map(
  //     (el) => !el.find((item) => !item === false)
  //   );
  //   const ifEmpty = !ifEmptyArr.includes(false);
  //   return ifEmpty;
  // };

  // // проверка на номер/цвет ячейки на поле
  // const ifColorAndNumMatch = () => {
  //   if (
  //     pattern[row][orderCell] === raisedCube.number ||
  //     pattern[row][orderCell] === raisedCube.color ||
  //     pattern[row][orderCell] === null
  //   ) {
  //     return true;
  //   }
  //   return false;
  // };

  // // проверка есть ли соседняя ячейка
  // const ifNeighborCellExist = () => {
  //   if (row === 0) {
  //     if (
  //       spacedСubes[row][orderCell - 1] ||
  //       spacedСubes[row][orderCell + 1] ||
  //       spacedСubes[row + 1][orderCell - 1] ||
  //       spacedСubes[row + 1][orderCell] ||
  //       spacedСubes[row + 1][orderCell + 1]
  //     ) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   }
  //   if (
  //     spacedСubes[row - 1][orderCell - 1] ||
  //     spacedСubes[row - 1][orderCell] ||
  //     spacedСubes[row - 1][orderCell + 1] ||
  //     spacedСubes[row][orderCell - 1] ||
  //     spacedСubes[row][orderCell + 1] ||
  //     spacedСubes[row + 1][orderCell - 1] ||
  //     spacedСubes[row + 1][orderCell] ||
  //     spacedСubes[row + 1][orderCell + 1]
  //   ) {
  //     // console.log('есть соседняя ячейка');
  //     return true;
  //   }
  //   // console.log('нет соседних ячеек');
  //   return false;
  // };

  // // проверка на номер/цвет соседних ячеек на поле (по вертикали и по горизонтали)
  // const ifNeighborCellMatch = () => {
  //   const rowLength = spacedСubes.length - 1;
  //   const columnLength = spacedСubes[0].length - 1;

  //   if (
  //     row < rowLength &&
  //     row > 0 &&
  //     orderCell > 0 &&
  //     orderCell < columnLength
  //   ) {
  //     // если ставим кубик внутрь поля (не по периметру)
  //     if (
  //       spacedСubes[row - 1][orderCell]?.number === raisedCube.number ||
  //       spacedСubes[row - 1][orderCell]?.color === raisedCube.color ||
  //       spacedСubes[row + 1][orderCell]?.number === raisedCube.number ||
  //       spacedСubes[row + 1][orderCell]?.color === raisedCube.color ||
  //       spacedСubes[row][orderCell - 1]?.number === raisedCube.number ||
  //       spacedСubes[row][orderCell - 1]?.color === raisedCube.color ||
  //       spacedСubes[row][orderCell + 1]?.number === raisedCube.number ||
  //       spacedСubes[row][orderCell + 1]?.color === raisedCube.color
  //     ) {
  //       // console.log('если ставим кубик внутрь поля (не по периметру)');
  //       return false;
  //     } else {
  //       return true;
  //     }
  //   }
  //   if (row === 0 && orderCell > 0 && orderCell < columnLength) {
  //     // если ставим кубик на первую линию на внутренние ячейки
  //     if (
  //       spacedСubes[row + 1][orderCell]?.number === raisedCube.number ||
  //       spacedСubes[row + 1][orderCell]?.color === raisedCube.color ||
  //       spacedСubes[row][orderCell - 1]?.number === raisedCube.number ||
  //       spacedСubes[row][orderCell - 1]?.color === raisedCube.color ||
  //       spacedСubes[row][orderCell + 1]?.number === raisedCube.number ||
  //       spacedСubes[row][orderCell + 1]?.color === raisedCube.color
  //     ) {
  //       // console.log('ставим кубик на первую линию на внутренние ячейки');
  //       return false;
  //     } else {
  //       return true;
  //     }
  //   }
  //   if (row === rowLength && orderCell > 0 && orderCell < columnLength) {
  //     // если ставим кубик на последнюю линию на внутренние ячейки
  //     if (
  //       spacedСubes[row - 1][orderCell]?.number === raisedCube.number ||
  //       spacedСubes[row - 1][orderCell]?.color === raisedCube.color ||
  //       spacedСubes[row][orderCell - 1]?.number === raisedCube.number ||
  //       spacedСubes[row][orderCell - 1]?.color === raisedCube.color ||
  //       spacedСubes[row][orderCell + 1]?.number === raisedCube.number ||
  //       spacedСubes[row][orderCell + 1]?.color === raisedCube.color
  //     ) {
  //       // console.log('ставим кубик на последнюю линию на внутренние ячейки');
  //       return false;
  //     } else {
  //       return true;
  //     }
  //   }
  //   if (orderCell === 0 && row > 0 && row < rowLength) {
  //     // если ставим кубик на первый столбик на внутренние ячейки
  //     if (
  //       spacedСubes[row + 1][orderCell]?.number === raisedCube.number ||
  //       spacedСubes[row + 1][orderCell]?.color === raisedCube.color ||
  //       spacedСubes[row - 1][orderCell]?.number === raisedCube.number ||
  //       spacedСubes[row - 1][orderCell]?.color === raisedCube.color ||
  //       spacedСubes[row][orderCell + 1]?.number === raisedCube.number ||
  //       spacedСubes[row][orderCell + 1]?.color === raisedCube.color
  //     ) {
  //       // console.log('ставим кубик на первый столбик на внутренние ячейки');
  //       return false;
  //     } else {
  //       return true;
  //     }
  //   }
  //   if (orderCell === columnLength && row > 0 && row < rowLength) {
  //     // если ставим кубик на последний столбик на внутренние ячейки
  //     if (
  //       spacedСubes[row + 1][orderCell]?.number === raisedCube.number ||
  //       spacedСubes[row + 1][orderCell]?.color === raisedCube.color ||
  //       spacedСubes[row - 1][orderCell]?.number === raisedCube.number ||
  //       spacedСubes[row - 1][orderCell]?.color === raisedCube.color ||
  //       spacedСubes[row][orderCell - 1]?.number === raisedCube.number ||
  //       spacedСubes[row][orderCell - 1]?.color === raisedCube.color
  //     ) {
  //       // console.log('ставим кубик на последний столбик на внутренние ячейки');
  //       return false;
  //     } else {
  //       return true;
  //     }
  //   }
  //   if (orderCell === 0 && row === 0) {
  //     // если ставим кубик на левую ячейку сверху
  //     if (
  //       spacedСubes[row + 1][orderCell]?.number === raisedCube.number ||
  //       spacedСubes[row + 1][orderCell]?.color === raisedCube.color ||
  //       spacedСubes[row][orderCell + 1]?.number === raisedCube.number ||
  //       spacedСubes[row][orderCell + 1]?.color === raisedCube.color
  //     ) {
  //       // console.log('ставим кубик на левую ячейку сверху');
  //       return false;
  //     } else {
  //       return true;
  //     }
  //   }
  //   if (orderCell === columnLength && row === 0) {
  //     // если ставим кубик на правую ячейку сверху
  //     if (
  //       spacedСubes[row + 1][orderCell]?.number === raisedCube.number ||
  //       spacedСubes[row + 1][orderCell]?.color === raisedCube.color ||
  //       spacedСubes[row][orderCell - 1]?.number === raisedCube.number ||
  //       spacedСubes[row][orderCell - 1]?.color === raisedCube.color
  //     ) {
  //       // console.log('ставим кубик на правую ячейку сверху');
  //       return false;
  //     } else {
  //       return true;
  //     }
  //   }
  //   if (orderCell === 0 && row === rowLength) {
  //     // если ставим кубик на левую ячейку снизу
  //     if (
  //       spacedСubes[row - 1][orderCell]?.number === raisedCube.number ||
  //       spacedСubes[row - 1][orderCell]?.color === raisedCube.color ||
  //       spacedСubes[row][orderCell + 1]?.number === raisedCube.number ||
  //       spacedСubes[row][orderCell + 1]?.color === raisedCube.color
  //     ) {
  //       // console.log('ставим кубик на левую ячейку снизу');
  //       return false;
  //     } else {
  //       return true;
  //     }
  //   }
  //   if (orderCell === 0 && row === rowLength) {
  //     // если ставим кубик на правую ячейку снизу
  //     if (
  //       spacedСubes[row - 1][orderCell]?.number === raisedCube.number ||
  //       spacedСubes[row - 1][orderCell]?.color === raisedCube.color ||
  //       spacedСubes[row][orderCell - 1]?.number === raisedCube.number ||
  //       spacedСubes[row][orderCell - 1]?.color === raisedCube.color
  //     ) {
  //       // console.log('ставим кубик на правую ячейку снизу');
  //       return false;
  //     } else {
  //       return true;
  //     }
  //   }
  //   return true;
  // };

  // const ifAvailable = (row, orderCell) => {
  //   let availableCells;
  //   if (ifEmptyPattern()) {
  //     availableCells = [
  //       [true, true, true, true, true],
  //       [true, false, false, false, true],
  //       [true, false, false, false, true],
  //       [true, true, true, true, true],
  //     ];
  //     if (availableCells[row][orderCell] && ifColorAndNumMatch()) {
  //       return true;
  //     } else {
  //       // console.log('ifColorAndNumMatch false', availableCells[row][orderCell])
  //       return false;
  //     }
  //   }
  //   if (
  //     ifNeighborCellExist() &&
  //     ifColorAndNumMatch() &&
  //     ifNeighborCellMatch()
  //   ) {
  //     return true;
  //   }
  //   return false;
  // };

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
