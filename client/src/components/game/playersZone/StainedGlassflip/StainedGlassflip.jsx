import React, { useState } from 'react';
import './StainedGlassflip.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setStainedGlass } from '../../../../store/actions/player';
import { addStainedGlass } from '../../../../store/actions/game';

const StainedGlassflip = ({ stainedGlass }) => {
  const dispatch = useDispatch();
  console.log(stainedGlass);
  const [side, setSide] = useState(true);

  const handleTakeStainedGlass = () => {
    let objStainedGlass = side ? stainedGlass.pattern1 : stainedGlass.pattern2;
    objStainedGlass = {
      ...objStainedGlass,
      id: `${stainedGlass.id}${objStainedGlass.id}`,
    };
    console.log('this ', objStainedGlass);

    dispatch(setStainedGlass(objStainedGlass));
    dispatch(addStainedGlass(objStainedGlass));
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
