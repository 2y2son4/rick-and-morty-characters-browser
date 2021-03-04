import React from 'react';
// styles:
import '../../stylesheets/ResetBtn.scss';

const ResetBtn = (props) => {
  const resetBtn = () => {
    props.resetBtn();
  };

  return (
    <button className="reset" onClick={resetBtn}>
      <i className="fa fa-refresh reset__icon"></i>
    </button>
  );
};

export default ResetBtn;
