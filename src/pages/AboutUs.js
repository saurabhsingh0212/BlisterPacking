import React from "react";
import AnimationRevealPage from "styles/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/header.js";
import Footer from "components/Footer.js";
import { SectionHeading } from "components/Headings";

const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900 mb-10`;
const Text = styled.div`
  ${tw`text-lg  text-gray-800`}
  p {
    ${tw`mt-2 leading-loose`}
  }
  h1 {
    ${tw`text-3xl font-bold mt-10`}
  }
  h2 {
    ${tw`text-2xl font-bold mt-8`}
  }
  h3 {
    ${tw`text-xl font-bold mt-6`}
  }
  ul {
    ${tw`list-disc list-inside`}
    li {
      ${tw`ml-2 mb-3`}
      p {
        ${tw`mt-0 inline leading-normal`}
      }
    }
  }
`;
export default ({ headingText = "About Us" }) => {
  return (
    <AnimationRevealPage>
      <Header />
      <Container>
        <ContentWithPaddingXl>
          <HeadingRow>
            <Heading>{headingText}</Heading>
          </HeadingRow>
          <Text>
            <h1>COMPANY PROFILE</h1>
            <br></br>
            <p>
            From our humble beginning in 1993 , "Blister Packing Mfg Co." has grown to become India’s leading brand of complete product packaging. Our endeavour into research and development throughout these times have led us to world class craft man ship which is tough to beat. Keeping pace with changing life-styles, design, beliefs and aspirations of people we have always believed in providing the best at good value for money. 
            Offering the ultimate design, comfort and quality of product, each of our product is the manifestation of high standards of workmanship, latest technology and thoughtful engineering. 
            </p>

            <p>
            With more than two decades of experience in this industry, the company targets valuable customer & creativity in product development (materials, properties and design) 
            is the key to our efforts to offer the best products available in the market and to maintain safety and quality on the highest level.
            </p>
            <p>As a market leader with years of experience, we are equipped to meet the demanding needs of the fast growing India and ensure that the growth is maintained along with a competitive edge.</p>
            <br></br>
            <p><b>We strive to foster the company’s growth and focus on setting new standards of consumer packaging excellence. And we are where you need us. Our commitment to quality is unparalled.</b></p>
            <br></br>
            <h1>ABOUT COMPANY MANAGEMENT</h1>
            <br></br>
            <p><strong>About Founder Of the Company - </strong>Company has managed to set a new definition of success and growth under the leadership of Mr. Arun Sahdev. 
            The secret of our continuous step towards our goal lies in our timely delivery of our first class products, which are available at the most competitive rates in India. 
            We believe in long term relationship and so we understand the value of our each and every client . Thus, we are the first choice among our clients who bank upon us for years 
            for all their complete packaging needs, starting from its designing to providing the packaging material like PVC, PET and HIPS till the final packing of the product products. 
            We make a wide range of custom design of plastic pack that will showcase your product in the best possible manner. </p>
            <br></br>
            <h1>PHILOSOPHY</h1>
            <br></br>
            <p>"With our commitment to customer service we can provide the best when it comes to blister packaging. We will walk you through from design phase all the way through 
              to your finished project for your convenience. We are specialist in flexible packaging design. If you've got a need for blister cards, wraps, inserts, roll labels, lids, tags or similar products, come see us. 
              We serve the food & beverage, cosmetic, pharmaceutical, medical devices & other industries, & have been doing so since 1993. Top Blister Packaging in Delhi.
            </p>
            <p><strong>Our Company Values :- </strong>The Company’s Values that lives by are exclusive in their overpowering simplicity and absolute effectiveness. They are:</p>
            <br></br>
            <ul>
              <li><p>Trust</p></li>
              <li><p>Honesty</p></li>
              <li><p>Transparency</p></li>
              <li><p>Employee Satisfaction</p></li>
              <li><p>Customer Orientation</p></li>
              <li><p>Team Orientation </p></li>
            </ul>
            <br></br>
            <h1>EXPORT MARKETS</h1>
            <br></br>
            <p>Over the years we have acquired a wide spread satisfied customer base, which is a mix of Indian and foreign clients. 
              Our future plans are directed toward further expansion of our business operations by reaching out to untapped markets. We currently export to markets in following locations.
            </p>
            <br></br>
            <ul>
              <li><p>Middle East</p></li>
              <li><p>Europe</p></li>
              <li><p>Bangladesh</p></li>
              <li><p>Sri Lanka</p></li>
              <li><p>Nepal</p></li>
            </ul>

          </Text>
        </ContentWithPaddingXl>
      </Container>
      <Footer />
    </AnimationRevealPage>
  );
};
