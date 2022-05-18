import personalGoal1 from '../img/personal-goals/personalGoal0.jpg';
import personalGoal2 from '../img/personal-goals/personalGoal1.jpg';
import personalGoal3 from '../img/personal-goals/personalGoal2.jpg';
import personalGoal4 from '../img/personal-goals/personalGoal3.jpg';
import personalGoal5 from '../img/personal-goals/personalGoal4.jpg';

import window1Front from '../img/stained-glass/window0Front.jpg';
import window1Rear from '../img/stained-glass/window0Rear.jpg';
import window2Front from '../img/stained-glass/window1Front.jpg';
import window2Rear from '../img/stained-glass/window1Rear.jpg';
import window3Front from '../img/stained-glass/window2Front.jpg';
import window3Rear from '../img/stained-glass/window2Rear.jpg';
import window4Front from '../img/stained-glass/window3Front.jpg';
import window4Rear from '../img/stained-glass/window3Rear.jpg';
import window5Front from '../img/stained-glass/window4Front.jpg';
import window5Rear from '../img/stained-glass/window4Rear.jpg';
import window6Front from '../img/stained-glass/window5Front.jpg';
import window6Rear from '../img/stained-glass/window5Rear.jpg';
import window7Front from '../img/stained-glass/window6Front.jpg';
import window7Rear from '../img/stained-glass/window6Rear.jpg';
import window8Front from '../img/stained-glass/window7Front.jpg';
import window8Rear from '../img/stained-glass/window7Rear.jpg';
import window9Front from '../img/stained-glass/window8Front.jpg';
import window9Rear from '../img/stained-glass/window8Rear.jpg';
import window10Front from '../img/stained-glass/window9Front.jpg';
import window10Rear from '../img/stained-glass/window9Rear.jpg';
import window11Front from '../img/stained-glass/window10Front.jpg';
import window11Rear from '../img/stained-glass/window10Rear.jpg';
import window12Front from '../img/stained-glass/window11Front.jpg';
import window12Rear from '../img/stained-glass/window11Rear.jpg';

import board1 from '../img/boards/1.png';
import board2 from '../img/boards/2.png';
import board3 from '../img/boards/3.png';
import board4 from '../img/boards/4.png';

export const CubeColors = {
  BLUE: 'blue',
  PURPLE: 'purple',
  GREEN: 'green',
  RED: 'red',
  YELLOW: 'yellow',
};

export const CubeNumbers = {
  ONE: 'one',
  TWO: 'two',
  THREE: 'three',
  FOUR: 'four',
  FIVE: 'five',
  SIX: 'six',
};

export const PersonalGoals = [
  {
    id: 1,
    color: CubeColors.RED,
    title: 'Оттенки красного (личная цель)',
    description: 'Суммарная яркость красных кубиков',
    src: personalGoal1,
  },
  {
    id: 2,
    color: CubeColors.BLUE,
    title: 'Оттенки синего (личная цель)',
    description: 'Суммарная яркость синих кубиков',
    src: personalGoal2,
  },
  {
    id: 3,
    color: CubeColors.GREEN,
    title: 'Оттенки зеленого (личная цель)',
    description: 'Суммарная яркость зеленых кубиков',
    src: personalGoal3,
  },
  {
    id: 4,
    color: CubeColors.PURPLE,
    title: 'Оттенки фиолетового (личная цель)',
    description: 'Суммарная яркость фиолетовых кубиков',
    src: personalGoal4,
  },
  {
    id: 5,
    color: CubeColors.YELLOW,
    title: 'Оттенки желтого (личная цель)',
    description: 'Суммарная яркость желтых кубиков',
    src: personalGoal5,
  },
];

// const countScore = (player) => {
//   const playerPersonalGoal = PersonalGoals.find(
//     ({ id }) => id === player.personalGoal
//   );
// };

