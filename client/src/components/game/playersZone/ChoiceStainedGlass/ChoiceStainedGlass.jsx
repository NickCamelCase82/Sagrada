import React from 'react';
import StainedGlassflip from '../StainedGlassflip/StainedGlassflip';
import './ChoiceStainedGlass.css';

const ChoiceStainedGlass = () => {
  return (
    <div className="container-choice-stained-glass">
      <div>
        <StainedGlassflip />
      </div>
      <div>
        <StainedGlassflip />
      </div>
    </div>
  );
};

export default ChoiceStainedGlass;
