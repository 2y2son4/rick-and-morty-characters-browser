import React from 'react';

const FilterByName = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      key: 'name',
      value: ev.target.value,
    });
  };
  return (
    <div className="filter__list">
      <label className="filter__list--label" htmlFor="name">
        Name:
      </label>
      <input className="filter__list--input" type="text" name="name" id="characterSearch" onChange={handleChange} />
    </div>
  );
};

export default FilterByName;
