import React, { Component } from "react";

const colorContext = React.createContext();

class ColorProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bkColor1: "lightblue",
      bkColor2: "pink",
      fontSize: "2em",
    };
  }

  switchColor = () => {
    this.setState({
      bkColor1: this.state.bkColor2,
      bkColor2: this.state.bkColor1,
    });
  };

  render() {
    const { children } = this.props;
    return (
      <colorContext.Provider
        value={{ ...this.state, switchColor: this.switchColor }}
      >
        {children}
      </colorContext.Provider>
    );
  }
}

const ColorConsumer = colorContext.Consumer;

export { colorContext, ColorProvider, ColorConsumer };
