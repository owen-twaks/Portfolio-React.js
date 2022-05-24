import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/about-page-img.png';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 2.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section"> 
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Owen Matsalani</span>
              </p>
              <h2 className="about__heading">Junior web developer</h2>
              <div className="about__info">
                <PText>
                  I recently graduated from a Hyperiondev Software developmentBootcamp 
                  and aspire to master my skills in HTML, CSS, JavaScipt, MongoDB, Express, React, Node.js
                  Next.js as well as build my career into a leadership role. 
                  I am a family-oriented person who enjoyscreative arts and arranging events in my spare time. 
                  I have a strong working background in fast-pacedenvironments and have worked in Operations, Sales, and Marketing, 
                  where I developed strong organization, communication, and problem-solving skills.
                  <br /> <br />
                  I have developed excellent analytical skills through this course as learned to develop different kinds of projects such as 
                  E-commerce stores, Landing pages with Authentication, To-do lists with API, etc.
                  I havemerged different kinds of projects and web applications, using dynamic 
                  web applications with thistechnology stack.
                  <br />
                  <br />
                  I consistently striveto work to the best of my ability and deliver professional standards at all times.
                </PText>
              </div>
              <Button btnText="Download CV" btnLink="" /> 
                   </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                title="Collage"
                items={['HYPERIONDEV']}
              />
              <AboutInfoItem
                title="Collage"
                items={['SCHOOL OF DIGITAL MARKETING']}
              />
             
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem
                title="FrontEnd"
                items={['HTML', 'CSS', 'JavaScript', 'REACT']}
              />
              <AboutInfoItem
                title="BackEnd"
                items={['Node', 'Express', 'MangoDB']}
              />
              <AboutInfoItem
                title="Digital Marketing"
                items={['SEO', 'Google Analytic', 'SEM','Re-targeting','Paid-Ads']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>

              <AboutInfoItem
                title="MARKETMAX"
                items={['SALE-MERCHANDISER']}
              />
              <AboutInfoItem
                title="PEAK INSTORE PTY LTD"
                items={['SALES CONSULTANT']}
              />
              <AboutInfoItem
                title="Thedigitalmarketinginstitute" 
                items={['Digital Marketing Analyst Intern']}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
