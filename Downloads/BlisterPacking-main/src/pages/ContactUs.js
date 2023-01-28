import React from "react";
import AnimationRevealPage from "styles/AnimationRevealPage.js";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/header.js";
import Footer from "components/Footer.js";
import ContactUsForm from "components/ContactUsForm";
import ContactDetails from "components/ContactAddress.js";
const Address = tw.span`leading-relaxed`;
const AddressLine = tw.span`block`;
// const Email = tw.span`text-sm mt-6 block text-gray-500`;
// const Phone = tw.span`text-sm mt-0 block text-gray-500`;

export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <ContactUsForm />
      <ContactDetails
        cards={[
          {
            title: "Production Plant 1",
            description: (
              <>
                <Address>
                  <AddressLine>Plot No: 181, Sector - 7,</AddressLine>
                  <AddressLine>IMT Manesar, HSIIDC, Gurugram,</AddressLine>
                  <AddressLine>Haryana, India - 122050</AddressLine>
                </Address>
                {/* <Email>contact@treact.com</Email>
                <Phone>+1 (203) 991-6988</Phone> */}
              </>
            )
          },
          {
            title: "Production Plant 2",
            description: (
              <>
                <Address>
                  <AddressLine>Plot No: 182, Sector - 7,</AddressLine>
                  <AddressLine>IMT Manesar, HSIIDC, Gurugram,</AddressLine>
                  <AddressLine>Haryana, India - 122050</AddressLine>
                </Address>
                {/* <Email>contact@treact.com</Email>
                <Phone>+1 (203) 991-6988</Phone> */}
              </>
            )
          },
          {
            title: "Production Plant 3",
            description: (
              <>
                <Address>
                  <AddressLine>Plot No: 67, Pocket - D,</AddressLine>
                  <AddressLine>Sector - 5, Bawana,</AddressLine>
                  <AddressLine>New Delhi, India - 110039</AddressLine>
                </Address>
                {/* <Email>contact@treact.com</Email>
                <Phone>+1 (203) 991-6988</Phone> */}
              </>
            )
          }
        ]}
      />
      <Footer />
    </AnimationRevealPage>
  );
};
