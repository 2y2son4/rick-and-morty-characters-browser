import React from 'react';
import FilterByName from './FilterByName';
import '../stylesheets/Filters.scss';

const Filters = (props) => {
  //   const {  } = props;
  return (
    <section className="filter">
      <h2 className="filter__title">- Search -</h2>
      <form className="filter__list">
        <FilterByName />
      </form>
    </section>
  );
};

export default Filters;
