import React from 'react';
import samplePDF from '../../files/Sagrada-Rules.pdf';

const Rules = () => {
  return (
    <div style={{ height: '100vh', display: 'flex' }}>
      <embed title="rules" src={samplePDF} width="100%" height="100%" />
    </div>
  );
};

export default Rules;
