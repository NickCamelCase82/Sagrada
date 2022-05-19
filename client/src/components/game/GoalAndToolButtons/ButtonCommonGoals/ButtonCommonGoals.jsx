import React, { useEffect } from 'react';
import Modal from 'react-modal';
import './ButtonCommonGoals.css';
import { setCommonGoals } from '../../../../store/actions/game';
import { useDispatch, useSelector } from 'react-redux';
import { randomCommonGoals } from '../../../../features/gameFeatures';
import { CommonGoals } from '../../../../constans/constans';
import CommonGoalCards from '../CommonGoalCards/CommonGoalCards';

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
  const dispatch = useDispatch();
  const stateCommonGoals = useSelector((state) => state.game.commonGoals);

  useEffect(() => {
    console.log('1');
    if (stateCommonGoals.length === 0) {
      console.log('2');
      console.log('asdsadd');
      const goals = randomCommonGoals(3, CommonGoals);
      dispatch(setCommonGoals(goals));
    }
  }, []);

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
