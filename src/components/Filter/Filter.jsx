import React from 'react';
import PropTypes from 'prop-types';
import { StyledFilter, StyledInput } from './Filter.styled';

const Filter = ({ onFilterChange, filterValue }) => {
  return (
    <StyledFilter>
      <label className="filter-label" htmlFor="contact-filter">
        Find contact by name!
        <StyledInput
          onChange={onFilterChange}
          name="filter"
          id="contact-filter"
          filter={filterValue}
        ></StyledInput>
      </label>
    </StyledFilter>
  );
};

Filter.propTypes = {
  onFilterChange: PropTypes.func,
  filterValue: PropTypes.string,
};

export default Filter;
