import React from 'react';

import { FilterLink } from 'components/containers';


const Footer = () => (
  <footer className="todo-filter">
    <span className="label">Show:</span>
    {' '}
    <FilterLink filter="SHOW_ALL">ALL</FilterLink>
    {' '}
    <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>
    {' '}
    <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
  </footer>
);

export default Footer;
