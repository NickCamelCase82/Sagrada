import React from 'react';
import { useSelector } from 'react-redux';
import RowPatternStainedGlass from '../RowPatternStainedGlass/RowPatternStainedGlass';
import './PatternStainedGlass.css';

const PatternStainedGlass = () => {
  const currentStainedGlass = useSelector((state) => state.player.stainedGlass);
  const pattern = useSelector((state) => state.player.stainedGlass.pattern);
  const spacedСubes = useSelector((state) => state.player.spacedСubes);
  // console.log('tyt', spacedСubes);
  // console.log(pattern);

  return (
    <div className="container-pattern-stained-glass">
      {pattern.map((_, index) => (
        <RowPatternStainedGlass
          patternRow={pattern[index]}
          key={currentStainedGlass.id}
          row={index}
          cubes={spacedСubes[index]}
        />
      ))}
      <p className="container-pattern-stained-glass-title">
        {currentStainedGlass.title}
      </p>
    </div>
  );
};

export default PatternStainedGlass;
