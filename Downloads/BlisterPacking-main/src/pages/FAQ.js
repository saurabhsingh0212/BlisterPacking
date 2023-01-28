import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/Headings.js";

import { Container, ContentWithPaddingXl } from "components/Layouts.js";
import { ReactComponent as ChevronDownIcon } from "feather-icons/dist/icons/chevron-down.svg";
import Footer from "components/Footer.js";
import Header from "components/header.js";

const SectionDescription = tw.p`mt-4 text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100 max-w-xl`;
const Subheading = tw(SubheadingBase)`mb-4 text-center`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center`;

const Column = tw.div`flex flex-col items-center`;
const HeaderContent = tw.div``;

const FAQSContainer = tw.dl`mt-12 max-w-4xl relative`;
const FAQ = tw.div`cursor-pointer select-none mt-5 px-8 sm:px-10 py-5 sm:py-4 rounded-lg text-gray-800 hover:text-gray-900 bg-gray-200 hover:bg-gray-300 transition duration-300`;
const Question = tw.dt`flex justify-between items-center`;
const QuestionText = tw.span`text-lg lg:text-xl font-semibold`;
const QuestionToggleIcon = motion(styled.span`
  ${tw`ml-2 transition duration-300`}
  svg {
    ${tw`w-6 h-6`}
  }
`);
const Answer = motion(tw.dd`pointer-events-none text-sm sm:text-base leading-relaxed`);



export default ({
  subheading = "FAQS",
  heading = "You have Questions ?",
  description = "And we have got answers to all of them. Feel free to contact us for further questions.",
  faqs = [
    {
      question: "Where are we located ?",
      answer:
        "We have 1 production plant in Bawana (link to address) and 2 in IMT Manesar."
    },
    {
      question: "What is our production capability?",
      answer:
        "We produce over 100 lakh blisters and 50k rigid boxes per month."
    },
    {
      question: "What are our design and development capabilities?",
      answer:
        "We have in-house development shop for planning forming tools and moulds. And a design studio for design and development of art work for boxes."
    },
    {
      question: "What is our supply lead time?",
      answer:
        "3 weeks for new blister development, 1 week for standard sizes. 4 weeks for rigid boxes. This is in house production time. "
    },
    {
      question: "How do we maintain quality standards?",
      answer:
        "We have in house QC team with checks at each stage of production, to ensure defect free supplies with supply parameters. "
    },
    {
      question: "Where is our cliental located?",
      answer:
        "We make blisters and rigid boxes for reputed brands in India. They are used for domestic as well as western markets. "
    },
    {
      question: "How to contact us?",
      answer:
        "Kindly reach our executive at email: sales@blisterpacking.in, phone no: +91-8368058875. You can also reach us at our Manesar and Bawana plants. "
    },
    {
      question: "How to get samples and quotations?",
      answer:
        "Kindly contact the sales executive for the same."
    }
  ]
}) => {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

  const toggleQuestion = questionIndex => {
    if (activeQuestionIndex === questionIndex) setActiveQuestionIndex(null);
    else setActiveQuestionIndex(questionIndex);
  };

  return (
    <Container>
      <Header/>
      <ContentWithPaddingXl>
        <Column>
          <HeaderContent>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading>{heading}</Heading>
            {description && <Description>{description}</Description>}
          </HeaderContent>
          <FAQSContainer>
            {faqs.map((faq, index) => (
              <FAQ
                key={index}
                onClick={() => {
                  toggleQuestion(index);
                }}
                className="group"
              >
                <Question>
                  <QuestionText>{faq.question}</QuestionText>
                  <QuestionToggleIcon
                    variants={{
                      collapsed: { rotate: 0 },
                      open: { rotate: -180 }
                    }}
                    initial="collapsed"
                    animate={activeQuestionIndex === index ? "open" : "collapsed"}
                    transition={{ duration: 0.02, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <ChevronDownIcon />
                  </QuestionToggleIcon>
                </Question>
                <Answer
                  variants={{
                    open: { opacity: 1, height: "auto", marginTop: "16px" },
                    collapsed: { opacity: 0, height: 0, marginTop: "0px" }
                  }}
                  initial="collapsed"
                  animate={activeQuestionIndex === index ? "open" : "collapsed"}
                  transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                >
                  {faq.answer}
                </Answer>
              </FAQ>
            ))}
          </FAQSContainer>
        </Column>
      </ContentWithPaddingXl>
      <Footer />
    </Container>
  );
};
