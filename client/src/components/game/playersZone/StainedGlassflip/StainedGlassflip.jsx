import React, { useState } from 'react';
import './StainedGlassflip.css';

const StainedGlassflip = ({ stainedGlass, onSelect }) => {
  console.log(stainedGlass);
  // console.log(stainedGlass);

  const [side, setSide] = useState(true);

  const handleTakeStainedGlass = async () => {
    let objStainedGlass = side ? stainedGlass.pattern1 : stainedGlass.pattern2;
    onSelect(`${stainedGlass.id}${objStainedGlass.id}`);
  };

  return (
    <div className="wrap">
      <div className={`card ${side ? '' : 'flipped'}`}>
        <div onClick={() => setSide(!side)} className={'front'}>
          <img
            src={stainedGlass.pattern1.src}
            alt={stainedGlass.pattern1.title}
          />
        </div>
        <div onClick={() => setSide(!side)} className={'back'}>
          <img
            src={stainedGlass.pattern2.src}
            alt={stainedGlass.pattern2.title}
          />
        </div>
      </div>
      <button onClick={handleTakeStainedGlass}>Выбрать</button>
    </div>
  );
};

// StainedGlassflip.propTypes = {
//   stainedGlass: PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     pattern1: PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       title: PropTypes.string.isRequired,
//       complexity: PropTypes.number.isRequired,
//       pattern: PropTypes.arrayOf(
//         PropTypes.arrayOf(
//           PropTypes.oneOfType([
//             PropTypes.string.isRequired,
//             PropTypes.oneOf([null]).isRequired,
//           ]).isRequired
//         )
//       ),
//     }).isRequired,
//   }),
// };

export default StainedGlassflip;
