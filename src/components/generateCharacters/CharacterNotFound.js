import React from 'react';

import '../.././stylesheets/CharacterNotFound.scss';

import terry from '../.././images/gifs/terry.gif';
// import portal from '../.././images/gifs/portal.gif';

const Character = () => {
  return (
    <div className="notFound">
      <p className="notFound__text">Your search returned no results, bitch!</p>
      <img className="notFound__img" src={terry} alt="Sorry, no results, bitch!" />
    </div>
  );
};

export default Character;
