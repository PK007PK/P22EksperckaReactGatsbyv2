import React from 'react';
import PropTypes from 'prop-types';

import { StyledI } from './IconArrowRight.style.js';

const IconArrowRight = ({ className }) => (
  <>
    <StyledI className={className} />
  </>
);

IconArrowRight.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

export default IconArrowRight;
