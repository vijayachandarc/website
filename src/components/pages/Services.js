import React, { Component } from "react";
import Header from "../common/Header";
import image from "../assets/img/3VvZfK5Dgmf7Cb.jpg";
import SingleService from "../common/SingleService";

const services = [
  {
    title: "E-commerce",
    description: "Buy anything from here",
    icon: "fa-shopping-cart",
  },
  {
    title: "Responsive Design",
    description: "Design Thinking",
    icon: "fa-laptop",
  },
  { title: "Web Security", description: "Secure", icon: "fa-lock" },
];

class Services extends Component {
  render() {
    return (
      <div>
        <Header
          title="Services That We Offer"
          subtitle="List Of Services"
          showButton={false}
          image={image}
        />

        <section className="page-section" id="services">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">Services</h2>
              <h3 className="section-subheading text-muted">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </div>
            <div className="row text-center">
              {services.map((service, index) => {
                return <SingleService {...service} key={index} />;
              })}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Services;
