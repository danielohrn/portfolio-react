import React, { Component } from "react";

export default class AnimatedProgressBar extends Component {
  state = {
    startValue: 0,
    targetValue: null,
    currentValue: 0,
    color: null
  };

  componentDidMount() {
    const { targetValue, startValue } = this.props;
    this.setState({ targetValue, startValue });
    this.handleTick();
  }

  componentWillUnmount() {
    clearInterval(this.tickInterval);
  }

  handleTick = () => {
    const { updateFrequency } = this.props;
    this.tickInterval = setInterval(() => {
      this.tick();
    }, updateFrequency);
  };

  tick = () => {
    const currentValue = this.state.currentValue;
    this.setState({ currentValue: currentValue + 1 });

    if (currentValue >= this.state.targetValue) {
      clearInterval(this.tickInterval);
    }
  };

  render() {
    const { currentValue } = this.state;

    return (
      <div
        style={{
          ...styles,
          width: `${currentValue}%`
        }}
      />
    );
  }
}

const styles = {
  position: "absolute",
  left: 0,
  top: 0,
  width: "100%",
  height: "100%",
  background: "#dedede"
};
