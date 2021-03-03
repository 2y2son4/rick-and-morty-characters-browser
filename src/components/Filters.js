import React from 'react';
import FilterByName from './FilterByName';
import '../stylesheets/Filters.scss';

const Filters = (props) => {
  //   const {  } = props;
  const handleForm = (ev) => {
    ev.preventDefault();
  };
  const { handleFilter } = props;

  return (
    <section className="filter">
      <h2 className="filter__title">- Search -</h2>
      <form className="filter__list" onChange={handleForm}>
        <FilterByName handleFilter={handleFilter} />
      </form>
    </section>
  );
};

export default Filters;
