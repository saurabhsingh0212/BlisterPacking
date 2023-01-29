import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "components/Layouts.js";
import { SectionHeading } from "components/Headings.js";

import PackagingTrayImg from "images/Products/Packaging_Trays.jpeg";
import DisplayTrayImg from "images/Products/Display_Trays.jpeg"
import MaterialTrayImg from "images/Products/Packaging_Tray.jpeg"
import SealingTrayImg from "images/Products/Sealing_Blister_1.png"
import SlidingTrayImg from "images/Products/Sliding_Blister.png"

const PrimaryButtonBase = tw.button`px-8 py-3 font-bold rounded bg-brown-200 text-gray-100 hocus:bg-brown-400 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300`;
const HeaderRow = tw.div`flex justify-between items-center flex-col xl:flex-row`;
const Header = tw(SectionHeading)``;
const TabsControl = tw.div`flex flex-wrap bg-gray-200 px-2 py-2 rounded leading-none mt-12 xl:mt-0`;

const TabControl = styled.div`
  ${tw`cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base w-1/2 sm:w-auto text-center`}
  &:hover {
    ${tw`bg-gray-300 text-gray-700`}
  }
  ${props => props.active && tw`bg-brown-200! text-gray-100!`}
  }
`;

const TabContent = tw(motion.div)`mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`;
const CardContainer = tw.div`mt-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:pr-10 md:pr-6 lg:pr-12`;
const Card = tw(motion.a)`bg-gray-200 rounded-b block max-w-xs mx-auto sm:max-w-none sm:mx-0`;
const CardImageContainer = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`h-56 xl:h-64 bg-center bg-cover relative rounded-t`}
`;


const CardHoverOverlay = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.5);
  ${tw`absolute inset-0 flex justify-center items-center`}
`;
const CardButton = tw(PrimaryButtonBase)`text-sm`;

const CardText = tw.div`p-4 text-gray-900`;
const CardTitle = tw.h5`text-lg font-semibold group-hover:text-brown-400`;
const CardContent = tw.p`mt-1 text-sm font-medium text-gray-600`;


