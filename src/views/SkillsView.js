import React, { Component } from "react";

import SkillCard from "../components/SkillCard";
import PageArrow from "../components/PageArrow";
import PageHeader from "../components/PageHeader";

import { colors, API_SKILLS } from "../constants";
import "../App.css";

export default class SkillsView extends Component {
  state = {
    skillsFetched: false,
    skillsAndAddons: {}
  };

  componentDidMount() {
    fetch(API_SKILLS)
      .then(result => result.json())
      .then(skillsAndAddons => {
        this.setState({ skillsAndAddons, skillsFetched: true });
      });
  }

  renderSkillsAndAddons = () => {
    return (
      <div className="flex-container row wrap jc-center skill-container">
        <SkillCard
          skillName={"Frontend"}
          skills={this.state.skillsAndAddons.frontend.skills}
          h1Background={colors.blackish}
          h1Color={"white"}
          addOns={this.state.skillsAndAddons.frontend.addons}
        />

        <SkillCard
          skillName={"Backend"}
          skills={this.state.skillsAndAddons.backend.skills}
          h1Background={colors.blackish}
          h1Color={"white"}
          addOns={this.state.skillsAndAddons.backend.addons}
        />

        <SkillCard
          skillName={"Tools"}
          skills={this.state.skillsAndAddons.tools.skills}
          h1Background={colors.blackish}
          h1Color={"white"}
        />

        <SkillCard
          skillName={"For fun"}
          skills={this.state.skillsAndAddons.other.skills}
          h1Background={colors.blackish}
          h1Color={"white"}
        />
      </div>
    );
  };

  render() {
    const { skillsFetched } = this.state;
    return (
      <section className="flex-container col al-center jc-center">
        <PageHeader text={"Skills"} />

        {skillsFetched ? this.renderSkillsAndAddons() : null}

        <PageArrow to={"/about"} />
      </section>
    );
  }
}
