import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import IconFB from '../../components/IconFB/IconFB';
import Form from '../../components/Form/Form';
import { BootsRow, BootsColumn } from '../../utils/BootsElements/BootsElements';

import { StyledSectionLayout } from './ContactSection.style';

const ContactSection = () => {
  const data = useStaticQuery(query);
  return (
    <StyledSectionLayout>
      <BootsRow>
        <BootsColumn className="formWrap" md="7" lg="8">
          <Form admin={data.datoCmsSiteSetup.personalDataAdministrator} />
        </BootsColumn>
        <BootsColumn className="contactWrap" md="5" lg="4">
          {' '}
          <h2>Dane kontaktowe:</h2>
          <div>
            <p>Telefon: {data.datoCmsSiteSetup.phone}</p>
          </div>
          <div>
            <p>Email: {data.datoCmsSiteSetup.email} </p>
          </div>
        </BootsColumn>
      </BootsRow>
    </StyledSectionLayout>
  );
};

const query = graphql`
  {
    datoCmsSiteSetup {
      phone
      email
      youtubeChanelLink
      facebookLink
      personalDataAdministrator
    }
  }
`;

export default ContactSection;
