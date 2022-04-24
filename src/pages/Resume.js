import React from 'react';
import resume from '../data/resume.pdf';

const Resume = () => {
  return (
    <div
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
      }}
    >
      <iframe
        src={resume}
        style={{ width: '100%', height: '100vh', border: 'none' }}
        title='Resume'
      ></iframe>
    </div>
  );
};

export default Resume;
