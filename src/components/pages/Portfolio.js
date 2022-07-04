import React, { Component } from "react";
import Header from "../common/Header";
import image from "../assets/img/portfolio.jpg";
import SingleFolio from "../common/SingleFolio";

const portfolioHeaderData = [{ title: "PORTFOLIO", description: "" }];

const portfolioContentData = [
  {
    title: "Threads",
    desc: "Illustration",
    image: "../assets/img/portfolio/1.jpg",
    styl: "col-lg-4 col-sm-6 mb-4",
  },
  {
    title: "Explore",
    desc: "Graphic Design",
    image: "../assets/img/portfolio/2.jpg",
    styl: "col-lg-4 col-sm-6 mb-4",
  },
  {
    title: "Finish",
    desc: "Identity",
    image: "../assets/img/portfolio/3.jpg",
    styl: "col-lg-4 col-sm-6 mb-4",
  },
  {
    title: "Lines",
    desc: "Branding",
    image: "../assets/img/portfolio/4.jpg",
    styl: "col-lg-4 col-sm-6 mb-4 mb-lg-0",
  },
  {
    title: "Southwest",
    desc: "Website Design",
    image: "../assets/img/portfolio/5.jpg",
    styl: "col-lg-4 col-sm-6 mb-4 mb-sm-0",
  },
  {
    title: "Window",
    desc: "Photography",
    image: "../assets/img/portfolio/6.jpg",
    styl: "col-lg-4 col-sm-6",
  },
];

class Portfolio extends Component {
  render() {
    return (
      <div>
        <Header
          title={`${portfolioHeaderData[0].title}`}
          subtitle={`${portfolioHeaderData[0].description}`}
          showButton={false}
          image={image}
        />
        <section className="page-section bg-light" id="portfolio">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">
                Portfolio that we hold
              </h2>
              <h3 className="section-subheading text-muted">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </div>
            <div className="row">
              {portfolioContentData.map((item, index) => {
                return <SingleFolio {...item} key={index} />;
              })}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Portfolio;
