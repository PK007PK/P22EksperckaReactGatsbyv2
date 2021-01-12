import React from 'react';
import PropTypes from 'prop-types';

import { StyledI } from './IconPhone.style.js';

const IconFb = ({ className }) => <StyledI className={className} />;

IconFb.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

export default IconFb;
