import React from 'react';
import Modal from 'react-modal';
import CommonGoalCards from '../CommonGoalCards/CommonGoalCards';
import './ButtonCommonGoals.css';

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

// Modal.setAppElement('#yourAppElement');

const ButtonCommonGoals = () => {
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

  // return <button>Общие цели</button>;
  return (
    <div>
      <button className="btn-common-goals" onClick={openModal}>
        Общие цели
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
        <button
          className="btn-common-goals btn-common-goals-close"
          onClick={closeModal}
        >
          Закрыть
        </button>
        <CommonGoalCards />
      </Modal>
    </div>
  );
};

export default ButtonCommonGoals;
