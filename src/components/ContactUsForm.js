import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { useState } from "react";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading } from "components/Headings.js";
import EmailIllustrationSrc from "images/email-illustration.svg";

const Container = tw.div`relative`;
const PrimaryButtonBase = tw.button`px-8 py-3 font-bold rounded bg-brown-200 text-gray-100 hocus:bg-brown-400 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;
const Heading = tw(SectionHeading)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`
const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`
const Textarea = styled(Input).attrs({as: "textarea"})`
  ${tw`h-24`}
`

const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-8`



const Add = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
    date: new Date().toString(),
  });

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    try {
      const res = await fetch(
        "https://sheet.best/api/sheets/5b6f5b4b-56c9-4522-b5ab-cc5d036fd34a",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (res.ok) {
        window.location.reload(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <Image imageSrc={EmailIllustrationSrc} />
        </ImageColumn>
        <TextColumn textOnLeft="left">
          <TextContent>
            <Heading>Feel free to <span tw="text-brown-300">get in touch</span><wbr/> with us.</Heading>
            <Description>We are hapy to answer all your questions, doubts and queries regarding our products and services.</Description>
            <Form onSubmit={handleSubmit}>
              <Input type="text" name="name" placeholder="Full Name" value={data.name} onChange={handleChange}/>
              <Input type="email" name="email" placeholder="Your Email Address" value={data.email} onChange={handleChange}/>
              <Textarea name="message" placeholder="Your Message Here" value={data.message} onChange={handleChange}/>
              <SubmitButton>Send</SubmitButton>
            </Form>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>    
    
  );
};

export default Add;


 
