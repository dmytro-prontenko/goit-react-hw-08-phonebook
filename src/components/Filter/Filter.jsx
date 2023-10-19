import React from 'react';
import PropTypes from 'prop-types';
import { StyledFilter, StyledInput } from './Filter.styled';
import AnimatedPageLeft from 'components/AnimatedPageLeft';

const Filter = ({ onFilterChange, filterValue }) => {
  return (
    <AnimatedPageLeft>
    <StyledFilter>
      <label className="filter-label" htmlFor="contact-filter">
        Find contact by name
        <StyledInput
          onChange={onFilterChange}
          name="filter"
          id="contact-filter"
          filter={filterValue}
        ></StyledInput>
      </label>
    </StyledFilter>
    </AnimatedPageLeft>
  );
};

Filter.propTypes = {
  onFilterChange: PropTypes.func,
  filterValue: PropTypes.string,
};

export default Filter;
