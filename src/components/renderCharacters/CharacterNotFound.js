// React
import React from 'react';
import PropTypes from 'prop-types';

// components
import ResetBtn from '../reset/ResetBtn';

// styles
import '../.././stylesheets/renderCharacters/CharacterNotFound.scss';

// images
import terry from '../.././images/gifs/terry.gif';

const CharacterNotFound = (props) => {
  const { resetBtn, search } = props;

  const textNotFound = !search ? (
    <p className="notFound__text">Your search returned no results, bitch!</p>
  ) : (
    <p className="notFound__text">
      Your search for <span className="notFound__text--search">{search}</span> returned no results, bitch!
    </p>
  );

  return (
    <article className="notFound">
      {textNotFound}
      <img className="notFound__img" src={terry} alt="Sorry, no results, bitch!" />
      <ResetBtn resetBtn={resetBtn} classResetBtn={'reset__notFound'} classResetIcon={'reset__notFound--icon'} />
    </article>
  );
};

CharacterNotFound.propTypes = {
  resetBtn: PropTypes.func.isRequired,
};

export default CharacterNotFound;
