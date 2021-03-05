import React from 'react';
// styles:
import '../../stylesheets/reset/ResetBtn.scss';

const ResetBtn = (props) => {
  const { resetBtn, classResetBtn, classResetIcon } = props;
  const reset = () => {
    resetBtn();
  };

  return (
    <button className={classResetBtn} onClick={reset}>
      <i className={'fas fa-reply ' + classResetIcon}></i>
    </button>
  );
};

export default ResetBtn;
