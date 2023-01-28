import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "styles/AnimationRevealPage.js";
import Hero from "components/LandingPageHero.js";
import Features from "components/HomeServices.js";
import MainFeature from "components/LandingPageHero2.js";
import MainFeature2 from "components/HomeWhyUs.js";
import TabGrid from "components/Products.js";
import OurTeam from "components/OurTeamTab.js";
import Footer from "components/Footer.js";
import Quick from "images/protect.png";
import Quality from "images/shield.png";
import House from "images/home-page.png";
import Team from "images/TeamPic.jpg";
import HeroImg from "images/hero.jpeg";
import FactoryImg from "images/IMG_1177.jpg"
export default () => {
  const HighlightedText = tw.span`bg-brown-200 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const Description = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-4xl`;
  return (
    <AnimationRevealPage>
      <Hero
        heading={<>Blister Packing Mfg Co.<HighlightedText></HighlightedText></>}
        description="Inspired by a vision to provide impeccable product quality to the customers, we started Blister Packing operations in 1993 and have grown to become a leading manufacturer and exporter of superlative blister products."
        imageSrc={HeroImg}
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText="Contact Us Now"
        primaryButtonUrl = "/contact_us"
        watchVideoButtonText="Meet The Chefs"
      />
      <MainFeature
        heading={
          <>
            We've been serving for
            <wbr /> <HighlightedText>over 30 years.</HighlightedText>
          </>
        }
        description={
          <Description>
           Offering the ultimate design each of our product is the manifestation of high standards of workmanship, latest technology and thoughtful engineering. No wonder "Blister Packing Mfg Co. ”, today, is synonymous with quality and performance across the country.
            <br />
            <br />
            "Blister Packing Mfg Co. " was conceptualized with a lot of hope and hard work by an
            outstanding pilot team of brilliant Indians.
          </Description>
        }
        buttonRounded={false}
        textOnLeft={false}
        primaryButtonText="Read More"
        primaryButtonUrl="/about_us"
        imageSrc={Team}
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />
      {/* TabGrid Component also accepts a tabs prop to customize the tabs and its content directly. Please open the TabGrid component file to see the structure of the tabs props.*/}
      <TabGrid
        heading={
          <>
            Checkout our <HighlightedText>Products</HighlightedText>
          </>
        }
      />
      <Features
        heading={
          <>
            Amazing <HighlightedText>Services.</HighlightedText>
          </>
        }
        cards={[
          {
            imageSrc: Quick,
            title: "Quick Development Time",
            description: "Equipped with high precision machinery we make our own tools, quickly and precisely.",
            url: "/facilities"
          },
          {
            imageSrc: Quality,
            title: "Strict Quality Control",
            description: "Our strict quality standard make sure, not a single deviation leaves our factory.",
            url: "/facilities"
          },
          {
            imageSrc: House,
            title: "In House Design",
            description: "We have in house graphic and tool design facilities. We can make any product from scratch",
            url: "/facilities"
          }
        ]}

        imageContainerCss={tw`p-2!`}
        imageCss={tw`w-20! h-20!`}
      />
      <MainFeature2
        heading={<>Why <HighlightedText>Choose Us ?</HighlightedText></>}
        statistics={[
          {
            key: "Orders",
            value: "94000+",
          },
          {
            key: "Customers",
            value: "11000+"
          },
          {
            key: "Chefs",
            value: "1500+"
          }
        ]}
        primaryButtonText="Contact Us Now"
        primaryButtonUrl="/contact_us"
        imageInsideDiv={false}
        imageSrc={FactoryImg}
        imageCss={Object.assign(tw`bg-cover`, imageCss)}
        imageContainerCss={tw`md:w-1/2 h-auto`}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 md:w-32 md:h-32 -translate-x-1/2 opacity-25`}
        textOnLeft={true}
      />
      <OurTeam
        subheading=""
        heading={<><HighlightedText>Our Team</HighlightedText></>}
      />
      <Footer />
    </AnimationRevealPage>
  );
}
