import React from 'react';

import {
  StyledSection,
  StyledTxtWrapper,
  StyledImageWrapper,
  StyledImage,
  StyledDiv,
} from './HeadingSubpage.style.js';

import { BootsContainer } from '../../utils/BootsElements/BootsElements';

const HeadingSubpage = ({ fluid, alt, title, slug, description }) => (
  <BootsContainer>
    <StyledSection>
      <StyledTxtWrapper>
        <span className="slug">{slug}</span>
        <h1>{title}</h1>
        <p className="description">{description}</p>
      </StyledTxtWrapper>
      <StyledImageWrapper>
        <StyledImage alt={alt} />
        {console.log(alt)}
        <StyledDiv />
      </StyledImageWrapper>
    </StyledSection>
  </BootsContainer>
);

export default HeadingSubpage;
