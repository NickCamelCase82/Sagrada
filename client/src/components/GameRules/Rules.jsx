import React from 'react'
import samplePDF from '../../files/Sagrada-Rules.pdf';

export default function Rules() {
  return (
    <>
      <object><embed src={samplePDF} width="100%" height="100%" /></object>
    </>
  )
}