export const StainedGlass = [
  {
    id: 1,
    pattern1: {
      title: 'Калейдоскопический сон',
      complexity: 4,
      pattern: [
        [CubeColors.YELLOW, CubeColors.BLUE, null, null, CubeNumbers.ONE],
        [CubeColors.GREEN, null, CubeNumbers.FIVE, null, CubeNumbers.FOUR],
        [CubeNumbers.THREE, null, CubeColors.RED, null, CubeColors.GREEN],
        [CubeNumbers.TWO, null, null, CubeColors.BLUE, CubeColors.YELLOW],
      ],
      src: window1Front,
    },
    pattern2: {
      title: 'Стойкость',
      complexity: 5,
      pattern: [
        [CubeColors.PURPLE, CubeNumbers.SIX, null, null, CubeNumbers.THREE],
        [CubeNumbers.FIVE, CubeColors.PURPLE, CubeNumbers.THREE, null, null],
        [null, CubeNumbers.TWO, CubeColors.PURPLE, CubeNumbers.ONE, null],
        [
          null,
          CubeNumbers.ONE,
          CubeNumbers.FIVE,
          CubeColors.PURPLE,
          CubeNumbers.FOUR,
        ],
      ],
      src: window1Rear,
    },
  },
  {
    id: 2,
    pattern1: {
      title: 'Цветова капель',
      complexity: 3,
      pattern: [
        [null, CubeNumbers.FOUR, null, CubeColors.YELLOW, CubeNumbers.SIX],
        [CubeColors.RED, null, CubeNumbers.TWO, null, null],
        [null, null, CubeColors.RED, CubeColors.PURPLE, CubeNumbers.ONE],
        [CubeColors.BLUE, CubeColors.YELLOW, null, null, null],
      ],
      src: window2Front,
    },
    pattern2: {
      title: 'Всполохи света',
      complexity: 5,
      pattern: [
        [null, null, null, CubeColors.RED, CubeNumbers.FIVE],
        [null, null, CubeColors.PURPLE, CubeNumbers.FOUR, CubeColors.BLUE],
        [
          null,
          CubeColors.BLUE,
          CubeNumbers.THREE,
          CubeColors.YELLOW,
          CubeNumbers.SIX,
        ],
        [
          CubeColors.YELLOW,
          CubeNumbers.TWO,
          CubeColors.GREEN,
          CubeNumbers.ONE,
          CubeColors.RED,
        ],
      ],
      src: window2Rear,
    },
  },
  {
    id: 3,
    pattern1: {
      title: 'Свет мира',
      complexity: 6,
      pattern: [
        [null, null, CubeNumbers.ONE, null, null],
        [
          CubeNumbers.ONE,
          CubeColors.GREEN,
          CubeNumbers.THREE,
          CubeColors.BLUE,
          CubeNumbers.TWO,
        ],
        [
          CubeColors.BLUE,
          CubeNumbers.FIVE,
          CubeNumbers.FOUR,
          CubeNumbers.SIX,
          CubeColors.GREEN,
        ],
        [null, CubeColors.BLUE, CubeNumbers.FIVE, CubeColors.GREEN, null],
      ],
      src: window3Front,
    },
    pattern2: {
      title: 'Свет звезды',
      complexity: 5,
      pattern: [
        [
          null,
          CubeNumbers.ONE,
          CubeColors.GREEN,
          CubeColors.PURPLE,
          CubeNumbers.FOUR,
        ],
        [
          CubeNumbers.SIX,
          CubeColors.PURPLE,
          CubeNumbers.TWO,
          CubeNumbers.FIVE,
          CubeColors.GREEN,
        ],
        [
          CubeNumbers.ONE,
          CubeColors.GREEN,
          CubeNumbers.FIVE,
          CubeNumbers.THREE,
          CubeColors.PURPLE,
        ],
        [null, null, null, null, null],
      ],
      src: window3Rear,
    },
  },
  {
    id: 4,
    pattern1: {
      title: 'Достоинство',
      complexity: 5,
      pattern: [
        [CubeNumbers.ONE, null, CubeNumbers.THREE, CubeColors.BLUE, null],
        [null, CubeNumbers.TWO, CubeColors.BLUE, null, null],
        [CubeNumbers.SIX, CubeColors.BLUE, null, CubeNumbers.FOUR, null],
        [
          CubeColors.BLUE,
          CubeNumbers.FIVE,
          CubeNumbers.TWO,
          null,
          CubeNumbers.ONE,
        ],
      ],
      src: window4Front,
    },
    pattern2: {
      title: 'Живая вода',
      complexity: 6,
      pattern: [
        [CubeNumbers.SIX, CubeColors.BLUE, null, null, CubeNumbers.ONE],
        [null, CubeNumbers.FIVE, CubeColors.BLUE, null, null],
        [
          CubeNumbers.FOUR,
          CubeColors.RED,
          CubeNumbers.TWO,
          CubeColors.BLUE,
          null,
        ],
        [
          CubeColors.GREEN,
          CubeNumbers.SIX,
          CubeColors.YELLOW,
          CubeNumbers.THREE,
          CubeColors.PURPLE,
        ],
      ],
      src: window4Rear,
    },
  },
  {
    id: 5,
    pattern1: {
      title: 'Солнечный кристалл',
      complexity: 3,
      pattern: [
        [null, CubeColors.BLUE, CubeNumbers.TWO, null, CubeColors.YELLOW],
        [null, CubeNumbers.FOUR, null, CubeColors.RED, null],
        [null, null, CubeNumbers.FIVE, CubeColors.YELLOW, null],
        [CubeColors.GREEN, CubeNumbers.THREE, null, null, CubeColors.PURPLE],
      ],
      src: window5Front,
    },
    pattern2: {
      title: 'Ловец теней',
      complexity: 5,
      pattern: [
        [CubeNumbers.SIX, CubeColors.PURPLE, null, null, CubeNumbers.FIVE],
        [CubeNumbers.FIVE, null, CubeColors.PURPLE, null, null],
        [CubeColors.RED, CubeNumbers.SIX, null, CubeColors.PURPLE, null],
        [
          CubeColors.YELLOW,
          CubeColors.RED,
          CubeNumbers.FIVE,
          CubeNumbers.FOUR,
          CubeNumbers.THREE,
        ],
      ],
      src: window5Rear,
    },
  },
  {
    id: 6,
    pattern1: {
      title: 'Величие рассвета',
      complexity: 5,
      pattern: [
        [
          CubeNumbers.FIVE,
          CubeColors.GREEN,
          CubeColors.BLUE,
          CubeColors.PURPLE,
          CubeNumbers.TWO,
        ],
        [CubeColors.PURPLE, null, null, null, CubeColors.YELLOW],
        [CubeColors.YELLOW, null, CubeNumbers.SIX, null, CubeColors.PURPLE],
        [CubeNumbers.ONE, null, null, CubeColors.GREEN, CubeNumbers.FOUR],
      ],
      src: window6Front,
    },
    pattern2: {
      title: 'Священная заря',
      complexity: 4,
      pattern: [
        [CubeColors.RED, null, CubeColors.BLUE, null, CubeColors.YELLOW],
        [
          CubeNumbers.FOUR,
          CubeColors.PURPLE,
          CubeNumbers.THREE,
          CubeColors.GREEN,
          CubeNumbers.TWO,
        ],
        [null, CubeNumbers.ONE, null, CubeNumbers.FIVE, null],
        [null, null, CubeNumbers.SIX, null, null],
      ],
      src: window6Rear,
    },
  },
  {
    id: 7,
    pattern1: {
      title: 'Симфония света',
      complexity: 6,
      pattern: [
        [CubeNumbers.TWO, null, CubeNumbers.FIVE, null, CubeNumbers.ONE],
        [
          CubeColors.YELLOW,
          CubeNumbers.SIX,
          CubeColors.PURPLE,
          CubeNumbers.TWO,
          CubeColors.RED,
        ],
        [null, CubeColors.BLUE, CubeNumbers.FOUR, CubeColors.GREEN, null],
        [null, CubeNumbers.THREE, null, CubeNumbers.FIVE, null],
      ],
      src: window7Front,
    },
    pattern2: {
      title: 'Доблесть',
      complexity: 5,
      pattern: [
        [
          CubeNumbers.FOUR,
          null,
          CubeNumbers.TWO,
          CubeNumbers.FIVE,
          CubeColors.GREEN,
        ],
        [null, null, CubeNumbers.SIX, CubeColors.GREEN, CubeNumbers.TWO],
        [null, CubeNumbers.THREE, CubeColors.GREEN, CubeNumbers.FOUR, null],
        [CubeNumbers.FIVE, CubeColors.GREEN, CubeNumbers.ONE, null, null],
      ],
      src: window7Rear,
    },
  },
  {
    id: 8,
    pattern1: {
      title: 'Пламя свечи',
      complexity: 5,
      pattern: [
        [
          CubeNumbers.THREE,
          CubeNumbers.FOUR,
          CubeNumbers.ONE,
          CubeNumbers.FIVE,
          null,
        ],
        [null, CubeNumbers.SIX, CubeNumbers.TWO, null, CubeColors.YELLOW],
        [null, null, null, CubeColors.YELLOW, CubeColors.RED],
        [
          CubeNumbers.FIVE,
          null,
          CubeColors.YELLOW,
          CubeColors.RED,
          CubeNumbers.SIX,
        ],
      ],
      src: window8Front,
    },
    pattern2: {
      title: 'Аура солнца',
      complexity: 6,
      pattern: [
        [
          CubeNumbers.ONE,
          CubeColors.PURPLE,
          CubeColors.YELLOW,
          null,
          CubeNumbers.FOUR,
        ],
        [CubeColors.PURPLE, CubeColors.YELLOW, null, null, CubeNumbers.SIX],
        [CubeColors.YELLOW, null, null, CubeNumbers.FIVE, CubeNumbers.THREE],
        [
          null,
          CubeNumbers.FIVE,
          CubeNumbers.FOUR,
          CubeNumbers.TWO,
          CubeNumbers.ONE,
        ],
      ],
      src: window8Rear,
    },
  },
  {
    id: 9,
    pattern1: {
      title: 'Батльо',
      complexity: 5,
      pattern: [
        [null, null, CubeNumbers.SIX, null, null],
        [null, CubeNumbers.FIVE, CubeColors.BLUE, CubeNumbers.FOUR, null],
        [
          CubeNumbers.THREE,
          CubeColors.GREEN,
          CubeColors.YELLOW,
          CubeColors.PURPLE,
          CubeNumbers.TWO,
        ],
        [
          CubeNumbers.ONE,
          CubeNumbers.FOUR,
          CubeNumbers.RED,
          CubeNumbers.FIVE,
          CubeNumbers.THREE,
        ],
      ],
      src: window9Front,
    },
    pattern2: {
      title: 'Бельесгуард',
      complexity: 3,
      pattern: [
        [CubeColors.BLUE, CubeNumbers.SIX, null, null, CubeColors.YELLOW],
        [null, CubeNumbers.THREE, CubeColors.BLUE, null, null],
        [null, CubeNumbers.FIVE, CubeNumbers.SIX, CubeNumbers.TWO, null],
        [null, CubeNumbers.FOUR, null, CubeNumbers.ONE, CubeColors.GREEN],
      ],
      src: window9Rear,
    },
  },
  {
    id: 10,
    pattern1: {
      title: 'Небесное сияние',
      complexity: 5,
      pattern: [
        [null, CubeColors.BLUE, CubeColors.RED, null, null],
        [null, CubeNumbers.FOUR, CubeNumbers.FIVE, null, CubeColors.BLUE],
        [
          CubeColors.BLUE,
          CubeNumbers.TWO,
          null,
          CubeColors.RED,
          CubeNumbers.FIVE,
        ],
        [
          CubeNumbers.SIX,
          CubeColors.RED,
          CubeNumbers.THREE,
          CubeNumbers.ONE,
          null,
        ],
      ],
      src: window10Front,
    },
    pattern2: {
      title: 'Божественный свет',
      complexity: 3,
      pattern: [
        [null, null, CubeColors.RED, CubeNumbers.FIVE, null],
        [
          CubeColors.PURPLE,
          CubeNumbers.FOUR,
          null,
          CubeColors.GREEN,
          CubeNumbers.THREE,
        ],
        [CubeNumbers.SIX, null, null, CubeColors.BLUE, null],
        [null, CubeColors.YELLOW, CubeNumbers.TWO, null, null],
      ],
      src: window10Rear,
    },
  },
  {
    id: 11,
    pattern1: {
      title: 'Благолепие цвета',
      complexity: 4,
      pattern: [
        [null, null, CubeColors.GREEN, null, null],
        [
          CubeNumbers.TWO,
          CubeColors.YELLOW,
          CubeNumbers.FIVE,
          CubeColors.BLUE,
          CubeNumbers.ONE,
        ],
        [null, CubeColors.RED, CubeNumbers.THREE, CubeColors.PURPLE, null],
        [CubeNumbers.ONE, null, CubeNumbers.SIX, null, CubeNumbers.FOUR],
      ],
      src: window11Front,
    },
    pattern2: {
      title: 'Учтивость',
      complexity: 5,
      pattern: [
        [CubeColors.YELLOW, null, CubeNumbers.TWO, null, CubeNumbers.SIX],
        [null, CubeNumbers.FOUR, null, CubeNumbers.FIVE, CubeColors.YELLOW],
        [null, null, null, CubeColors.YELLOW, CubeNumbers.FIVE],
        [
          CubeNumbers.ONE,
          CubeNumbers.TWO,
          CubeColors.YELLOW,
          CubeNumbers.THREE,
          null,
        ],
      ],
      src: window11Rear,
    },
  },
  {
    id: 12,
    pattern1: {
      title: 'Путь света',
      complexity: 4,
      pattern: [
        [CubeColors.YELLOW, null, CubeNumbers.SIX, null, null],
        [null, CubeNumbers.ONE, CubeNumbers.FIVE, null, CubeNumbers.TWO],
        [
          CubeNumbers.THREE,
          CubeColors.YELLOW,
          CubeColors.RED,
          CubeColors.PURPLE,
          null,
        ],
        [null, null, CubeNumbers.FOUR, CubeNumbers.THREE, CubeColors.RED],
      ],
      src: window12Front,
    },
    pattern2: {
      title: 'Усердие',
      complexity: 5,
      pattern: [
        [
          CubeNumbers.ONE,
          CubeColors.RED,
          CubeNumbers.THREE,
          null,
          CubeNumbers.SIX,
        ],
        [
          CubeNumbers.FIVE,
          CubeNumbers.FOUR,
          CubeColors.RED,
          CubeNumbers.TWO,
          null,
        ],
        [null, null, CubeNumbers.FIVE, CubeColors.RED, CubeNumbers.ONE],
        [null, null, null, CubeNumbers.THREE, CubeColors.RED],
      ],
      src: window12Rear,
    },
  },
];

export const WindowFrame = [
  {
    id: 1,
    color: CubeColors.RED,
    src: board3,
  },
  {
    id: 2,
    color: CubeColors.PURPLE,
    src: board2,
  },
  {
    id: 3,
    color: CubeColors.GREEN,
    src: board4,
  },
  {
    id: 4,
    color: CubeColors.BLUE,
    src: board1,
  },
];
