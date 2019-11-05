import React, { Component } from "react";
import Header from "./header/header";
import Hero from "./hero/hero";
import Section1 from "./section1/section-1";
import SectionBlue from "./sectionBlue/sectionBlue";
import OurApproch from "./our-approch/ourApproach";

class Page1 extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Header />
        <Hero />
        <Section1 />
        <SectionBlue />
        <OurApproch />
      </React.Fragment>
    );
  }
}

export default Page1;
