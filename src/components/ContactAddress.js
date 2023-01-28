import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/Headings.js";

const SectionDescription = tw.p`mt-4 text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100 max-w-xl`;
const PrimaryButtonBase = tw.button`px-8 py-3 font-bold rounded bg-brown-200 text-gray-100 hocus:bg-brown-400 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300`;

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-20 md:py-24`}
`;
const Subheading = tw(SubheadingBase)`mb-4`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center`;

const VerticalSpacer = tw.div`mt-10 w-full`

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 max-w-sm`}
`;

const Card = styled.div`
  ${tw`flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left h-full mx-4 px-2 py-8`}
  .imageContainer {
    ${tw`border text-center rounded-full p-5 flex-shrink-0`}
    img {
      ${tw`w-6 h-6`}
    }
  }

  .textContainer {
    ${tw`sm:ml-4 mt-4 sm:mt-2`}
  }

  .title {
    ${tw`mt-4 tracking-wide font-bold text-2xl leading-none`}
  }

  .description {
    ${tw`mt-1 sm:mt-4 font-medium text-secondary-100 leading-loose`}
  }
`;

const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-8`

export default ({ cards = null, heading = "Our Production Plants", subheading = "", description = "" }) => {

  const defaultCards = [
    {
      title: "",
      description: ""
    },
    { 
      title: "",
      description: ""
    },
    { 
      title: "",
      description: ""
    },
    { 
      title: "",
      description: ""
    },
    { 
      title: "",
      description: ""
    },
    { 
      title: "",
      description: ""
    },
  ];

  if (!cards) cards = defaultCards;

  return (
    <Container>
      <ThreeColumnContainer>
      <Heading>Our Head Office</Heading>
      <Column  key={0}>
      <Card >
              <span className="textContainer">
                <p className="description">
                Plot No: 181, Sector - 7, IMT Manesar, HSIIDC, Gurugram, Haryana, India - 122050
                </p>
                <SubmitButton><a href="https://goo.gl/maps/vQv6iLg3UQPdYLeMA">View on Map</a></SubmitButton>
              </span>
      </Card>
      </Column>
      </ThreeColumnContainer>
      
      <ThreeColumnContainer>
        {subheading && <Subheading>{subheading}</Subheading>}
        <Heading>{heading}</Heading>
        {description && <Description>{description}</Description>}
        <VerticalSpacer />
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="textContainer">
                <span className="title">{card.title || "Fully Secure"}</span>
                <p className="description">
                  {card.description || "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud."}
                </p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
    </Container>
  );
};
