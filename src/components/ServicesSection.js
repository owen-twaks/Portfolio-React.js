import React from 'react';
//import { MdDesktopMac, MdAppRegistration, MdPhonelinkSetup } from 'react-icons/md';
import { DiCodeBadge,DiGoogleAnalytics,DiWebplatform } from "react-icons/di";
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle subheading="What i will do for you" heading="Services" />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<DiCodeBadge/>}
            title="web dev"
            desc="I develop an  eye catching websites. with high performance blazing fast speed."
          />
          <ServicesSectionItem
            icon={<DiGoogleAnalytics/>}  
            title="Digital Marketing"
            desc="I offer the following service seo,sem,email outreach,website strategy and many more."
          />
          <ServicesSectionItem
            icon={<DiWebplatform />}
            title="Responsive Design"
            desc="I develop Responsive application. for web and mobile app with eye catching ui. "
          />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}
