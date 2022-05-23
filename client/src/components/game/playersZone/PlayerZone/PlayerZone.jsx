import React from 'react';
import Modal from 'react-modal';
import './PlayerZone.css';
import PatternStainedGlass from '../PatternStainedGlass/PatternStainedGlass';

const customStyles = {
  content: {
    width: '100%',
    height: '100%',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const PlayerZone = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="container-player-zone">
      <div className="container-btn-other-stained-glass">
        <button className="btn-other-stained-glass" onClick={openModal}>
          Соперники
        </button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
        <button
          className="btn-other-stained-glass btn-other-stained-glass-close"
          onClick={closeModal}
        >
          Закрыть
        </button>
      </Modal>
      <PatternStainedGlass />
    </div>
  );
};

export default PlayerZone;
