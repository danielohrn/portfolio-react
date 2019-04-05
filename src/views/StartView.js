import React from "react";
import Overdrive from "react-overdrive";

import PageArrow from "../components/PageArrow";

import "../App.css";

const StartView = () => (
  <section
    className="flex-container col jc-center al-center"
    style={styles.section}
  >
    <div style={{ textAlign: "center" }}>
      <Overdrive id="eagle" duration={500}>
        <img src="./img/eagle.png" style={{ width: 100 }} alt="eagle" />
      </Overdrive>

      <h1
        style={{
          textTransform: "uppercase",
          fontSize: "3em",
          color: "#dedede"
        }}
      >
        Daniel Öhrn Hasslöf
      </h1>

      <p>Frontend developer | Stockholm</p>
      <PageArrow to={"/skills"} name={"Skills"} />
    </div>
  </section>
);

export default StartView;

const styles = {
  section: {
    color: "white"
  }
};
