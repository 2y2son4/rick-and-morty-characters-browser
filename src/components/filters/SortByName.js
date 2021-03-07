// React
import React from 'react';
import PropTypes from 'prop-types';

const SortByName = (props) => {
  const { sortDirection, handleFilter } = props;

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
        <i className="fas fa-sort-alpha-down filter__list--radio-icon"></i>
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
        <i className="fas fa-sort-alpha-down-alt filter__list--radio-icon"></i>
      </label>
    </fieldset>
  );
};

SortByName.propTypes = {
  sortDirection: PropTypes.string,
  handleFilter: PropTypes.func.isRequired,
};

export default SortByName;
