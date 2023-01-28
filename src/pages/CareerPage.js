import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "styles/AnimationRevealPage.js";
import Hero from "components/CareerHero";
import HeroImg from "images/Career.png"
import Footer from "components/Footer.js";
export default () => {
    const HighlightedText = tw.span`bg-brown-200 text-gray-100 px-4 transform -skew-x-12 inline-block`;
    const imageCss = tw`rounded-4xl`;
    return (
      <AnimationRevealPage>
        <Hero
          heading={<>Careers at BPMC<HighlightedText>Work with us!</HighlightedText></>}
          description="Explore opportunities and join our mission to make amazing packaging solutions. "
          imageSrc={HeroImg}
          imageCss={imageCss}
          imageDecoratorBlob={true}
        />
        <Footer />
    </AnimationRevealPage>
    );
}