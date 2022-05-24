import React from 'react';
import { useSelector } from 'react-redux';
import RowPatternStainedGlass from '../RowPatternStainedGlass/RowPatternStainedGlass';
import './PatternStainedGlass.css';
import { StainedGlass } from '../../../../constans/constans';

const PatternStainedGlass = () => {
  const currentStainedGlass = useSelector((state) => state.player.stainedGlass);
  const spacedСubes = useSelector((state) => state.player.spacedСubes);
  console.log('tyt', spacedСubes);
  const droppedCubes = useSelector((state) => state.game.droppedCubes);
  const playerStainedGlassId = useSelector(
    (state) => state.player.stainedGlass
  );

  let desiredStainedGlassId = StainedGlass.find(
    (elem) => elem.id === Number(playerStainedGlassId.slice(0, -1))
  );
  desiredStainedGlassId =
    playerStainedGlassId.slice(-1) === 'a'
      ? desiredStainedGlassId.pattern1.pattern
      : desiredStainedGlassId.pattern2.pattern;
  return (
    <div className="container-pattern-stained-glass">
      {desiredStainedGlassId.map((_, index) => (
        <RowPatternStainedGlass
          patternRow={desiredStainedGlassId[index]}
          key={playerStainedGlassId}
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
