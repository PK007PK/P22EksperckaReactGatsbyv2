import React from 'react';
import PropTypes from 'prop-types';

import { StyledLogo } from './Logo.style';

const Logo = ({ className, secondary }) => (
  <StyledLogo className={className} secondary={secondary}>
    <div className="top">Obywatel</div>
    <div className="bottom">
      <span>kontra </span> ZUS
    </div>
  </StyledLogo>
);

Logo.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  secondary: PropTypes.bool,
};

export default Logo;