export default ({
  heading = "Checkout the Menu",
  tabs = {
    All: [
      {
        imageSrc:PackagingTrayImg,
        title: "Packaging Trays",
        content: "Blister Trays",
        url: "#"
      },
      {
        imageSrc:DisplayTrayImg,
        title: "Display Trays",
        content: "Blister Trays",
        url: "#"
      },
      {
        imageSrc:MaterialTrayImg,
        title: "Material Handling Trays",
        content: "Blister Trays",
        url: "#"
      },
      {
        imageSrc:SealingTrayImg,
        title: "Sealing Blisters",
        content: "Card Blisters",
        url: "#"
      },
      {
        imageSrc:SlidingTrayImg,
        title: "Sliding Blisters",
        content: "Card Blisters",
        url: "#"
      },
      {
        imageSrc:PackagingTrayImg,
        title: "Clamp Shells",
        content: "Card Blister",
        url: "#"
      },
      {
        imageSrc:PackagingTrayImg,
        title: "Welded Blisters",
        content: "Card Blister",
        url: "#"
      },
      {
        imageSrc:PackagingTrayImg,
        title: "Welded PP Box",
        content: "Plastic Box",
        url: "#"
      },
      {
        imageSrc:PackagingTrayImg,
        title: "PET & PVC Box",
        content: "Plastic Box",
        url: "#"
      },
      {
        imageSrc:PackagingTrayImg,
        title: "Magnet Flip Box",
        content: "Rigid Box",
        url: "#"
      },
      {
        imageSrc:PackagingTrayImg,
        title: "Top Bottom Box",
        content: "Rigid Box",
        url: "#"
      },
      {
        imageSrc:PackagingTrayImg,
        title: "Special Shape Boxes",
        content: "Rigid Box",
        url: "#"
      }
    ],
    Blisters: [
      {
        imageSrc:PackagingTrayImg,
        title: "Packaging Trays",
        content: "Blister Trays",
        url: "#"
      },
      {
        imageSrc:DisplayTrayImg,
        title: "Display Trays",
        content: "Blister Trays",
        url: "#"
      },
      {
        imageSrc:PackagingTrayImg,
        title: "Material Handling Trays",
        content: "Blister Trays",
        url: "#"
      },
      {
        imageSrc:PackagingTrayImg,
        title: "Sealing Blisters",
        content: "Card Blisters",
        url: "#"
      },
      {
        imageSrc:PackagingTrayImg,
        title: "Sliding Blisters",
        content: "Card Blisters",
        url: "#"
      },
      {
        imageSrc:PackagingTrayImg,
        title: "Clamp Shells",
        content: "Card Blister",
        url: "#"
      },
      {
        imageSrc:PackagingTrayImg,
        title: "Welded Blisters",
        content: "Card Blister",
        url: "#"
      }
    ],
    Boxes: [
      {
        imageSrc:PackagingTrayImg,
        title: "Magnet Flip Box",
        content: "Rigid Box",
        url: "#"
      },
      {
        imageSrc:PackagingTrayImg,
        title: "Top Bottom Box",
        content: "Rigid Box",
        url: "#"
      },
      {
        imageSrc:PackagingTrayImg,
        title: "Special Shape Boxes",
        content: "Rigid Box",
        url: "#"
      },
      {
        imageSrc:PackagingTrayImg,
        title: "Welded PP Box",
        content: "Plastic Box",
        url: "#"
      },
      {
        imageSrc:PackagingTrayImg,
        title: "PET & PVC Box",
        content: "Plastic Box",
        url: "#"
      }
    ],
    DisplayArticles: [

    ],
  }
}) => {
  /*
   * To customize the tabs, pass in data using the `tabs` prop. It should be an object which contains the name of the tab
   * as the key and value of the key will be its content (as an array of objects).
   * To see what attributes are configurable of each object inside this array see the example above for "Starters".
   */
  const tabsKeys = Object.keys(tabs);
  const [activeTab, setActiveTab] = useState(tabsKeys[0]);

  return (
    <Container>
      <ContentWithPaddingXl>
        <HeaderRow>
          <Header>{heading}</Header>
          <TabsControl>
            {Object.keys(tabs).map((tabName, index) => (
              <TabControl key={index} active={activeTab === tabName} onClick={() => setActiveTab(tabName)}>
                {tabName}
              </TabControl>
            ))}
          </TabsControl>
        </HeaderRow>

        {tabsKeys.map((tabKey, index) => (
          <TabContent
            key={index}
            variants={{
              current: {
                opacity: 1,
                scale:1,
                display: "flex",
              },
              hidden: {
                opacity: 0,
                scale:0.8,
                display: "none",
              }
            }}
            transition={{ duration: 0.4 }}
            initial={activeTab === tabKey ? "current" : "hidden"}
            animate={activeTab === tabKey ? "current" : "hidden"}
          >
            {tabs[tabKey].map((card, index) => (
              <CardContainer key={index}>
                <Card className="group" href={card.url} initial="rest" whileHover="hover" animate="rest">
                  <CardImageContainer imageSrc={card.imageSrc}>
                    <CardHoverOverlay
                      variants={{
                        hover: {
                          opacity: 1,
                          height: "auto"
                        },
                        rest: {
                          opacity: 0,
                          height: 0
                        }
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <CardButton>Know More</CardButton>
                    </CardHoverOverlay>
                  </CardImageContainer>
                  <CardText>
                    <CardTitle>{card.title}</CardTitle>
                    <CardContent>{card.content}</CardContent>
                  </CardText>
                </Card>
              </CardContainer>
            ))}
          </TabContent>
        ))}
      </ContentWithPaddingXl>
    </Container>
  );
};


