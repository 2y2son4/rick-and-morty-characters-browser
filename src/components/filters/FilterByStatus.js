// React
import React from 'react';
import PropTypes from 'prop-types';

const FilterByStatus = (props) => {
  const { status, handleFilter, filteredCharacters } = props;

  const filteredStatus = filteredCharacters.map((data) => data.status);
  const statusMapped = [...new Set(filteredStatus)];

  statusMapped.sort();

  const toTitleCase = (str) => {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };

  const statusOption = statusMapped.map((status, i) => (
    <option key={i} value={status.toLowerCase()}>
      {toTitleCase(status)}
    </option>
  ));

  const handleChange = (ev) => {
    handleFilter({
      key: 'status',
      value: ev.target.value,
    });
  };
  return (
    <fieldset className="filter__list">
      <label className="filter__list--label" htmlFor="status">
        Status:
      </label>
      <select className="filter__list--input" name="status" id="status" value={status} onChange={handleChange}>
        <option value="">All</option>
        {statusOption}
      </select>
    </fieldset>
  );
};

FilterByStatus.propTypes = {
  status: PropTypes.string,
  handleFilter: PropTypes.func,
};

export default FilterByStatus;
