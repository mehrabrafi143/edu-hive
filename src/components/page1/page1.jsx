import React, { Component } from "react";
import Header from "./header/header";
import Hero from "./hero/hero";
import Section1 from "./section1/section-1";
import SectionBlue from "./sectionBlue/sectionBlue";
import OurApproch from "./our-approch/ourApproach";
import SectionProud from "./section-proud/section-proud";
import SectionTecher from "./sectionTecher/sectionTecher";
import SectionStart from "./sectionStart/sectionStart";
import sectionDownload from "./sectionDownload/sectionDownload";
import SectionDownload from "./sectionDownload/sectionDownload";
import Footer from "./footer/footer";

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
        <SectionProud />
        <SectionTecher />
        <SectionStart />
        <SectionDownload />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Page1;
