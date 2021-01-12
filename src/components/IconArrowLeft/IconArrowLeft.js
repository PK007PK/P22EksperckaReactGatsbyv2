import React from 'react';
import PropTypes from 'prop-types';

import { StyledI } from './IconArrowLeft.style.js';

const IconArrowLeft = ({ className }) => (
  <>
    <StyledI className={className} />
  </>
);

IconArrowLeft.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

export default IconArrowLeft;
