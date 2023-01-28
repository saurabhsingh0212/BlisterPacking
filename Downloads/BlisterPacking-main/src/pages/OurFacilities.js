import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line

import Hero from "components/OurFacilitiesHero"
import Feature from "components/OurFacilitiesStats"
import Footer from "components/Footer.js";

export default () => {
    return(
        <>
        <Hero />
        <Feature/>
        <Footer />
        </>
    );
}
