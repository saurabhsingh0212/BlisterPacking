import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";

import Header from "./header.js";

import ReactModalAdapter from "../styles/ReactModalAdapter.js";
import ResponsiveVideoEmbed from "../styles/ResponsiveVideoEmbed.js";

import { ReactComponent as PlayIcon } from "feather-icons/dist/icons/play-circle.svg";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../images/dot-pattern.svg";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col lg:flex-row md:items-center max-w-screen-xl mx-auto py-20 md:py-24`;
const LeftColumn = tw.div`relative lg:w-6/12 lg:pr-12 flex-shrink-0 text-center lg:text-left`;
const RightColumn = tw.div`relative mt-12 lg:mt-0 flex flex-col justify-center`;

const Heading = tw.h1`font-black text-3xl md:text-5xl leading-snug max-w-3xl`;
const Paragraph = tw.p`my-5 lg:my-8 text-sm lg:text-base font-medium text-gray-600 max-w-lg mx-auto lg:mx-0`;

const Actions = tw.div`flex flex-col items-center sm:flex-row justify-center lg:justify-start mt-8`;
const PrimaryButton = tw.button`font-bold px-8 lg:px-10 py-3 rounded bg-brown-200 text-gray-100 hocus:bg-brown-400 focus:shadow-outline focus:outline-none transition duration-300`;
const WatchVideoButton = styled.button`
  ${tw`mt-4 sm:mt-0 sm:ml-8 flex items-center text-secondary-300 transition duration-300 hocus:text-brown-300 focus:outline-none`}
  .playIcon {
    ${tw`stroke-1 w-12 h-12`}
  }
  .playText {
    ${tw`ml-2 font-medium`}
  }
`;

const IllustrationContainer = tw.div`flex justify-center md:justify-end items-center relative max-w-3xl lg:max-w-none`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none fill-current text-brown-300 opacity-25 absolute w-32 h-32 right-0 bottom-0 transform translate-x-10 translate-y-10 -z-10`}
`;

const StyledModal = styled(ReactModalAdapter)`
  &.mainHeroModal__overlay {
    ${tw`fixed inset-0 z-50`}
  }
  &.mainHeroModal__content {
    ${tw`xl:mx-auto m-4 sm:m-16 max-w-screen-xl absolute inset-0 flex justify-center items-center rounded-lg bg-gray-200 outline-none`}
  }
  .content {
    ${tw`w-full lg:p-16`}
  }
`;
const CloseModalButton = tw.button`absolute top-0 right-0 mt-8 mr-8 hocus:text-brown-200`;

export default ({
  heading = "",
 description="",
  primaryButtonText="",
  primaryButtonUrl="#",
  watchVideoButtonText="Watch Video",
  watchVideoYoutubeUrl="https://www.youtube.com/embed/_GuOjXYl5ew",
  imageSrc="",
  imageCss=null,
  imageDecoratorBlob = false,
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => setModalIsOpen(!modalIsOpen);

  return (
    <>
      <Header />
      <Container>
        <TwoColumn>
          <LeftColumn>
            <Heading>{heading}</Heading>
            <Paragraph>{description}</Paragraph>
            <Actions>
              <PrimaryButton as="a" href={primaryButtonUrl}>{primaryButtonText}</PrimaryButton>
              <WatchVideoButton onClick={toggleModal}>
                <span className="playIconContainer">
                  <PlayIcon className="playIcon" />
                </span>
                <span className="playText">{watchVideoButtonText}</span>
              </WatchVideoButton>
            </Actions>
          </LeftColumn>
          <RightColumn>
            <IllustrationContainer>
              <img
                css={imageCss}
                src={imageSrc}
                alt="Hero"
              />
              {imageDecoratorBlob && <DecoratorBlob2 />}
            </IllustrationContainer>
          </RightColumn>
        </TwoColumn>
        <StyledModal
          closeTimeoutMS={300}
          className="mainHeroModal"
          isOpen={modalIsOpen}
          onRequestClose={toggleModal}
          shouldCloseOnOverlayClick={true}
        >
          <CloseModalButton onClick={toggleModal}>
            <CloseIcon tw="w-6 h-6" />
          </CloseModalButton>
          <div className="content">
            <ResponsiveVideoEmbed url={watchVideoYoutubeUrl} tw="w-full" />
          </div>
        </StyledModal>
      </Container>
    </>
  );
};
