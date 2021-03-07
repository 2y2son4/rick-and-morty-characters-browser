// React
import React from 'react';
import PropTypes from 'prop-types';

// icons
import { FaUndoAlt } from 'react-icons/fa';

// styles:
import '../../stylesheets/reset/ResetBtn.scss';

const ResetBtn = (props) => {
  const { resetBtn, classResetBtn, classResetIcon } = props;
  const reset = () => {
    resetBtn();
  };

  return (
    <button className={classResetBtn} onClick={reset}>
      <FaUndoAlt className={classResetIcon} />
    </button>
  );
};

ResetBtn.propTypes = {
  classResetIcon: PropTypes.string,
  classResetBtn: PropTypes.string,
  resetBtn: PropTypes.func,
};

export default ResetBtn;
