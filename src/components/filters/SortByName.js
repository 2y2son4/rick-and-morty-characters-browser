import React from 'react';

const SortByName = (props) => {
  const { handleFilter, sortDirection } = props;

  const handleSortDirection = (ev) => {
    handleFilter({
      key: 'sort',
      value: ev.target.value,
    });
  };
  return (
    <fieldset className="filter__list">
      <label className="filter__list--label" htmlFor="sort">
        Sort:
      </label>
      <label className="filter__list--label-radio" htmlFor="AtoZ">
        <input
          className="filter__list--radio"
          type="radio"
          name="sort"
          id="AtoZ"
          value="AtoZ"
          checked={sortDirection === 'AtoZ'}
          onChange={handleSortDirection}
        />{' '}
        A to Z:
      </label>
      <label className="filter__list--label-radio" htmlFor="Zto">
        <input
          className="filter__list--radio"
          type="radio"
          name="sort"
          id="ZtoA"
          value="ZtoA"
          checked={sortDirection === 'ZtoA'}
          onChange={handleSortDirection}
        />{' '}
        Z to A:
      </label>
    </fieldset>
  );
};

export default SortByName;
