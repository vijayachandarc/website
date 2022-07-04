import React, { Component } from "react";
import image from "../assets/img/teams.jpg";
import Header from "../common/Header";
import TeamItem from "../common/TeamItem";

const teamDetails = [
  {
    name: "Parveen Anand",
    role: "Lead Designer",
    img: "../assets/img/team/1.jpg",
  },
  {
    name: "Diana Petersen",
    role: "Lead Marketer",
    img: "../assets/img/team/2.jpg",
  },
  {
    name: "Larry Parker",
    role: "Lead Developer",
    img: "../assets/img/team/3.jpg",
  },
];

class Team extends Component {
  render() {
    return (
      <div>
        <Header showButton={false} image={image} />
        <section className="page-section bg-light" id="team">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">
                Our Amazing Team
              </h2>
              <h3 className="section-subheading text-muted">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </div>
            <div className="row">
              {teamDetails.map((item, index) => {
                return <TeamItem {...item} key={index} />;
              })}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Team;
